import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Testmate from './Components/Testmate'
import Testmichi from './Components/Testmichi'
import HomeTest from './Components/HomeTest';

class App extends Component {
  render(){
  return (
  <div>
    
    <div>
      <Testmate/>

      </div>
   
    <div>
      <Testmichi/>

    </div>
    </div>
  );
}
}

export default App;
