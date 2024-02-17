import React from "react";

function Listarea(props) {
  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Listarea;
