
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
      <h1>hello {complete_name(user)}</h1>

    </div>
  );
}

export default App;
