import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Pool Party",
        day: "June 6th at 1-3pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Last Day of School",
        day: "June 11th at 12pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Kids Leave to MN",
        day: "June 16th at 5:30pm",
        reminder: false,
    },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks to Show"}
    </div>

  );
}

export default App;
