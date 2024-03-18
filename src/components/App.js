import React, { useState } from "react";

function App() {
  const [item, setitem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const {name, value} = event.target;
    setitem(value);
  }

  function handleAdd(){
    console.log(items)
    setItems(prevValue => {
      return[
      ...prevValue,
      item
      ]
    })
    setitem("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="item"  onChange={handleChange} value = {item} type="text" />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item=> (
            
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
