import React, { useContext } from "react";
import AddFridgeItem from "./Modal/AddFridgeItem";
//import EditFridgeItem from "./Modal/EditFridgeItem";

import { UserContext } from "./../util/UserContext";

export default function Fridge() {
  const { recipe, fridge } = useContext(UserContext);
  const [userFridge, setUserFridge] = fridge;

  function getFridgeItem() {
    return userFridge.forEach((element) => {
      <span className="p-5 m-1 bg-gray-100 rounded-lg" key={element}>
        {element}
      </span>;
    });
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row flex-wrap ">{getFridgeItem()}</div>
      <div className="flex flex-row">
        <AddFridgeItem />
      </div>
      <div>{/* <EditFridgeItem/ > */}</div>
    </div>
  );
}
