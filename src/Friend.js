import React from "react";

const Friend = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
      <p>{props.desc}</p>
    </div>
  );
};

export default Friend;
