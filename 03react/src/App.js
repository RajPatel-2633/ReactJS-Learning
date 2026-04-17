import React from "https://esm.sh/react@19.2.0"
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client"

const Menu=(props)=>{
    console.log(props);
    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("p",{},props.cost)
    ]);
}
// Props is nothing but object that's it
const App=()=>{
    return React.createElement(
        "div",
        {},[
            React.createElement("h1",{},"Menu of StreetFood"),
            React.createElement(Menu,{
            name:"Sev Puri",
            cost:1000
            }),
            React.createElement(Menu,{
                name:"Bhel Puri",
                cost:2000
            })
        ]
        
    );
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))