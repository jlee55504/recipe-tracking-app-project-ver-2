// 'Imports' "React" and "useState" 'component' from "react".
import React, { useState } from "react";
// 'Imports' 'css' 'file' from "./App.css".
import './App.css';
/* 'Imports' "RecipeCreate" from './RecipeCreate'. */
import RecipeCreate from "./RecipeCreate";
/* 'Imports' "RecipeList" from './RecipeList'. */
import RecipeList from "./RecipeList";
/* 'Imports' "RecipeData" from './RecipeData'. */
import RecipeData from "./RecipeData"

/* The "App" 'function/component' holds the "recipes" 'variable' and "setRecipes" 
'function' which holds and 'updates' the 'data' from the "RecipeData" 'variable' 
and the "getRecipes" 'function'. The "deleteRecipe" 'function' uses the 'filter' 
'method' 'updates' the "recipes" 'variable/array'. "App" 'function/component' 
returns a 'div' JSX 'element', a 'h1' JSX 'element', a 'header' JSX 'element', 
 "RecipeList" 'component' and the "RecipeCreate" 'component'. The 
 "checkIfRecipesAreOdd" 'function' checks if the "recipes" 'variable/array's' 'length'
      ( the total number of items in the "recipes" 'variable/array') is odd or even 
      and 'sets' the 'value' for the "areThereOddNumberRecipes" 'variable'.*/
function App() {
  /* The "areThereOddNumberRecipes" 'variable' is declared and used to tell if 
  there are an odd number of items in the "recipes" 'variable/array'. */
  let areThereOddNumberRecipes;

     /* The "checkIfRecipesAreOdd" 'function' checks if the "recipes" 'variable/array's' 'length'
      ( the total number of items in the "recipes" 'variable/array') is odd or even and 'sets' 
      the 'value' for the "areThereOddNumberRecipes" 'variable'. */
     const checkIfRecipesAreOdd = recipes => {
      if (recipes.length % 2 !== 0) areThereOddNumberRecipes = true;
      else if (recipes.length % 2 === 0) areThereOddNumberRecipes = false;
    }

  /* The "recipes" 'variable' and "setRecipes" 'function' are declared using the
   'useState' 'method'. The "RecipeData" 'function/component' is 'passed' as an
    argument. This holds and updates all the 'recipes'. */  
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  /* The "getRecipes" 'function' takes a "newRecipe" 'parameter' ('object') and 
  calls the "setRecipes" 'function' to add new 'recipes' ('objects') to the 
  'recipes' 'variable/array' ('updates' the "recipes" 'variable'). */
  const getRecipes = newRecipe => {
    setRecipes((recipes) => [...recipes, newRecipe]);
  }

  /* The "deleteRecipe" 'function' takes one 'parameter' named "indexToDelete" 
  and uses the '.filter' 'method' on the "recipes" 'variable/array' to return 
  all the items that's 'index' does not equal the 'value' of the "indexToDelete"
   'parameter' and stores the results in the "updatedRecipeList" 'variable'. 
   The "setRecipes" 'function' is then 'called' with the "updatedRecipeList" 
   as the 'argument ('updates' the "recipes" 'variable/array'). */
  const deleteRecipe = indexToDelete => {
    const updatedRecipeList = recipes.filter((recipe, index) => recipes[index] !== recipes[indexToDelete])
    setRecipes(updatedRecipeList);
  }
     /* The "checkIfRecipesAreOdd" 'function' is 'called' with the "recipes" 'variable/array'. */
     checkIfRecipesAreOdd(recipes);
     
  /* Returns a 'div' JSX 'element' with "App" as the 'value' for its 'className' 
  'attribute'. A 'h1' JSX 'element' with the 'text' "Delicious Food Recipes" 
  inside of a 'header' JSX 'element' inside of the 'div' JSX 'element'. Also 
  inside of the 'div' JSX 'element' is the "RecipeList" 'component' with the "recipes" 
  'variable' as the 'value' for the "recipes" 'parameter' and the "deleteRecipe"
   'function' as the 'value' for its "deleteRecipe" 'parameter' and the 
   "RecipeCreate" 'component' with the "getRecipes" 'function' as the 'value' 
   for its "getRecipes" 'parameter' and the "areThereOddNumberRecipes" as the 'value' 
   for its "areThereOddNumberRecipes" 'parameter'. */
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate  getRecipes={getRecipes} areThereOddNumberRecipes={areThereOddNumberRecipes} />
    </div>
  );
}
/* 'Exports' the "App" 'function/component'. */
export default App;