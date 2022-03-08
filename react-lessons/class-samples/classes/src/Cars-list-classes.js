import React, { Component } from 'react'
import Car from './Car-classes';

export class CarsList extends Component {
    constructor(props) {
        super(props);
        this.cars = [
            { id:1, brand:"Ford", model:"Mustang", color:"Yellow", year:"2016" },
            { id:2, brand:"BMW", model:"Safiro", color:"Black", year:"2018" },
            { id:3, brand:"Audi", model:"Leans", color:"Red", year:"2021" }
        ] 
    }
    
    render() {
        
        return (
            <>
            {this.cars &&(
                <div class="cars-list">
                    <h2>Cars</h2>
                    <ul>
                        {this.cars.map(
                            (car) =><li><Car key={car.id} brand={car.brand} model={car.model} color={car.color} /></li>
                        )}
                    </ul>
                </div>
                
            )}
                
            </>
        )
    }
}

export default Car
