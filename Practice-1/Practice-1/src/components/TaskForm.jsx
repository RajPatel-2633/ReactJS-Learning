import React from 'react'

function TaskForm({input,setInput,handleSubmit}) {
  return (
    <div>
        <input type="text" value={input}
            onChange={(e)=>(setInput(e.target.value))}
            />
            <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default TaskForm