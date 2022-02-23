import React from 'react'
import { AppUi } from './AppUi'
import { TaskProvider } from './components/TaskContext';
function App() {
    return (
        <TaskProvider>
            <AppUi />
        </TaskProvider>
    )
}

export { App }