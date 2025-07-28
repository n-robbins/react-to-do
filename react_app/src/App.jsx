import { useState } from "react"

export default function App(){
  const [newItem,setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e){
    e.preventDefault();
    setTodos(currentTodos => {
      const updatedCurrentTodos = [...currentTodos, 
      {id:crypto.randomUUID(), title: newItem, completed: false}];
      console.log(updatedCurrentTodos)
      return updatedCurrentTodos;
    })
    setNewItem("");
  }
  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if (todo.id === id){
          return{ ...todo, completed}
        }
        return todo;
      })
    })
  }
  function deleteItem(id){
    setTodos( currentTodos =>{
      return currentTodos.filter(todo=>{
        return todo.id !== id
      })
    })

  }
  return <>
  <form onSubmit={handleSubmit} className = "new-item-form"> 
    <div className = "form-row">
      <label htmlFor= "item">New Item</label>
      <input 
      value = {newItem}
      onChange={e => {
        setNewItem(e.target.value);
      }}
      type = "text" 
      id ="item"/>
    </div>
    <button id = "add-new-item-button">Add Item</button> {/* a button inside a form is default type = "submit" */}
  </form>
  <h1 id = "header">Grocery List </h1>
  <ul>
    {todos.map(todo => {
      return (
        <li key ={todo.id}>
          <label>
            <input type = "checkbox" checked={todo.completed } onChange={e => toggleTodo(todo.id, e.currentTarget.checked)}/> 
            {todo.title}
            <button className = "delete-button" onClick={() => deleteItem(todo.id)}>DELETE</button>
          </label>
        </li>
      )
    })}

  </ul>
  </>

}