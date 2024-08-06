import React, { useRef } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  // Adding tasks using the input Bar
  const inputRef = useRef();

  const add = () => {
    const task = inputRef.current.value.trim();
    console.log(task);
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
        <TodoItems Text='Drink 1 litre of Water' />
        <TodoItems Text='Drink 1 litre of Water before 7PM' />
      </div>
    </div>
  );
};

export default Todo;
