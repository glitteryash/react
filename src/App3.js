import React, { useState } from "react";
import Create from "./Create";
import Info from "./Info";

const App3 = () => {
  let [message, setMessage] = useState([]);
  return (
    <div>
      <Create message={message} setMessage={setMessage} />
      <Info message={message} setMessage={setMessage} />
    </div>
  );
};

export default App3;
