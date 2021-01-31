import React from "react";
import NavBar from "../components/NavBar";
import Fridge from "../components/Fridge";
import Card from "./../components/ui/Card";

export default function Home() {
  const recipes = [
    {
      key: 1,
      name: "Glass of Milk",
      desc: "Ya only need cookies!",
      ingredients: ["Milk"],
    },
    {
      key: 2,
      name: "Scrambled Eggs",
      desc: "Jus' need some oil!",
      ingredients: ["Eggs"],
    },
    {
      key: 3,
      name: "Toast",
      desc: "Jus' need some butter!",
      ingredients: ["Bread", "Toaster"],
    },
  ];

  function getCards() {
    const allRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      allRecipes.push(
        <Card
          recipeName={recipes[i].name}
          desc={recipes[i].desc}
          ingredients={recipes[i].ingredients}
        />
      );
    }
    return allRecipes;
  }

  return (
    <div>
      <NavBar />
      <div>
        <Fridge />
      </div>
      <div className="flex flex-row m-8">{getCards()}</div>
    </div>
  );
}
