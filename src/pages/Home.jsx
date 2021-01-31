import React from "react";
import Fridge from "../components/Fridge";
import Card from "./../components/ui/Card";

export default function Home() {
  const recipes = require("../data.json");
  console.log(recipes.length);

  function getCards() {
    const allRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      allRecipes.push(
        <div className="w-72 h-72">
          <Card
            name={recipes[i].name}
            ingredients={Object.keys(recipes[i].ingredients)}
            score={recipes[i].score}
            verified={recipes[i].verified}
            image={recipes[i].image.url}
          />
        </div>
      );
    }
    return allRecipes;
  }

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0">
      <div className="flex flex-col md:flex-row flex-nowrap h-full">
        <div className="bg-gray-100 w-full md:w-72 flex-shrink-0">
          <Fridge />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center overflow-scroll p-2">
          {getCards()}
        </div>
      </div>
    </div>
  );
}
