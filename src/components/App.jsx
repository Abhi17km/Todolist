import React, { useState } from "react";

function App() {
  const [oldtext, setstate] = useState("");
  const [items, setitems] = useState([]); //creates an array

  function handleChange(event) {
    const value = event.target.value;
    setstate(value);
  }
  function additem() {
    setitems((previtems) => {
      return [...previtems, oldtext];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={oldtext} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
