import React, { useRef, useState } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [activeGroup, setActiveGroup] = useState("Personal");
  const [personalTodos, setPersonalTodos] = useState([]);
  const [professionalTodos, setProfessionalTodos] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const task = inputRef.current.value.trim();

    if (task === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      Id: Date.now(),
      text: task,
      isComplete: false,
    };

    if (activeGroup === "Personal") {
      setPersonalTodos((prev) => [...prev, newTodo]);
    } else {
      setProfessionalTodos((prev) => [...prev, newTodo]);
    }

    inputRef.current.value = "";
  };

  const deleteItem = (id) => {
    if (activeGroup === "Personal") {
      setPersonalTodos((prev) => prev.filter((item) => item.Id !== id));
    } else {
      setProfessionalTodos((prev) => prev.filter((item) => item.Id !== id));
    }
  };

  const completeItem = (id) => {
    if (activeGroup === "Personal") {
      setPersonalTodos((prev) =>
        prev.map((item) =>
          item.Id === id ? { ...item, isComplete: !item.isComplete } : item
        )
      );
    } else {
      setProfessionalTodos((prev) =>
        prev.map((item) =>
          item.Id === id ? { ...item, isComplete: !item.isComplete } : item
        )
      );
    }
  };

  const activeTodos =
    activeGroup === "Personal" ? personalTodos : professionalTodos;

  return (
    <div className='flex items-center justify-center min-h-screen bg-black-100'>
      <div className='bg-rose-100 w-[450px] h-[500px] flex flex-col min-h-[600px] rounded-lg'>
        <div className='todo'>
          <h1 className='text-center mt-0 mb-0 py-2'>
            <span className='to'>TO</span>
            <span className='do'>
              D<i className='bx bx-check'></i> {/* Check icon next to "D" */}
            </span>
          </h1>
        </div>

        <div className='groups flex justify-around mt-0 mb-2'>
          <div
            className={`cursor-pointer ${
              activeGroup === "Personal" ? "underline font-bold" : ""
            }`}
            onClick={() => setActiveGroup("Personal")}
          >
            <h3>Personal</h3>
          </div>

          <div
            className={`cursor-pointer ${
              activeGroup === "Professional" ? "underline font-bold" : ""
            }`}
            onClick={() => setActiveGroup("Professional")}
          >
            <h3>Professional</h3>
          </div>
        </div>
        <div className='input-box flex items-center mb-2 px-2'>
          <input
            ref={inputRef}
            type='text'
            placeholder='Add new task'
            className='input flex-1 border-2 border-purple-700 rounded px-2 py-1'
          />
          <i
            onClick={add}
            className='bx bx-plus text-3xl cursor-pointer ml-2'
          ></i>
        </div>

        <div className='px-2 flex-1 overflow-auto'>
          {activeTodos.map((item) => {
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
    </div>
  );
};

export default Todo;
