import React, { Component } from 'react';
import Test1 from './Test1';
import axios from 'axios';

class Test1 extends Component {
    render () {
        return(
        <div class="card" style="width: 18rem;">
                <img src="https://i.pinimg.com/originals/7e/39/68/7e396827be9696d42bb2848eed2cf9e2.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">¿Cuales son tus color favorito?</h5>
                  <a href="#" class="btn btn-primary">Neutros</a>
                  <a href="#" class="btn btn-primary">Neones</a>
                  <a href="#" class="btn btn-primary">Pasteles</a>
                </div>
              </div>

              <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRicsYBuSBgbqGcweAjujA7qbtrh49DVrYt0Y4VC9_RWPNOgDd" class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h5 class="card-title">Te describirias como una persona...</h5>
                <a href="#" class="btn btn-primary">Creativa</a>
                <a href="#" class="btn btn-primary">Romantica</a>
                <a href="#" class="btn btn-primary">Enojona</a>
                </div>
            </div>
            
                <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPp9zFLl0ygaQ0_yyEyXwGMkRbFV1elLim5lfQIwD4dWculycQ" class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h5 class="card-title">¿Que es lo que mas te gusta hacer?</h5>
                <a href="#" class="btn btn-primary">Comer</a>
                <a href="#" class="btn btn-primary">Salir</a>
                <a href="#" class="btn btn-primary">Dormir</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://pbs.twimg.com/media/D40ErQaXsAAVasT.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h5 class="card-title">¿Que prefieres?</h5>
                <a href="#" class="btn btn-primary">Frio</a>
                <a href="#" class="btn btn-primary">Calor></a>
                <a href="#" class="btn btn-primary">Me da igual</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIJ7ITyYLHAgzm_A3imlXeCJevhG-7Fn_BM8AQXwCC-nAMhPNu" class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h5 class="card-title">¿Cual es tu comida preferida?</h5>
                <a href="#" class="btn btn-primary">Pizza</a>
                <a href="#" class="btn btn-primary">Pasta</a>
                <a href="#" class="btn btn-primary">Ensalada</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIckwcw_mmE4yqiA1YT4uEajMUPM12D1gHCB91c7bcovpfOCPF" class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h5 class="card-title">¿Cual es tu dia favorito?</h5>
                <a href="#" class="btn btn-primary">Lunes</a>
                <a href="#" class="btn btn-primary">Miercoles</a>
                <a href="#" class="btn btn-primary">Sabado</a>
                </div>
            </div>
            );
    }
}
export default Test1;