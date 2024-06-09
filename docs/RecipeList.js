/* 'Imports' "React" from 'react'. */
import React from "react";

/* The "RecipeList" 'function/component' takes two 'parameters'; "recipes" (a 
    'variable/array' from './App.js') and the "deleteRecipe" (a 'function' from 
'./App.js'). The 'function' "getIndexToDelete" 'function' inside the "RecipeList"
 'function/component' takes one 'parameter' named "index" and 'calls' the 
 "deleteRecipes" function with the value of the "index" 'parameter' using the 
 'target' and 'value' 'methods'. Inside the "RecipeList" 'function/component' is
  the "getIndexToDelete" 'function' which is used to 'delete' specific items in 
  the "recipes" 'variable/array'. Also inside is the "createRecipeTableData" 
  'function', which creates a 'tr' JSX 'element' with 'td', 'p', 'button' and 
  'img' JSX 'elements' based on the 'data' in the items ('objects') in the 
  "recipes" 'variable/array'. A 'div' JSX 'element' is returned with a 'table', 
  a 'thead', a 'tr' and a 'tbody' JSX 'element(s)' with all the 'data' from the 
  "createRecipeTableData" 'variable' inside of the 'tbody' JSX 'element'. */
function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
  
  /* The "getIndexToDelete" 'function' inside the "RecipeList" 
  'function/component' takes one 'parameter' named "index" and 'calls' the 
 "deleteRecipes" 'function' with the value of the "index" 'parameter' using the 
 'target' and 'value' 'methods'. */
  const getIndexToDelete = index => {
    deleteRecipe(index.target.value)
  }

    /* The "createRecipeTableData" 'variable' uses the '.map' 'method' on the 
"recipes" 'parameter' ('array') to create a 'tr' JSX 'element' containing six 
'td' JSX 'elements'. The first, second, fourth and fifth 'td' JSX 'elements' 
contain 'div' JSX 'elements' inside. The third 'td' JSX 'element' contains a 
'img' JSX 'element' with the 'value' of the current item in the "recipes" 
'parameter's' ('array') "photo" 'key' and the value, the current item in the 
"recipes" 'parameter's' ('array') "name" 'key' as the 'value' for its 'alt' 
'attribute'. The sixth 'td' JSX 'element' contains a 'button' JSX 'element' with
 the 'value' of "button" for its 'role' 'attribute', the 'value' of "delete" for 
 its 'name' 'attribute', the 'text' "Delete" and the "getIndexToDelete" 'function'
  as the 'value' for its 'onChange' 'event listener'. The first 'div' JSX 'element'
   inside of the first 'td' JSX 'element' contains the 'value' of the current 
   item's "name" 'key' for its 'text'. The second 'div' JSX 'element' inside of the
    second 'td' JSX 'element' contains the 'value' of the current item's "cuisine"
     'key' for its 'text'. The fourth 'div' JSX 'element' inside of the fourth 'td'
      JSX 'element' contains the 'value' of the current item's "ingredients" 'key'
       for its 'text'. The fifth 'div' JSX 'element' inside of the fifth 'td' JSX 
       'element' contains the 'value' of the current item's "preparation" 'key' for
        its 'text'. */
        const createRecipeTableData = recipes.map((recipe, index) => <tr key={index}><td><div>{recipe.name}</div></td><td><div>{recipe.cuisine}</div></td><td><img src={recipe.photo} alt={recipe.name} /></td>
    <td><div className="ingredients-div">{recipe.ingredients}</div></td><td><div className="preparation-div">{recipe.preparation}</div></td><td><button type="button" name="delete" onClick={getIndexToDelete} value={index}>Delete</button></td> </tr>);





  /* A 'div' JSX 'element' with the 'value' of "recipe-list" for its 'className' 
  'attribute' with a 'table' JSX 'element' with one 'tr' inside containing six
   'th' JSX 'elements' ("Name", "Cuisine", "Photo", "ingredients", "Preparation" 
and "Actions" for their 'text'). After the 'thead' JSX 'element comes a 'tbody' 
JSX 'element' with all the 'data' from the "createRecipeTableData" 'variable'. */  
 return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="ingredients-th">Ingredients</th>
            <th className="preparation-th">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {createRecipeTableData}
        </tbody>
      </table>
    </div>
  );
}
/* 'Exports' the "RecipeList" 'function/component'. */
export default RecipeList;

