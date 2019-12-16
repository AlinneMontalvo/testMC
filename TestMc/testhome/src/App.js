import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import HomeTest from './Components/HomeTest';
import Testmichi from './Testmichi';
class App extends Component {
  render(){
  return (
    <div>
      <Navbar />
      <div className="container">
        <HomeTest/>
      </div>
    </div>

    <div>
      <Testmichi/>
    </div>
  );
}
}
export default App;
