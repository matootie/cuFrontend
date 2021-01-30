import React from "react";
import NavBar from "../components/NavBar";
import Card from "./../components/ui/Card";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row m-8">
        <Card
          recipeName="Glass of milk"
          desc="A meal so filling, its all Santa drinks!"
          ingredients="milk"
        />
        <Card
          recipeName="Scrambled Eggs"
          desc="Jus' need some butter!"
          ingredients="egg"
        />
      </div>
    </div>
  );
}
