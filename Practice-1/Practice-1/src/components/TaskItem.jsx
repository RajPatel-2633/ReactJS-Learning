import React from 'react'

function TaskItem({task,index,deleteItem,handleToggle}) {
  return (
    <div>
         <li key={task.id}> <input type="checkbox" onChange={()=> handleToggle(task.id)}/>{task.title}  <button onClick={()=> deleteItem(task.id)}>Delete Me</button></li>
    </div>
  )
}

export default TaskItem