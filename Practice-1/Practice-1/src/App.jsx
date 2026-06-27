import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  
  const [title,setTitle] =  useState("DevBoard");

  return(
    <>
    <h1>Welcome to App</h1>
    <Navbar title={title} />
    <button onClick={()=>(setTitle("React Master"))}>Change Title</button>
    <Navbar title="Task Manager" />
    <TaskList/>
    </>
  )
}

export default App
