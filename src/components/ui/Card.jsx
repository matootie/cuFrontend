import React, { useContext } from "react";
import { UserContext } from "../../util/UserContext";

export default function Card(props) {
  const { recipeName, ingredients } = props;
  const { recipes, fridge } = useContext(UserContext);

  const [userRecipes, setUserRecipes] = recipes;

  function getIngredients() {
    return ingredients.map((index) => (
      <span className="mb-1" key={index}>
        {index}
      </span>
    ));
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center h-1/3 items-center shadow-xl">
          <h2 className="text-gray-700 font-semibold text-2xl tracking-wide">
            {recipeName}
          </h2>
        </div>
        <div className="bg-gray-100 h-2/3">
          <div className="py-4 px-4">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-3">Ingredients</h4>
              <div className="flex flex-col text-sm text-gray-500">
                {getIngredients()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
