import React, { useState, useContext } from "react";
import AddFridgeItem from "./Modal/AddFridgeItem";
import { Modal, notification } from "antd";

import { UserContext } from "./../util/UserContext";

export default function Fridge() {
  const inputStyle =
    "m-2 px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full";
  const { recipe, fridge } = useContext(UserContext);
  const [userFridge, setUserFridge] = fridge;

  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState("");
  const [editModal, setEditModal] = useState(false);

  const removeNotificationWithIcon = (type) => {
    notification[type]({
      message: newItem.concat(" has been removed!"),
    });
  };

  const deleteFridgeItem = () => {
    for (let i = 0; i < userFridge.length; i++) {
      if (userFridge[i][newItem]) {
        delete userFridge[i][newItem];
        const newObj = userFridge;
        setUserFridge(newObj);
        removeNotificationWithIcon("warning");
        setEditModal(false);
      }
      // delete userFridge[i][newItem];
    }
  };

  const changeFridgeItem = () => {
    setEditModal(false);
    for (let i = 0; i < userFridge.length; i++) {
      // userFridge[i][newItem] = userFridge[i][editItem]
      userFridge[i][newItem] = userFridge[i][editItem];
      delete userFridge[i][editItem];
      console.log(userFridge);
    }
  };

  const openModal = (item) => {
    console.log(item);
    setEditItem(item);
    setNewItem(item);
    setEditModal(true);
  };

  const closeModal = () => {
    setEditModal(false);
  };

  function getFridgeItem() {
    //console.log(userFridge);
    let items = [];
    for (let [key, value] of Object.entries(userFridge)) {
      for (let [item, amount] of Object.entries(value)) {
        items.push({ item, amount });
      }
    }
    return items.map(({ item, amount }) => (
      <div className="px-2 pb-2" key={item}>
        <div className="bg-gray-200 rounded p-3 flex justify-between">
          <span className="text-md font-bold">{item}</span>
          <span className="text-md">{amount}</span>
          <svg
            className="inline-block ml-2 h-4 w-4 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            onClick={() => openModal(item)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      </div>
    ));
  }

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-center py-4 text-2xl">My Fridge</h1>
      <div className="flex flex-col bg-white h-72 md:h-full mx-3 rounded-lg overflow-scroll pt-2">
        {getFridgeItem()}
      </div>
      <div className="flex flex-col flex-shrink-0 mt-auto w-full">
        <AddFridgeItem />
      </div>
      <Modal
        title="Edit your Fridge"
        visible={editModal}
        onCancel={closeModal}
        footer={null}
      >
        <input
          className={inputStyle}
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button
          className="bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-xs m-3 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => changeFridgeItem()}
        >
          Change Name
        </button>
        <button
          className="bg-red-800 text-white active:bg-pink-600 font-bold uppercase text-xs m-3 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => deleteFridgeItem()}
        >
          Delete Item
        </button>
      </Modal>
    </div>
  );
}
