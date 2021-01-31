import React, { useContext } from "react";
import { UserContext } from "../../util/UserContext";
import { HiCheckCircle } from "react-icons/hi";

export default function Card(props) {

  const {
    name,
    ingredients,
    score,
    verified,
    image
  } = props;
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
      <div className={`${score == 1 ? 'ring-4 ring-green-500 ring-opacity-40' : 'ring-4 ring-black ring-opacity-10'} bg-white shadow-md rounded-lg h-full transform hover:-translate-y-1 transition flex flex-col`}>
        <h1 className="text-base m-0 bg-gray-200 rounded-t-lg p-2 shadow-sm">{name}</h1>
        <div className="h-full rounded-b-lg bg-center bg-no-repeat bg-cover overflow-hidden" style={{
          backgroundImage: `url('${image}')`
        }}>
          <div className="bg-blue-500 bg-opacity-20 h-full w-full"></div>
        </div>
        { verified && (<HiCheckCircle className="text-4xl bg-white rounded-full text-blue-500 absolute -top-2 -right-2" />) }
      </div>
    </div>
  );
}
