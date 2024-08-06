import React from "react";

const TodoItems = ({ Text }) => {
  return (
    <div className='flex flex-col items-start m-3 mt-5 gap-2'>
      <div className='flex items-center w-full'>
        <i
          className='bx bx-circle w-7 text-3xl ml-2 cursor-pointer'
          style={{ color: "#6b21a8" }}
        ></i>
        <p className='text-purple-custom text-[16px] ml-3'>{Text}</p>
        <i
          className='bx bx-trash ml-auto mr-4 cursor-pointer text-2xl'
          style={{ color: "#6b21a8" }}
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
