import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
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

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>

  );
}

export default App;
