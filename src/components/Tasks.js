const tasks = [
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
]
const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
