import React from "react";
import NavBar from "../components/NavBar";
import Fridge from "../components/Fridge";
import Card from "./../components/ui/Card";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row flex-nowrap">
        <div className="w-1/3 mw-48 h-screen">
          <Fridge />
        </div>
        <div className="flex flex-row m-8 w-full h-screen">
          <Card
            recipeName="Glass of milk"
            desc="A meal so filling, its all Santa drinks!"
            ingredients={["Milk"]}
          />
          <Card
            recipeName="Scrambled Eggs"
            desc="Jus' need some butter!"
            ingredients={["Eggs"]}
          />
          <Card
            recipeName="Toast"
            desc="Jus' need some butter!"
            ingredients={["Bread", "Toaster"]}
          />
        </div>
      </div>
    </div>
  );
}
