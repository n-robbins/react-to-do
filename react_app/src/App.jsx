import { useEffect, useState } from "react"
import supabase from "./supabase-client";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import './style.css';

export default function App(){
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    fetchTodos()
  },[])

  const addTodo = async (newTodoData)=>{
    const {data,error} = await supabase.from("Todo").insert([newTodoData]).select().single();
    if (error){
      console.log("error adding todo ", error);
    }
    else{
      setTodoList(
        currentTodos => {
          return [data,...currentTodos];
        }
        
      );
      
    }
  }

  const deleteTodo = async (id) =>{
    const {data,error} = await supabase.from("Todo").delete().eq('id',id);
    if (error) {
      console.log("error deleting todo: " , error);
    }
    else{
      setTodoList((currentTodos) =>{ 
        return currentTodos.filter((todo)=> todo.id !== id)});
    }

  }

  const toggleIsCompleted = async (id, completed) =>{
    console.log("completed: ", completed, "id: ", id);
    const {data,error} = await supabase.from("Todo").update({isCompleted: completed}).eq('id',id);
    if (error){
      console.log("error toggleing todo: ", error);
    }
    else{
      setTodoList(currentTodos =>{
        return currentTodos.map(todo =>{
          if (todo.id === id){
            return{ ...todo, isCompleted: completed}
          }
          return todo;
        })
      })
    }
  }

  const fetchTodos = async ()=>{
    const {data,error} = await supabase.from("Todo").select("*") .order('created_at', { ascending: false });
    if (error){
      console.log("error fetching todos: ", error)
    }
    else {
      setTodoList(data);
      console.log("Fetched todos:", data);  
    }
  }

  return(
    <>
    <h1 className = "page-title">Todo List with supabase</h1>
    <AddTodoForm addTodo={addTodo}/>
    <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleIsCompleted={toggleIsCompleted}/>

    </>
  )
}