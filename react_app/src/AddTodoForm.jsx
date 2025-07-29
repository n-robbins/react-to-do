import { useEffect, useState } from "react"
export function AddTodoForm(props){

    const [newTodo, setNewTodo] = useState("");

    const submitTodo = async (e)=>{
        e.preventDefault();
        const newTodoData = {
            name : newTodo,
            isCompleted: false
        };
        await props.addTodo(newTodoData);
        setNewTodo("");
    }
    return(
  
        <form className= "add-todo-form"onSubmit={submitTodo}>
        <input 
            className = "todo_text_input"
            type="text" 
            value={newTodo}
            placeholder="todo" 
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className= "submit-button" type="submit" disabled={!newTodo.trim()}>ADD TODO</button>
        </form>
    )
}