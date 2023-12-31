import React, { useState } from "react";
import { Alert } from "flowbite-react";
import recipeData from "./recipe.json";
import SidebarComponent from "./Sidebar";
import CardComponent from "./Card";
import NavbarComponent from "./Navbar";

function App() {
  const [recipes, setRecipes] = useState([...recipeData]);

  return (
    <>
      <NavbarComponent />
      <div className="flex">
        <SidebarComponent />
        <div className="grid grid-cols-3 gap-12">
          {recipes.map((recipe, index) => (
            <CardComponent key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
