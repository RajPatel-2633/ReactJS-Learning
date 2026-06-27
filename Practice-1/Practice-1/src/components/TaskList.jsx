    import React, { useState } from 'react'

    function TaskList() {
        const [taskList,setTaskList] = useState([]);
        const [input,setInput]  = useState("");

        const handleSubmit = ()=>{
            const newTask = {
                id:Date.now(),
                title:input,
                completed:false
            };

            setTaskList([...taskList,newTask]);
            setInput("");
        };

        const deleteItem = (index)=>{
            setTaskList(taskList.filter((item,ind)=> ind!=index))
        }


    return (
        <div>
            {taskList.length==0?<p>No tasks as of yet</p>: <p>Please enter the task</p>}
            <h1>Please enter the task</h1>
            <input type="text" value={input}
            onChange={(e)=>(setInput(e.target.value))}
            />

            <button onClick={handleSubmit}>Add Task</button>
            <ul>
                {taskList.map((value,index)=> (
                    <li key={index}>{value.title}  <button onClick={()=> deleteItem(index)}>Delete Me</button></li>
            
                )
                )}
            </ul>
            
            
        </div>
    )
    }

    export default TaskList;