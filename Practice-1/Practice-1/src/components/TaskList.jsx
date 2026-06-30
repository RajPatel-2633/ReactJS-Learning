    import React, { useState, useEffect } from 'react'
    import TaskForm from './TaskForm';
    import TaskItem from './TaskItem';

    function TaskList() {
        const [taskList,setTaskList] = useState(()=>{
            const data = localStorage.getItem("tasks")
            if(data){
                const arr = JSON.parse(data);
                return arr;
            }

            return [];
        });
        const [input,setInput]  = useState("");
        const [loading,setLoading] = useState(false);
        const [error,setError] = useState(null);

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
            const stringTasks = JSON.stringify(taskList)
            localStorage.setItem("tasks",stringTasks)
        },[taskList])

        useEffect(()=>{

            async function fetchTasks(){
                try{
                    setLoading(true)
                    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                    const data = await response.json()
                    
                    setTaskList(data);
                } catch(e){
                    setError(e);
                } finally{
                    setLoading(false)
                }
               
            }

            fetchTasks();
            // fetch('https://jsonplaceholder.typicode.com/todos')
            // .then((data)=>data.json())
            // .then((result)=> setTaskList(result))   
        },[])


    return (
        <div>
            {taskList.length==0?<p>No tasks as of yet</p>: <p>Please enter the task</p>}
            {loading?<h1>Loading Tasks...</h1>:<></>}
            {error?<h1>{error}</h1>:<></>}
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