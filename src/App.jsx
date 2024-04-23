import React, { useState } from "react";

export default function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);

  const handleClick = () => {
    settodos([...todos, input]);
  };

  const handleDelete = (index) => {
    const updateTodo = todos.filter((ele, i) => {
      return i != index;
    });
    settodos(updateTodo);
  };

  return (
    <div>
      <h1 className="text-3xl text-center m-4 font-semibold ">Todo-App</h1>
      <div className="text-center">
        <input
          type="text"
          placeholder="Write here"
          className="p-3 outline-none "
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button
          className="bg-slate-600 text-white p-3 rounded-lg mx-3"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <div>
        <h1 className="text-center m-3 text-2xl">Todo-list</h1>
        <ul className="text-center bg-black text-white mx-10 rounded">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="flex justify-around p-3">
                {todo}
                <div className="">
                  <button onClick={() => handleDelete(index)}> Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
