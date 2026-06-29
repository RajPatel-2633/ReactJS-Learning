    import React, { useState, useEffect } from 'react'
    import TaskForm from './TaskForm';
    import TaskItem from './TaskItem';

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

        const deleteItem = (id)=>{
            setTaskList(taskList.filter((item,ind)=> item.id!=id))
        }

        const handleToggle = (id)=>{
            setTaskList(taskList.map((value,index)=>{
                if(value.id===id){
                     const newobj ={
                        id: value.id,
                        title: value.title,
                        completed:!value.completed
                    } 
                    return newobj;
                } else return value;
            }));
        }

        useEffect(()=>{
            const data = localStorage.getItem("tasks")
            if(data){
                const arr = JSON.parse(data);
                setTaskList(arr);
            }

        },[]);

        useEffect(()=>{
            const stringTasks = JSON.stringify(taskList)
            localStorage.setItem("tasks",stringTasks)
        },[taskList])


    return (
        <div>
            {taskList.length==0?<p>No tasks as of yet</p>: <p>Please enter the task</p>}
            <h1>Please enter the task</h1>
            <TaskForm
            input={input} 
            setInput={setInput}
            handleSubmit={handleSubmit}/>

            <ul>
            {taskList.map((task,index)=> (
                      <TaskItem task={task} index={index} deleteItem={deleteItem}  handleToggle={handleToggle}/>
                )
                )}
            </ul>
           
        </div>
    )
    }

    export default TaskList;