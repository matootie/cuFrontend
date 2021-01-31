import React from "react";
import AddFridgeItem from "./Modal/AddFridgeItem";

export default function Fridge() {
  //const {items} = props;
  const items = ["milk", "Eggs", "pizza"]
  function getFridgeItem(){
    return items.map((index) => (
      <span className="p-5 m-1 bg-gray-100 rounded-lg" key={index}>
        {index}
      </span>
    ));
  };

  return(
  <div className="flex flex-col justify-between h-full">
    <div className="flex flex-row flex-wrap ">
      {getFridgeItem()}
    </div>
    <div className="flex flex-row" id="fuck-tits">
      <AddFridgeItem />
    </div>
  </div>
  );
}


