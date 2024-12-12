import React, { useState } from "react";

const Create = ({ message, setMessage }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage([...message, input]);
    setInput("");
  };

  let [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input type="text" onChange={inputHandler} value={input} />
      <button type="submit" onClick={submitHandler}>
        submit
      </button>
    </form>
  );
};

export default Create;
