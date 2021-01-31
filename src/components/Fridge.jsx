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
        items.push({ item, amount })
      } 
    };
    return items.map(({ item, amount }) => (
      <div className="px-2 pb-2" key={item}>
        <div className="bg-gray-200 rounded p-3 flex justify-between">
          <span className="text-md font-bold">{item}</span>
          <span className="text-md">{amount}</span>
        </div>
      </div>
    ));
  };
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-center py-4 text-3xl">My Fridge</h1>
      <div className="flex flex-col bg-white h-72 md:h-full mx-3 rounded-lg overflow-scroll pt-2">
        {getFridgeItem()}
      </div>
      <div className="flex flex-col flex-shrink-0 mt-auto w-full">
        <AddFridgeItem />
      </div>
      <div>
        {/* <EditFridgeItem/ > */}
      </div>
    </div>
  );
}
