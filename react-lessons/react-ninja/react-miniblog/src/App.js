import './index.css'
import Navbar from './components/Navbar'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
