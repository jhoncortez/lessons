
import {useState} from 'react'
import Header from './components/Header'

function App() {
  
  const name = "Jon"
  const title=`Hello ${name} Welcome to Task Tracker application`
  
  return (
    <div className="container">
      {/* <h1>Hello {name} from react</h1> */}
      <Header title = {title}  />
    </div>
  );
}

export default App;
