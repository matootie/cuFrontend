import React from "react";
import NavBar from "../components/NavBar";
import Fridge from "../components/Fridge";
import Card from "./../components/ui/Card";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-row flex-nowrap">
        <div className="w-1/3 mw-48 bg-gray-100">
          <NavBar />
          <Fridge />
        </div>
        <div className="flex flex-row flex-wrap w-full -m-2 p-7 max-w-5xl mx-auto">
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
