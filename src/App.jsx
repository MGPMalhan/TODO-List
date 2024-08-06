import React from "react";
import "./index.css"; // Ensure this path is correct
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className='bg-black grid  min-h-screen'>
      <Todo />
    </div>
  );
};

export default App;
