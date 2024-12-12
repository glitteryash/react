import React from "react";

const Info = ({ message, setMessage }) => {
  return (
    <div>
      {message.map((msg) => {
        return <p>{msg}</p>;
      })}
    </div>
  );
};

export default Info;
