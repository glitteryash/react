import React from "react";
import ReactDOM from "react-dom";

// function App() {
//   return React.createElement("div", null, [
//     React.createElement(
//       "h1",
//       { style: { color: "red" } },
//       "This is a new world"
//     ),
//     React.createElement("h2", null, "everyone is nice person"),
//     React.createElement(
//       "p",
//       null,
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam iure doloribus deserunt natus sint dicta ad dolor aperiam aspernatur."
//     ),
//   ]);
// }

function App() {
  return (
    <div>
      <h1>My Profile</h1>
      <p>My name is Alvin Liu</p>
      <button>Check my profile</button>
    </div>
  );
}

ReactDOM.render(App(), document.querySelector("#root"));
