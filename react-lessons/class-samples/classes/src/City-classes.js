import React, { Component } from 'react'

export class City extends Component {
    constructor() {
        super();
        this.state = {city:""}
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {city: props.cityName}
    // }
    changeName = (n) => {
        this.setState({city:n})
    }
    render() {
        const city = this.state.city;
        return (
            <>
            {/* create condition: if city then render city*/}
            {city &&(
                <div>
                    city: {this.state.city}
                </div>

            )}
            <button onClick={() => this.changeName('Newyork')} >Change city</button>
            </>
            
        )
    }
}

export default City
