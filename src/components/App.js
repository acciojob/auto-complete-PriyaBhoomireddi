
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
  const[ filterInput, setFilterInput ] = useState("")

 const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  return (
    <div id="main">
      <h1 id="heading">Search Item</h1>
       <input id="input" type="text" value={filterInput} onChange={(e) => setFilterInput(e.target.value)}/>
       <ul id="list">
        {
          fruits.filter((fruit) => fruit.toLowerCase().includes(filterInput.toLowerCase())).map((fruit) => <li>{fruit}</li>)
        }
       </ul>
    </div>
  )
}

export default App