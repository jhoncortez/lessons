import './App.css';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

const App = () => {
  return (
    <div>
      <h1>My todos</h1>
      <Todo title="To do 1" />
      <Todo title="To do 2"/>
      <Todo title="To do 3"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
