import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customer = props => (
  <tr>
    <td>{props.customer.name}</td>
    <td>{props.customer.email}</td>
    <td>{props.customer.balance}</td>
    <td>{props.customer.date.substring(0,10)}</td>
    <td>
      <Link to={"/deposit/"+props.customer._id}>Deposit</Link> | <Link to={"/transfer/"+props.customer._id} >Transfer</Link>
    </td>
  </tr>
)

export default class CustList extends Component {

  constructor(props) {
    super(props);

    this.state = {customers: []};
  } 

  componentDidMount() {
    axios.get('http://localhost:5000/customers/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  customerList() {
    return this.state.customers.map(currentcustomer => {
      return <Customer customer={currentcustomer}  key={currentcustomer._id}/>;
    })
  }

  render() {
    return (
      <>
      <div>
        <h3>All Customers</h3>
      </div>

      <div>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.customerList() }
        </tbody>
      </table>
      </div>

      </>
    )
  }
}