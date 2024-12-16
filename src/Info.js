import React from "react";
import Message from "./Message";

const Info = ({ message, setMessage }) => {
  return (
    <div>
      {message.map((msg) => {
        return (
          <Message
            key={msg.id}
            msg={msg}
            message={message}
            setMessage={setMessage}
          />
        );
      })}
    </div>
  );
};

export default Info;
