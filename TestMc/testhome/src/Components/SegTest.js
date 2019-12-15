import React, { Component} from 'react';
import HomeTest from './HomeTest';
import axios from 'axios'; 

class HomeTest  extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardHomeTest: [<HomeTest>,<HomeTest>,<HomeTest>,<HomeTest>]
            HomeTest:[]
        }
    }
    componentDidMount(){
        // consumir el enpoi
        const URL = 'https://protected-peak-83988.herokuapp.com/all/'
        axios.get(URL)
        .then((result) => {
            const respuesta = result.data;
            const arregloDeHomeTest = respuesta.map(HomeTest => <HomeTest name={HomeTest.nombre}/>);
            this.state({
                directores: arregloDeHomeTest
            });
        }).catch((err) =>{
            console.log(err);

        })

    }

    render (){
        return (
            <section className='row'>
                
                
                {[<HomeTest>,</HomeTest>,<HomeTest>,</HomeTest>]}
            </section>
        )
    }

}












export default Directores;