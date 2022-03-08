
function App() {
  const name = "Jon"
  const n1 = 1
  const n2 = 3
  return (
    <div className="container">
      <h1>Hello {name} from react</h1>
      {n1} + {n2} = {n1+n2}
    </div>
  );
}

export default App;
