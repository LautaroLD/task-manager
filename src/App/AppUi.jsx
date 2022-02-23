import React from 'react'
import { CreateItem } from './components/CreateItem'
import { ListTasks } from './components/ListTasks'
import { BtnsFilter } from './components/BtnsFilter'
import { Header } from './components/Header'

function AppUi() {
    return (
        <React.Fragment>
            <Header />
            <CreateItem />
            <main>
                <ListTasks />
                <BtnsFilter />
            </main>
        </React.Fragment>
    )
}
export { AppUi }
