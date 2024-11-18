import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice';

function ViewTodo() {

    const {todos} = useSelector((state)=>  state.todo)

    const dispatch = useDispatch();

  return (
    <div>
      <ol>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text} 
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>remove</button>
                </li>
            ))
        }
      </ol>
    </div>
  )
}

export default ViewTodo
