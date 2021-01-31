import React from "react";
import NavBar from "../components/NavBar";
import Fridge from "../components/Fridge";
import Card from "./../components/ui/Card";

export default function Home() {
  return (
    <div className="bg-gray-800 absolute top-0 right-0 left-0 bottom-0">
      <div className="flex flex-row flex-nowrap h-full">
        <div className="w-1/3 max-w-sm bg-gray-100 h-full">
          <NavBar />
          <Fridge />
        </div>
        <div className="flex flex-row flex-wrap w-full p-7 mx-auto overflow-scroll">
          <div className="w-1/3 p-2">
            <Card
              recipeName="Glass of milk"
              desc="A meal so filling, its all Santa drinks!"
              ingredients={["Milk"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Scrambled Eggs"
              desc="Jus' need some butter!"
              ingredients={["Eggs"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Toast"
              desc="Jus' need some butter!"
              ingredients={["Bread", "Toaster"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Burgers"
              desc="Big ol' burgers to feed you!"
              ingredients={["Bread", "Patty", "Secret Formula"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Glass of milk"
              desc="A meal so filling, its all Santa drinks!"
              ingredients={["Milk"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Scrambled Eggs"
              desc="Jus' need some butter!"
              ingredients={["Eggs"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Toast"
              desc="Jus' need some butter!"
              ingredients={["Bread", "Toaster"]}
            />
          </div>
          <div className="w-1/3 p-2">
            <Card
              recipeName="Burgers"
              desc="Big ol' burgers to feed you!"
              ingredients={["Bread", "Patty", "Secret Formula"]}
            />  
          </div>
        </div>
      </div>
    </div>
  );
}
