import { TodoItem } from "./TodoItem"

export function TodoList(props){
    return(
        <ul>
        {props.todos.map(todo => {
        return (
            <TodoItem 
            key = {todo.id} 
            id = {todo.id}
            completed = {todo.completed}
            title= {todo.title}
            toggleTodo={props.toggleTodo} 
            deleteTodo={props.deleteTodo}
            />
        )
        })}
        </ul>
    )
}