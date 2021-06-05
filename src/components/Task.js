import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div style={{"display": "flex", "justifyColumn": "center", "alignItems": "center"}}>
            <div
                className={`task ${!task.reminder && 'reminder'}`}
                onClick={() => onToggle(task.id)}
                style={{width: "90%"}}
                

            >
                <h3>
                    {task.text}{' '}

                </h3>
                <p>{task.day}</p>
            </div>
            <div style={{width: "10%"}}> 
                <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
            /></div>
        </div>
    )
}

export default Task