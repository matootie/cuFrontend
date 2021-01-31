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
        <div className="w-1/3 p-2">
          <Card
            recipeName={recipes[i].name}
            desc={recipes[i].desc}
            ingredients={recipes[i].ingredients}
          />
        </div>
      );
    }
    return allRecipes;
  }

  return (
    <div className="h-screen">
      <div className="flex flex-row flex-nowrap">
        <div className="w-1/3 mw-48 bg-gray-100">
          <NavBar />
          <Fridge />
        </div>
        <div className="flex flex-row flex-wrap w-full -m-2 p-7 max-w-5xl mx-auto">
          {getCards()}
        </div>
      </div>
    </div>
  );
}
