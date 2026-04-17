import { useState, useEffect} from "react";
export function App(){
    const [message,setMessage]=useState("Loading");
    useEffect(()=>{
        // This part is component did mount
        
           // return(This is component unmount);
           fetch('https://api.freeapi.app/api/v1/public/dogs?page=1&limit=10&query=Affenpinscher')
           .then((res)=>res.json())
           .then((data)=> setMessage(data.message))
           .catch(()=>setMessage("Failed to Fetch Data"));
    },[])

    return (
        <div>
            <h1>Welcome to Our Restaurant</h1>
            <p>Serving new dishes</p>
        </div>
    );
}