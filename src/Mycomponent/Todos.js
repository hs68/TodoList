import React from 'react'
import Todo from './Todo'
export default function Todos(props) {
    let mystyle={
        minHeight:"70vh",
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? <p>No Todos to Display</p> :
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })}
        </div>
    )
}