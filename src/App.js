import React from "react";
import "./styles/style.css";
import Friend from "./Friend";

//CSS styling inside JSX
//1. inline styling
//2. SCSS
//3. Styled Components
//4. Tailwind CSS

//Props(Properties)
//Every component in React has its own properties

const App = () => {
  let fruits = ["apple", "grape", "banana"];
  let friends = [
    { name: "Henry", age: 17, desc: "Nice guy with big smile" },
    { name: "Ron", age: 34, desc: "Nice guy with big smile" },
    { name: "Charlie", age: 25, desc: "Nice guy with big smile" },
  ];
  return (
    <div>
      <h1>My Profile</h1>
      <p>My name is Alvin</p>
      <p>I am {10 + 27} years old</p>
      <p
        style={{
          display: `inline-block`,
          marginRight: ".5rem",
        }}
      >
        My favorite friuts are
      </p>
      {fruits.map((fruit) => {
        return (
          <p
            style={{
              color: `orange`,
              display: `inline-block`,
              marginRight: ".5rem",
            }}
          >
            {fruit}
          </p>
        );
      })}
      <br /> <br />
      <p>my friends are</p>
      {friends.map((friend) => (
        <Friend name={friend.name} age={friend.age} desc={friend.desc} />
      ))}
    </div>
  );
};

export default App;
