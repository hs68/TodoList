import './App.css';
import Header from './Mycomponent/header';
import Todos from './Mycomponent/Todos';
import Footer from './Mycomponent/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './Mycomponent/Addtodo';
import About from './Mycomponent/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let inittodo = [];
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.getItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0)
      sno = 0;
    else
      sno = todos[todos.length - 1].sno + 1;
    const mytodo = {
      title: title,
      desc: desc,
      sno: sno
    }
    settodos([...todos, mytodo]);


  }

  const [todos, settodos] = useState(inittodo)
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)) }, [todos])
  return (
    <Router>
      <Header title="Todos List" />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          )
        }}></Route>
        <Route exact path="/about" render={() => {
          return (
            <>
              <About/>
            </>
          )
        }}></Route>
        

      </Switch>
      <Footer />

    </Router>
    

  );
}

export default App;
