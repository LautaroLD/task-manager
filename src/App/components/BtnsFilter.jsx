import React from 'react'
import { TaskContext } from "./TaskContext";
function BtnsFilter() {
    const { TasksNoCompleted,
        deleteCompletedTasks,
        filter_itemsAll,
        filter_itemsCompleted,
        filter_itemsActive } = React.useContext(TaskContext)
    const deleteCompleted = () => {
        deleteCompletedTasks()
    }
    const filter_items = (event) => {
        switch (event.target.outerText) {
            case 'All':
                filter_itemsAll()
                break;
            case 'Active':
                filter_itemsActive()
                break;
            case 'Completed':
                filter_itemsCompleted()
                break;


            default:
                break;
        }
    }
    return (
        <div className="btns-container">
            <p className="countP">{TasksNoCompleted} items left</p>
            <a className="clearComplete--btn" onClick={deleteCompleted} >Clear Completed</a>
            <p className='title-filter' >Filter by</p>
            <div className="container-btns-filter">
                <a onClick={filter_items} >All</a>
                <a onClick={filter_items} >Active</a>
                <a onClick={filter_items} >Completed</a>
            </div>
        </div>
    )
}

export { BtnsFilter }