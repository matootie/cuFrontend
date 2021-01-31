import React, { useContext } from "react";
import { UserContext } from "../../util/UserContext";
import { HiCheckCircle } from "react-icons/hi";

export default function Card(props) {

  const { name, ingredients, score, verified } = props;
  const { recipes } = useContext(UserContext);

  const [userRecipes, setUserRecipes] = recipes;

  function getIngredients() {
    return ingredients.map((index) => (
      <span className="mb-1" key={index}>
        {index}
      </span>
    ));
  }

  return (
    <div className="h-full p-2">
      <div className={`${score == 1 ? 'ring-4' : 'ring-0'} ring-green-500 bg-white shadow-md rounded-lg h-full transform hover:-translate-y-1 transition`}>
        { verified && (<HiCheckCircle className="text-4xl bg-white rounded-full text-blue-500 absolute -top-2 -right-2" />) }
      </div>
    </div>
  );
}
