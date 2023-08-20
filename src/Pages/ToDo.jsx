import React, { useState } from "react";
import ToDoForm from "../components/ToDo/ToDoForm";
import ToDoList from "../components/ToDo/ToDoList";


export default  function ToDo(){
    const [itemList, setItemList] = useState([])

    const HandleAddItemList = (item)=>{
        if (item.trim() !== ""){
          setItemList([...itemList, item]);
        };
    }

 
  return (
    <>
    <h1>This is ToDo</h1>
    <ToDoForm HandleAddItemList={HandleAddItemList}/>
    <ToDoList items = {itemList}/>
    </>
  );
}