import React from "react";

export default function Card(props) {
  const { recipeName, desc, ingredients } = props;
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
                <h4 className="text-lg font-semibold mb-3">
                  Ingredients in your fridge
                </h4>
                <div className="flex flex-col text-sm text-gray-500">
                  <span className="mb-1">{ingredients}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <a
              href="#"
              className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            >
              SAVE RECIPE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
