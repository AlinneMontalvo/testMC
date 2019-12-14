import'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from'./componentes/Navbar';
import Testuno from './'
class App extends Component {
  render(){
  return (
    <div>
      <Navbar />
      <div className="container">
        <Testuno/>
      </div>
    </div>
  );
}
}
export default App;
