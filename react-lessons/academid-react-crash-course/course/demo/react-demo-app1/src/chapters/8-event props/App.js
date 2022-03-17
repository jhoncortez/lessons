import './App.css';
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <h1>My todos</h1>
      <Todo title="To do 1" />
      <Todo title="To do 2"/>
      <Todo title="To do 3"/>
    </div>
  );
}

export default App;
