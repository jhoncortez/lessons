 import {Message, Welcome} from "./components/Welcome"

function App() {
  // const name = "JONATHAN" 
  const user = {
    firstName: "Jonathan",
    lastName: "Cortes"
  }
  
  const complete_name = (u) => {
    return  `${u.firstName} ${u.lastName}`
  }
  return (
    <div className="App">

    <Welcome />
    <Welcome user={complete_name(user)} />
    <Message message="This is an example of import components and basic props"/>

    </div>
  );
}

export default App;
