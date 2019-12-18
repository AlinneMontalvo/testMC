import React, { Component } from 'react';



class Testmate extends Component {
    render(){
        return(
            <div>
        <div className="card acomcard uno">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ21BaNUU3pL_xYajQXDIBYtOY-OnI8rJxijMRi9hsHtUkgikqE" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">¿Que numero sigue por logica en la serie?</h5>
                  <p className="card-text">{this.props.name}, 4,6,9,6,14,6...</p>
                  <a href="#" className="btn btn-primary">6</a>
                  <a href="#" className="btn btn-primary">19!</a>
                  <a href="#" className="btn btn-primary">21</a>
                </div>
              </div>

              <div className="card acomcard dos" >
                <img src="https://images.vexels.com/media/users/3/156900/isolated/preview/eeffdb662861c6510002524c74d92d45-icono-de-dibujos-animados-de-sombrero-peregrino-by-vexels.png" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">MANO es a GUANTE como CABEZA es a:</h5>
                <p className="card-text">{this.props.name}</p>
                <a href="#" className="btn btn-primary">Sombrero!</a>
                <a href="#" className="btn btn-primary">Cuello</a>
                <a href="#" className="btn btn-primary">Pendiente</a>
                </div>
            </div>
            

            <div className="card acomcard tres" >
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

    

            <div className="card acomcard cuatro" >
                <img src="" className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">Cada uno de tres hermanos tienen una hermana ¿cuantos son entre todos?</h5>
                <p className="card-text">{this.props.name}</p>
                <a href="#" className="btn btn-primary">Tres</a>
                <a href="#" className="btn btn-primary">Seis</a>
                <a href="#" className="btn btn-primary">Cuatro</a>
                </div>
            </div>
            </div>
        );
    }
}
    

export default Testmate;