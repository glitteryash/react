import React, { useState, useEffect } from "react";

const App4 = () => {
  let [name, setName] = useState("Alvin");
  const changeName = () => {
    setName("Perry");
  };
  //useEffect
  useEffect(() => {
    console.log("useEffect function is running.");
  }, [name]);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}> Change Name</button>
    </div>
  );
};

export default App4;
