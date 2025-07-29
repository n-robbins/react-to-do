export function TodoList(props){

    return(
        <div className="todo-list">
        <ul>
          {props.todoList.map((todo) => (
            <li key ={todo.id}>
              <input className ="check-box"type = "checkbox" checked={todo.isCompleted} onChange= {(e)=> props.toggleIsCompleted(todo.id,e.currentTarget.checked)}/>
              {todo.name}
              <button className = "deleteItem" onClick={()=>props.deleteTodo(todo.id)}>DELETE</button>
            </li>
           
          ))}
          
        </ul>
      </div>

    )
}