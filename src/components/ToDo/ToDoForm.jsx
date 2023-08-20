import ToDoList from './ToDoList'
import React, { useState } from "react";

const ToDoForm = ({HandleAddItemList})=>{
  const [item, setItem] = useState("")
  

  const addItem = (e)=>{
    setItem(e.target.value);
    console.log(item);
  }
  const addItemList = ()=>{
    if (item.trim() !== ""){
      HandleAddItemList(item);
      setItem("");
    };
    
  };
  return(
    <>
    <form>
      <input type="text" name="todo" id="todo" value={item} onChange={addItem}/>
      <input type="button"value="Add ToDo" onClick={addItemList}/>

    </form>
    </>
    
  )
};

export default ToDoForm;