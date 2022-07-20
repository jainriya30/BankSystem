import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BankImg from '../assets/Bank.png';

export default class Home extends Component {

    render() {
        return (
     <>
     <div align="center" >
        <h1>WELCOME TO SPARKS BANK!!</h1>
    </div>
    <Carousel variant="dark" >
      <Carousel.Item interval={10000}>
      <img
          className="d-block w-100 "
          src={BankImg}
          alt="welcome"
          
        />
        <Carousel.Caption>
          <h3>Welcome to SPARKS BANK!!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <h3> Project by Riya Jain</h3>
        <Carousel.Caption>
          <h3>Project by RIYA JAIN</h3>
        </Carousel.Caption>
        <img
          className="d-block w-100  "
          src={BankImg}
          alt="Second slide"
          style={ { display:'block' }}
        />
      </Carousel.Item>
      
    </Carousel>
            
</>
    
        )
    }
}