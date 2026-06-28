import React,{useState}from "react";


function Todo(){
    const [task,setTask] = useState("");
    const [taskList,setTaskList]  = useState([]);

    const handleClick = ()=>{
        setTaskList([...taskList,task]);
        setTask("");
    }

    const deleteItem = (index)=>{
        setTaskList(taskList.filter((item,ind)=> ind!=index ));
    }

    return(
        <>
        <h1>Please enter the task</h1>
        <input type="text" 
        placeholder="Enter the Task" 
        value = {task}
        onChange={(e)=> (setTask(e.target.value))}/>
        <button onClick={handleClick}>Add Task</button>
        <ul>
            {taskList.map((value,index)=>(
                <li key={index}> {value} <button onClick={()=> deleteItem(index)}>Delete Task</button></li>
            ))}
        </ul>

        </>
    );
}

export default Todo;