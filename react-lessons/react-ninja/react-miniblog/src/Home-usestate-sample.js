import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('jon');
    const [age, setAge] = useState(31);
    const handleClick = (e) => {
      console.log('hello ninjas', e);
    }
  
    const handleClickAgain = (name, age, e) => {
      setName(name);
      setAge(age);
    }
  
    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age}</p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain('mario', 60, e)}>CLick to change text variables</button>
      </div>
    );
  }
   
  export default Home;
  