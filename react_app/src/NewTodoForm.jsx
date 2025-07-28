import { useState } from "react";


export function NewTodoForm(props){

    const [newItem,setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(newItem);
        setNewItem("");
      }

    return (
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
  )
}