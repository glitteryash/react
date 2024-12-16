import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ message, setMessage }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage([...message, { input, id: uuidv4() }]);
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
