import React from 'react'
import { TaskContext } from './TaskContext';
function CreateItem() {

    const [newTaskValue, setNewTaskValue] = React.useState('');

    const {
        addTask
    } = React.useContext(TaskContext);
    const onChange = (event) => {
        setNewTaskValue(event.target.value);
        console.log('change')
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        event.target[0].value = null
        console.log('submit')
    };
    return (
        <form onSubmit={onSubmit} className="create-item" id="create-item">
            <input onChange={onChange} className="create-item--input" id="create-item--input" placeholder="Create a new task..." required
            ></input>
            <button className='create-item-btn' type='submit' id="create-item-btn">➕</button>
        </form>
    )
}

export { CreateItem }