import React, { Component } from 'react';
import '../Components/card.css';


class Testmichi extends Component {
    render(){
        return( <div id="acomcard">
    
        <div className="card acomcard uno2">
                <img src="https://i.pinimg.com/originals/7e/39/68/7e396827be9696d42bb2848eed2cf9e2.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">¿Cuales son tus color favorito?</h5>
                  <a href="#" className="btn btn-primary">Neutros</a>
                  <a href="#" className="btn btn-primary">Neones</a>
                  <a href="#" className="btn btn-primary">Pasteles</a>
                </div>
              </div>

              <div className="card acomcard dos2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRicsYBuSBgbqGcweAjujA7qbtrh49DVrYt0Y4VC9_RWPNOgDd" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">Te describirias como una persona...</h5>
                <a href="#" className="btn btn-primary">Creativa</a>
                <a href="#" className="btn btn-primary">Romantica</a>
                <a href="#" className="btn btn-primary">Enojona</a>
                </div>
            </div>
            
                <div className="card acomcard tres2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPp9zFLl0ygaQ0_yyEyXwGMkRbFV1elLim5lfQIwD4dWculycQ" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">¿Que es lo que mas te gusta hacer?</h5>
                <a href="#" className="btn btn-primary">Comer</a>
                <a href="#" className="btn btn-primary">Salir</a>
                <a href="#" className="btn btn-primary">Dormir</a>
                </div>
            </div>

            </div>

            <div className="card acomcard cuatro2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIJ7ITyYLHAgzm_A3imlXeCJevhG-7Fn_BM8AQXwCC-nAMhPNu" class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">¿Cual es tu comida preferida?</h5>
                <a href="#" className="btn btn-primary">Pizza</a>
                <a href="#" className="btn btn-primary">Pasta</a>
                <a href="#" className="btn btn-primary">Ensalada</a>
                </div>
            </div>

            
        );
    }
}
export default Testmichi;
