import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ params }) => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList filter={params.filter === undefined ? 'all' : params.filter} />
            <Footer />
        </div>
    )
}

export default App
