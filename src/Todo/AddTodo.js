import React, {useState} from "react"; 
import './todoList.css'
import PropTypes from 'prop-types'


function AddTodo ({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)}/>
      <button className="add" type="submit"> Add todo!</button>
    </form>
  )
}

AddTodo.prpoTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo