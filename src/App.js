import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context';
import AddTodo from './Todo/AddTodo'
import Waves from './Waves/Waves';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: 'Buy milk'},
    { id: 2, complited: false, title: 'Buy butter'},
    { id: 3, complited: false, title: 'Buy bread'},
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complited = !todo.complited
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <div className='content'>
            <h1>ToDo List</h1>
          <AddTodo onCreate={addTodo}/>
          {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo}/>
          ) : (
            <p>No todos!</p>
          )}
        </div>
        <Waves />
      </div>
      
    </Context.Provider>
  );
}

export default App;
