import React, { useContext } from "react";
import { UserContext } from "../../util/UserContext";

export default function Card(props) {
  const { recipeName, desc, ingredients } = props;
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
    <div className="m-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">
              {recipeName}
            </h2>
            <p className="text-gray-500 text-base">{desc}</p>
          </div>
          <div className="bg-gray-100 rounded-lg">
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
    </div>
  );
}
