import React, { Component } from 'react';
import axios from 'axios';

export default class Transfer extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeBalance = this.onChangeBalance.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '', 
      balance: 0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/customers/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          balance: response.data.balance,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/customers/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(name => name.name),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      name: e.target.value
    })
  }


  onChangeBalance(e) {
    this.setState({
      balance: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      name: this.state.name,
      balance: this.state.balance
    }

    console.log(this.state.name);
    console.log(customer.balance);
    axios.post('http://localhost:5000/customers/transfer/' + this.props.match.params.id, customer)
      .then(res => console.log(res.data));
    
    axios.post('http://localhost:5000/customers/depositt/' + this.state.name, customer)
      .then(res => console.log(res.data));

      window.location = '/customers';

  }

  render() {
    return (
    <div>
      <h3>Transfer to: </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeUsername}
              >
              {
                this.state.users.map(function(name) {
                  return <option 
                    key={name}
                    value={name}>{name}
                    
                    </option>;
                })
              }
          </select>
        </div>
        
        <div className="form-group">
          <label>Amount (less than this amount): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.balance}
              onChange={this.onChangeBalance}
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="Transfer" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}