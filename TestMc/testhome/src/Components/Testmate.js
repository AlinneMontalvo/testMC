import React, { Component } from 'react';
import Test2 from './Test2';
import axios from 'axios';

class Test2 extends Component {
    constructor(props){
        super (props);
        this.state = {
        };
        <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ21BaNUU3pL_xYajQXDIBYtOY-OnI8rJxijMRi9hsHtUkgikqE" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">¿Que numero sigue por logica en la serie?</h5>
                  <p className="card-text">{this.props.name}, 4,6,9,6,14,6...</p>
                  <a href="#" className="btn btn-primary">6</a>
                  <a href="#" className="btn btn-primary">19!</a>
                  <a href="#" className="btn btn-primary">21</a>
                </div>
              </div>

              <div className="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">MANO es a GUANTE como CABEZA es a:</h5>
                <p className="card-text">{this.props.name}</p>
                <a href="#" className="btn btn-primary">Sombrero!</a>
                <a href="#" className="btn btn-primary">Cuello</a>
                <a href="#" className="btn btn-primary">Pendiente</a>
                </div>
            </div>
            
            <div className="card" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRusZNJNWeEBcMR1k-XUPeWDVRhey1IK2cb2DY-MZ1A2orJk5fR" class="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">De estas 3 palabras ¿Cual es la intrusa?</h5>
            <p className="card-text">{this.props.name}</p>
            <a href="#" className="btn btn-primary">Viena</a>
            <a href="#" className="btn btn-primary">New York!</a>
            <a href="#" className="btn btn-primary">Madrid</a>
            </div>
            </div>

            <div className="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToXmdEHj6_ovfPeV-YXXO7LmeOnYRF5GkJx0Tczg2ZWiY7hn5E" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">¿Que numero completa esta serie?</h5>
                <p className="card-text">{this.props.name}</p>
                <p className="card-text">144,121,100,81,64</p>
                <a href="#" className="btn btn-primary">15</a>
                <a href="#" className="btn btn-primary">19</a>
                <a href="#" className="btn btn-primary">49!</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://i0.wp.com/www.chanboox.com/wp-content/uploads/2019/11/ideas-concepto.png?fit=620%2C300ssl=1resize=350%2C200" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">¡Que numero es la decima parte de la cuarta parte de la quinta parte ded la mitad de 120?</h5>
                <p className="card-text">{this.props.name}</p>
                <a href="#" className="btn btn-primary">250</a>
                <a href="#" className="btn btn-primary">45</a>
                <a href="#" className="btn btn-primary">30</a>
                </div>
            </div>

            <div className="card" style="width: 18rem;">
                <img src="" className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">Cada uno de tres hermanos tienen una hermana ¿cuantos son entre todos?</h5>
                <p className="card-text">{this.props.name}</p>
                <a href="#" className="btn btn-primary">Tres</a>
                <a href="#" className="btn btn-primary">Seis</a>
                <a href="#" className="btn btn-primary">Cuatro</a>
                </div>
            </div>
    }
}
    

export default Test2;