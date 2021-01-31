import React from "react";
import NavBar from "../components/NavBar";
import Fridge from "../components/Fridge";
import Card from "./../components/ui/Card";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Fridge />
      </div>
      <div className="flex flex-row m-8">
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
  );
}
