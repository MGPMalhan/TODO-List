import React from "react";

const TodoItems = ({ text, Id, isComplete, onDelete, onComplete }) => {
  return (
    <div className='flex flex-col items-start mt-2 gap-2'>
      <div className='flex items-center w-full'>
        <i
          className={`bx ${
            isComplete ? "bx-check-circle" : "bx-circle"
          } w-7 text-3xl cursor-pointer`}
          style={{ color: "#6b21a8" }}
          onClick={() => onComplete(Id)} // Call onComplete with the item's ID
        ></i>
        <p
          className={`text-purple-custom text-[16px] ml-3 ${
            isComplete ? "line-through text-purple-700" : ""
          } ${isComplete ? "opacity-50" : ""}`}
        >
          {text}
        </p>
        <i
          className='bx bx-trash ml-auto cursor-pointer text-2xl'
          style={{ color: "#6b21a8" }}
          onClick={() => onDelete(Id)} // Call onDelete with the item's ID
        ></i>
      </div>
      <hr
        className='border-t-1 border-purple-700 mt-1 mx-auto'
        style={{ width: "calc(82% + 40px)" }}
      />
    </div>
  );
};

export default TodoItems;
