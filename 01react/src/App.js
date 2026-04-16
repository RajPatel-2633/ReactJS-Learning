const App=()=>{
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Chilling with Fruits and Learning React")
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))