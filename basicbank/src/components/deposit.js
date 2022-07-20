import React, { Component } from 'react';
import axios from 'axios';

export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.onChangeBalance = this.onChangeBalance.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
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

  onChangeBalance(e) {
    this.setState({
      balance: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      
      balance: this.state.balance
    }

    console.log(customer);

    console.log(this.props.match.params.id);
    axios.post('http://localhost:5000/customers/deposit/' + this.props.match.params.id, customer)
      .then(res => console.log(res.data));
    
      window.location = '/customers';
      
  }

  render() {
    return (
    <div>
      <h3>Deposit amount: </h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group">
          <label>Amount (in rupees): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.balance}
              onChange={this.onChangeBalance}
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="Deposit" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}