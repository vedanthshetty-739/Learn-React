
export default function ToDoList({items}) {
    
    return (
      <ul>
      {items.map((item)=> <li key={item}>{item}</li>)}
    </ul>
    )
    
}