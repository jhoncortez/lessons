import React, { Component } from 'react'

export class Car extends Component {
    constructor(props) {
        super(props);
        this.state = { model: this.props.model, color: this.props.color, year:this.props.year}
    }
    changeColor = () => {
        this.setState({color:"blue"})
    }
    render() {
        return (
            <div className={this.state.model}>
                <h2>{this.props.brand} - {this.state.model} </h2>
                <ul>
                    <li>
                        model {this.state.model}
                    </li>
                    <li>
                        color {this.state.color}
                    </li>
                    <li>
                        year {this.state.year}
                    </li>
                </ul>
                <button type="button" onClick={this.changeColor}>Change color </button>
            </div>
        )
    }
}

// Specifies the default values for props:
Car.defaultProps = {
    brand: '',
    model: '',
    color: '',
    year: '',
  };
export default Car
