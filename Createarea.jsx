import React, { useState } from "react";
import Listarea from "./Listarea";

function Createarea(props) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <div className="createarea">
      <input onChange={handleChange} type="text" name="todoitem" value={item} />

      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default Createarea;
