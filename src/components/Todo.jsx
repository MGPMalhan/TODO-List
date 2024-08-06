import React from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
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
        <input type='text' placeholder='Add new task' className='input' />
        <i className='bx bx-plus'></i>
      </div>

      <div>
        <TodoItems />
      </div>
    </div>
  );
};

export default Todo;
