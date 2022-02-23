import React from 'react'
import { TaskContext } from './TaskContext';
function Item({ Task, text }) {
    const { deleteTask, completeTask } = React.useContext(TaskContext)
    const deleteThis = () => {
        deleteTask(Task.id);
    }
    const completeThis = () => {
        completeTask(Task.id)
    }
    return (
        <li className={Task.completed ? "completed items" : "items"}>
            {/* <i class='bx bx-check'></i> */}
            <i className={Task.completed ? "bx bx-check checked" : "bx bx-check"} onClick={completeThis} ></i>
            <p className='text-item' >{text}</p>
            {/* <i class='bx bx-x' ></i> */}
            <i className='bx bx-x' onClick={deleteThis} ></i>
        </li>)
}

export { Item }