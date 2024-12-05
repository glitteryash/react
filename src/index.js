import React from "react";
//import ReactDOM from "react-dom"; //React 18以前的寫法
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./nav";
import App2 from "./App2";

//React 18以前的寫法
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector("#root")
// );

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <App2 />
  </React.StrictMode>
);
