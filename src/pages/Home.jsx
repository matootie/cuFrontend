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
    <div className="bg-gray-800 absolute top-0 right-0 left-0 bottom-0">
      <div className="flex flex-row flex-nowrap h-full">
        <div className="w-1/3 max-w-sm bg-gray-100 h-full">
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
