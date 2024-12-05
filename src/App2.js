import React, { useState } from "react";

const App = () => {
  //event handler//
  //   const buttonHandler = (e) => {
  //     e.preventDefault();
  //     let date = new Date().toLocaleDateString();
  //     alert(date);
  //   };

  //another event handler//
  //   const sayHello = (msg) => {
  //     alert(msg);
  //   };

  //state用法//
  let [name, setName] = useState("Coffee Master");
  const changeNameHandler = () => {
    setName("Ice Master");
  };

  return (
    <div>
      {/* event handler */}
      {/* <form action="">
        <input type="text" />
        <button onClick={buttonHandler}>Submit</button>
      </form> */}

      {/* another event handler */}
      {/* <button
        onClick={() => {
          sayHello("Hi! How are you");
        }}
      >
        Click me
      </button> */}

      {/* state */}
      <h1>{name}</h1>
      <h3>{name}</h3>
      <button onClick={changeNameHandler}>change name</button>
    </div>
  );
};

export default App;
