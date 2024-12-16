import React from "react";
import "./styles/style.css";

const message = ({ msg, message, setMessage }) => {
  const deleteHandler = () => {
    setMessage(message.filter((m) => m.id !== msg.id));
  };
  return (
    <div className="msg">
      <p>{msg.input}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default message;
