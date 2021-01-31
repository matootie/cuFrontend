import React, { useState, useContext} from "react";
import ReactDom from 'react-dom';
import { Modal, Button, Form, Input, notification} from 'antd';
import Fridge from '../Fridge'

import { UserContext } from "../../util/UserContext";
import { FormItemPrefixContext } from "antd/lib/form/context";

export default function AddFridgeItem(){
    const [show, setShow] = useState(false);

    const [newItem, setNewItem] = useState("");
    const [newAmount, setNewAmount] = useState("");

    const { recipes, fridge } = useContext(UserContext);
    const [form] = Form.useForm();
    const [userFridge, setUserFridge] = fridge;

    const addToFridge = () => {
        const newObj = {[newItem]: newAmount}
        setUserFridge(prevState => ([...prevState, newObj]))
        openToast('success')
        setNewItem("")
        setNewAmount("")
    }

    const openToast = type => {
     notification[type]({
         message: "Added to fridge"
     })   
    }

    const showPopup = () => {
        setShow(true)
        console.log("Show")
    };

    const closePopup = () => {
        setShow(false)
    };


    const inputStyle = "px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"

    return(
        <div className="w-full h-full p-2">
            <Button className="w-full h-full" type="primary rounded-lg" onClick={() => showPopup()}>
                Open Fridge
            </Button>
            <Modal title="Welcome to the Fridge" visible={show} onCancel={closePopup} footer={null}>
                <label for="item">New Item: </label>
                <input className={inputStyle} placeholder="Enter item" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
                <br></br>
                <br></br>
                <label for="amount">Amount: </label>
                <input className={inputStyle} placeholder="Enter amount" id="amount" value={newAmount} onChange={(e) => setNewAmount(e.target.value)}></input>
                <br></br><br></br>
                <button type="primary" onClick={() => addToFridge(newItem, newAmount)}>
                    Add To Fridge
                </button>
            </Modal>
        </div>
    );
}