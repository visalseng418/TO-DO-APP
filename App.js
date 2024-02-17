import React, { useState } from "react";
import Header from "./Header";
import Createarea from "./Createarea";
import Listarea from "./Listarea";

export default function App() {
  const [finalItem, setFinalItem] = useState([]);

  function handleClick(item) {
    setFinalItem((prevItems) => {
      return [...prevItems, item];
    });
  }

  function deleteItem(id) {
    setFinalItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Createarea onAdd={handleClick} />
      <div>
        <ul className="List-area">
          {finalItem.map((item, index) => {
            return (
              <Listarea
                onClick={deleteItem}
                text={item}
                key={index}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
