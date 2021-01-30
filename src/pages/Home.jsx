import React from "react";
import NavBar from "../components/NavBar";
import Card from "./../components/ui/Card";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Card
        recipeName="Glass of milk"
        desc="A meal so filling, its all Santa drinks!"
        ingredients="milk"
      />
    </div>
  );
}
