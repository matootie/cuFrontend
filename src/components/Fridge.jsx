import React, { useContext } from "react";
import AddFridgeItem from "./Modal/AddFridgeItem";
//import EditFridgeItem from "./Modal/EditFridgeItem";

import { UserContext } from "./../util/UserContext";

export default function Fridge() {
  const { recipe, fridge } = useContext(UserContext);
  const [userFridge, setUserFridge] = fridge;

  function getFridgeItem() {
    let items = []
    for (let [key, value] of Object.entries(userFridge)) {
      for (let [item, amount] of Object.entries(value)) {
        items.push(item)
      } 
    };
    return items.map((index) => (
      <span className="mb-1" key={index}>
        {index}
      </span>
    ));
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row flex-wrap ">
        {/* {bigBalls()} */}
        {getFridgeItem()}
      </div>
      <div className="flex flex-row" id="fuck-tits">
        <AddFridgeItem />
      </div>
      <div>
        {/* <EditFridgeItem/ > */}
      </div>
    </div>
  );
}
