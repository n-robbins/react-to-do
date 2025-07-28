export function TodoItem(props){
    return(
        <li>
            <label>
                <input type = "checkbox" checked={props.completed } 
                onChange={e => props.toggleTodo(props.id, e.currentTarget.checked)}
                /> 
                {props.title}
                <button className = "delete-button" 
                onClick={() => props.deleteTodo(props.id)}
                >DELETE</button>
            </label>
            </li>
    )
}