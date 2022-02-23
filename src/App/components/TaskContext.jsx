import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const TaskContext = React.createContext();
const itemName = 'TaskS_V1'
const initialValue = []

function TaskProvider(props) {
    const [item, setItem] = React.useState([])
    const [filterItems, setFilterItems] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    // const [completed, setCompleted] = React.useState(false)
    let completed
    React.useEffect(() => {
        setTimeout(() => {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            // setFilterItems(parsedItem)
            setLoading(false)
        }, 1000);
    }, []);

    React.useEffect(() => {
        setFilterItems([...item])
    }, [item])
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem('TaskS_V1', stringifiedItem);
            setItem(newItem);
        } catch (error) {
        }
    };

    const addTask = (text) => {
        const newTasks = [...item];

        newTasks.push({
            id: uuidv4(),
            completed,
            text
        })
        saveItem(newTasks);
        console.log(newTasks)
        console.log(item)
    };
    const TasksNoCompleted = item.filter(Task => !Task.completed).length

    // const completedTasks = () => {
    //     return TaskCompleted
    // }
    const filter_itemsAll = () => {
        const newTasks = [...item]
        // item.forEach(Task => {
        //     if (!Task.completed) {
        //         newTasks.push(Task)
        //     }
        // })
        setFilterItems(newTasks);
    }
    const filter_itemsCompleted = () => {
        const newTasks = []
        item.forEach(Task => {
            if (Task.completed) {
                newTasks.push(Task)
            }
        })
        setFilterItems(newTasks);
        console.log(filterItems)
    }
    const filter_itemsActive = () => {
        const newTasks = []
        item.forEach(Task => {
            if (!Task.completed) {
                newTasks.push(Task)
            }
        })
        setFilterItems(newTasks);
    }
    const completeTask = (text) => {
        const TaskIndex = item.findIndex(Task => Task.id === text);
        const newTasks = [...item];
        newTasks[TaskIndex].completed = !newTasks[TaskIndex].completed;
        saveItem(newTasks);
    };
    const deleteTask = (text) => {
        const TaskIndex = item.findIndex(Task => Task.id === text);
        const newTasks = [...item];
        newTasks.splice(TaskIndex, 1);
        saveItem(newTasks);
    };
    const deleteCompletedTasks = () => {
        const newTasks = []
        item.forEach(Task => {
            if (!Task.completed) {
                newTasks.push(Task)
            }
        })
        saveItem(newTasks)
    }
    return (
        <TaskContext.Provider value={{
            deleteTask,
            addTask,
            completeTask,
            deleteCompletedTasks,
            filter_itemsActive,
            filter_itemsCompleted,
            filter_itemsAll,
            filterItems,
            TasksNoCompleted,
            item,
            loading
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };