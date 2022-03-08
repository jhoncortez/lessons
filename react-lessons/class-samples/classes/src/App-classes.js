import React, { PureComponent } from 'react'
import CarsList from './Cars-list-classes';
import City from "./City-classes";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {color:"red"};
    

  }
  render() {
    return (
      <div>
        color is {this.state.color}
        
        <City cityName="Boston" />
        <CarsList />
      </div>
    )
  }
}

export default App
