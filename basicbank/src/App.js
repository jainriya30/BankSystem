import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbarr from "./components/navbar.js"
import CustList from "./components/custlist.js";
import TransList from './components/translist';
import Deposit from './components/deposit';
import Transfer from './components/transfer';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="container">
        <br></br>
      <Navbarr/>
      <br/>
      <Route path="/" exact component={Home}  />
      <Route path="/customers" exact component={CustList}  />
      <Route path="/transactions" component={TransList}  />
      <Route path="/deposit/:id" component={Deposit}  />
      <Route path="/transfer/:id" component={Transfer}  />
      <Route path="/depositt/:name" component={Transfer}  />

      </div>
    </Router>
  );
}

export default App;
