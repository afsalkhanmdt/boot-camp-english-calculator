import { useState } from "react";
// import "./App.css";
import Calculator from "./Calculator"

function App() {
  const [todoos,setTodoos] = useState([
   
  ])
  const [input,setInput] = useState("");

  function addTodo(){
    setTodoos([...todoos,input]);
    setInput("")
  }

  return <div className="App">
    <input type="text"
      value={input}
      onChange={e=>setInput(e.target.value)}
    />
    <button onClick={addTodo}>Add</button>
    {todoos.map(
      todo=> <div>{todo}</div>
    )}
  </div>;
}

export default App;
