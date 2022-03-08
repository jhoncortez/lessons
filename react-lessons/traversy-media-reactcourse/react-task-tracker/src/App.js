
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
    ]
  )

  const addTask = (objTask) => {
    console.log(objTask)
    setTasks([...tasks, {
      "id": tasks.length + 1,
      "text": objTask.text,
      "day": objTask.day,
      "reminder": objTask.reminder
    }])
  }

  const deleteTask = (id) =>  {
    // console.log('delete ',id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // togggle reminder
  const toggleReminder = (id)  => {
    setTasks(tasks.map((task) => 
      task.id === id ? {
        ...task, reminder: !task.reminder
      } : task
    ))
  }

  const title ='React Task Tacker'
  return (
    <div className="container">
      <Header title = {title}  />
      <AddTask onAdd={addTask} />
      { tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      ) : (
        <>
        No tasks to show
        </>
      )}
    </div>
  );
}

export default App;
