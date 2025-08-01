import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App(){
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITMES")
    if(localValue == null){
      return []
    }
    return JSON.parse(localValue)
  }
  );

  useEffect(() => {
    localStorage.setItem("ITMES",   JSON.stringify(todos))
  },[todos]
  )

  function addTodo(title){
    setTodos(currentTodos => {
      const updatedCurrentTodos = [...currentTodos, 
      {id:crypto.randomUUID(), title: title, completed: false}];
      console.log(updatedCurrentTodos)
      return updatedCurrentTodos;
    })
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
  <NewTodoForm onSubmit = {addTodo}/>

  <h1 id = "header">Todo List </h1>
  <TodoList todos= {todos} toggleTodo={toggleTodo} deleteTodo={deleteItem}/>
  </>

}