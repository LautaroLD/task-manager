import React from 'react'
import { Item } from './Item'
import { TaskContext } from './TaskContext';
function ListTasks() {
    const { item, loading, filterItems } = React.useContext(TaskContext)

    return (
        <ul className="items-list">
            {loading && <p className='list-loading--text' >Loading...</p>}
            {(!loading && !item.length) && <p className='list-empty--text' >You haven't task pending!</p>}
            {filterItems.map(Task => <Item
                Task={Task}
                key={Task.id}
                text={Task.text}
            />)}
        </ul>
    )
}

export { ListTasks }