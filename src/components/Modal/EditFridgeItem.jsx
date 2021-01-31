import React, { useState, useContext } from "react";
import { Modal, notification } from "antd";
import { UserContext } from "../../util/UserContext";

export default function EditFridgeItem() {
  const [editModal, setEditModal] = useState(false);
  const { recipes, fridge } = useContext(UserContext);
  const [userFridge, setUserFridge] = fridge;

  const displayItems = () => {
    const itemList = [];
    console.log();
    for (let i = 0; i < userFridge.length; i++) {
      const itemName = Object.keys(userFridge[0]);
      itemList.push(
        <ul class=" list-reset flex flex-col">
          <li class=" rounded-t relative -mb-px block border p-4 border-grey">
            {itemName}
          </li>
        </ul>
      );
    }
  };

  const closeModal = () => {
    setEditModal(false);
    displayItems();
  };

  const editFridge = () => {};
  return (
    <div>
      <button
        className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setEditModal(true)}
      >
        Edit fridge
      </button>
      <Modal
        title="Edit your Fridge"
        visible={editModal}
        onCancel={closeModal}
        footer={null}
      >
        <ul className="list-reset flex flex-col"></ul>
      </Modal>
    </div>
  );
}
