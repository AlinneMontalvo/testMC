import React, { Component } from 'react';
import'./card.css';
class HomeTest extends Component {
    render () {
        return(
            <div className="card fix-card col-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_s46UDVOQ413gbKZmgjoowyyqYWOxa0eDEYrr17a8gcRI8ET->" className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className="card-text">{this.props.name}</p>
        </div>
        </div>
        );
     }
    }
 export default HomeTest;
