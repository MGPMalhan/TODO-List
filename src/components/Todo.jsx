import React, { useRef, useState } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  // Adding tasks using the input Bar
  const inputRef = useRef();

  const add = () => {
    const task = inputRef.current.value.trim();

    if (task === "") {
      alert("Please enter a task");
      return; // Added return to prevent further execution if task is empty
    }

    const newTodo = {
      Id: Date.now(),
      text: task,
      isComplete: false,
    };

    setTodoItems((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.Id !== id));
  };

  const completeItem = (id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.Id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  return (
    <div className='bg-rose-100 place-self-center w-11/12 max-w-md flex flex-col p- min-h-[600px] rounded-lg'>
      <div className='todo'>
        <h1>
          <span className='to'>TO</span>
          <span className='do'>
            D<i className='bx bx-check'></i> {/* Check icon next to "D" */}
          </span>
        </h1>
      </div>

      <div className='groups'>
        <div className='Personal'>
          <h3>Personal</h3>
        </div>

        <div className='Professional'>
          <h3>Professional</h3>
        </div>
      </div>
      <div className='input-box'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Add new task'
          className='input'
        />
        <i onClick={add} className='bx bx-plus'></i>
      </div>

      <div>
        {todoItems.map((item) => {
          return (
            <TodoItems
              key={item.Id}
              text={item.text}
              Id={item.Id}
              isComplete={item.isComplete}
              onDelete={deleteItem} // Pass the delete function
              onComplete={completeItem} // Pass the complete function
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
