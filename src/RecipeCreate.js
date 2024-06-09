/* 'Imports' "React" and the 'useState' 'method' from 'react'. */
import React, { useState } from "react";
/* 'Imports' the './RecipeCreate.css''file'. */
import './RecipeCreate.css';

/* The "RecipeCreate" 'function/component' takes two 'parameters'; "getRecipes" 
(a 'function') and "areThereOddNumberRecipes" (a 'variable' containing a 'boolean'
 'value'), returns six 'td' JSX 'elements' inside a 'tr' JSX 'element' inside a 
 'tbody' JSX 'element' inside a 'table' JSX 'element' inside a 'form' JSX 'element'.
  Inside the 'td' JSX 'elements' are various 'fields' for 'data'. Based on the 'data'
   inputted, The "handleChange" 'function' 'calls' the "setFormData" and 'updates' the
    "formData" 'variable'. After users completely fill out the form and click the 'form',
     the "handleSubmit" 'function' 'calls' the "setFormData" 'function' using the 
     "initialFormState" 'object' with the 'rest parameter' to 'update' the "formData" 
     'variable', then 'calls' the "getRecipes" 'parameter/function' (from './App.js') with 
   the "formData" as its 'argument'. The "styleBackground" 'function' 'sets' the "styling" 
   'variable's' 'value' depending on the "areThereOddNumberRecipes" 'parameter/variable'
     'value'. */
function RecipeCreate({ getRecipes, areThereOddNumberRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  /* The "initialFormState" 'object' is created which holds all the names of the
   inputted data from the displayed 'form' JSX 'element's' 'fields' as 'keys' 
   with empty 'strings' as 'values'. */
    const initialFormState = {
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
    };

    /* The "formData" 'variable' and the "setFormData" 'function' are 'declared' 
    using the 'useState' 'method' with the "initialFormState" passed as an 
    'argument' using the 'spread operator'. */
    const [formData, setFormData] = useState({ ...initialFormState });

    /* The "handleChange" 'function' takes one 'parameter'; "target" inside of 
    'curly brackets' ({}). The "name" 'variable' holds the value of the "target"
     'parameter's' "name" 'attribute'. The "value" 'variable' holds the value of
      the "target" 'parameter'. The "setFormData" 'function'  is called and 
      passed in the "formData" 'variable' using the 'rest parameter' followed
       by a new property with the value of the "name" 'variable' as its 'key' and 
       the "value" 'variable' for its 'value'. */
    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    /* The "handleSubmit" 'function' takes one 'parameter' named "event". The 
    'preventDefault' 'method' is 'called' with the "event" 'parameter' to stop 
    the browser from reloading. The "setFormData" 'function' is then 'called' 
    with the "initialFormState" 'object' as its 'argument' using the 'rest 
    parameter'. The "getRecipes" 'parameter/function' (from './App.js') is 
    'called' with the "formData" as its argument. */
    const handleSubmit = event => {
        event.preventDefault();
        setFormData({ ...initialFormState });
        getRecipes(formData);
    }

    /* The "styling" 'variable' is 'declared' to hold the 'tr' JSX 'element's' 'backgroundColor'. */
    let styling;

    /* The "styleBackground" 'function' takes the "areThereOddNumberRecipes" 'parameter/variable' and 
    sets the "styling" 'variable's' 'value' depending on the "areThereOddNumberRecipes" 'parameter/variable'
     'value'. */
    const styleBackground = areThereOddNumberRecipes => {
      if (areThereOddNumberRecipes) {
        styling = {
          backgroundColor: "white",
        }
      }
        else if (!areThereOddNumberRecipes) {
          styling = {
            backgroundColor: "#fff0c7",
          }
        }     
    }

  /* A 'form' JSX 'element' with a 'value' of "create" for its 'name' attribute 
  and the "handleSubmit" 'function' for its 'onSubmit' 'event listener' is 
  returned. A 'table' JSX 'element' is inside the 'form' JSX 'element' with a 
  'tbody' JSX 'element' inside the 'table' JSX 'element' and a 'tr' JSX 'element'
   inside of the 'tbody' JSX 'element'. The 'tr' JSX 'element's' 'style' 'attribute's'
    'value' is the "styling" 'variable'. Six 'td' JSX 'elements' are inside with 
   five 'label' JSX 'elements' inside of five 'td' JSX 'elements'. The first 
   'label' JSX 'element' has the 'value' "name" for its 'htmlFor' 'attribute'. 
   Inside the first 'label' JSX 'element' is a 'input' JSX 'element' with the 
   'value' of "text" for its 'type' 'attribute', the 'value' "name" for its 'id' 
   and 'name' 'attributes', "Name" as the 'value' for its 'placeholder' 
   'attribute', the 'boolean' 'value' of 'true' as the 'value' for its 'required'
    'attribute', the value of the "formData" 'variable/object's' "name" 'key' for
     its 'value' and the "handleChange" 'function' as the 'value' for its 
     'onChange' 'event listener'. The second 'label' JSX 'element' has the 'value'
      of 'cuisine' for its 'htmlFor' 'attribute'. Inside the second 'label' JSX 
      'element' is a 'input' JSX 'element' with the 'value' of "text" for its 
      'type' 'attribute', the 'value' "cuisine" for its 'id' and 'name' 
      'attribute', "Cuisine" as the value for its 'placeholder' 'attribute', the 
      'boolean' 'value' of 'true' as the 'value' for its 'required' 'attribute', 
      the value of the "formData" 'variable/object's' "cuisine" 'key' for its 
      'value' and the "handleChange" 'function' as the 'value' for its 'onChange'
       'event listener'. The third 'label' JSX 'element' has the 'value' of 
       "photo" for its 'htmlFor' 'attribute'. Inside the third 'label' JSX 
       'element' is an 'input' JSX 'element' with the 'value' of "url" for its 
       'type' 'attribute', the 'value' "photo" for its 'id' and 'name' 
       'attributes', the 'text' "URL" as the 'value' for its 'placeholder' 
       'attribute', the 'boolean' 'value' of 'true' as the 'value' for its 
       'required' 'attribute', the value of the "formData" 'variable/object's' 
       "photo" 'key' for its 'value' and the "handleChange" 'function' as the 
       'value' for its 'onChange' 'event listener'. the fourth 'label' JSX 
       'element' has the 'value' of "ingredients" for its 'htmlFor' 'attribute'. 
       Inside the fourth 'label' JSX 'element' is a 'textarea' JSX 'element' 
       with the 'value' "ingredients" for its 'name' and 'id' 'attributes', the 
       'text' "Ingredients" for its 'placeholder' 'attribute', the 'boolean' 
       'value' of 'true' as the 'value' for its 'required' 'attribute', the value
        of the "formData" 'variable/object's' "ingredients" 'key' for its 'value' 
        'attribute' and the "handleChange" 'function' as the 'value' for its 
        'onChange' 'event listener'. The fifth 'label' JSX 'element' has the 
        'value' "preparation" for its 'htmlFor' 'attribute'. Inside the fifth 
        'label' JSX 'element' is a 'textarea' JSX 'element' with the 'value' 
        "preparation" for its 'name' and 'id' 'attributes', the 'text' 
        "Preparation" for its 'placeholder' 'attribute', the 'boolean' 'value' of
         'true' as the 'value' for its 'required' 'attribute', the value of the 
         "formData" 'variable/object's' "preparation" 'key' for its 'value' 
         'attribute' and the "handleChange" 'function' as the 'value' for its 
        'onChange' 'event listener'. The final 'td' JSX 'element' contains a 
        'button' JSX 'element' with "submit" as the 'value' for its 'role' 
        'attribute' and the 'value' "Create" for its 'text'. */
        

/* The "styleBackground" ''function' is 'called' with the "areThereOddNumberRecipes" 
'parameter/variable' as an 'argument'. */
styleBackground(areThereOddNumberRecipes);

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        
        <tbody >
          <tr style={styling}>
            <td className="name-td"><label htmlFor="name">
                <input type="text" id="name" name="name" placeholder="Name" required={true} value={formData.name} onChange={handleChange}></input>
                </label></td>
            <td className="cuisine-td"><label htmlFor="cuisine">
                <input type="text" id="cuisine" name="cuisine" placeholder="Cuisine" required={true} value={formData.cuisine} onChange={handleChange}></input>
                </label></td>
            <td className="photo-td"><label htmlFor="photo">
                <input type="url" id="photo" name="photo" placeholder="URL" required={true} value={formData.photo} onChange={handleChange}></input>
                </label></td>
            <td className="ingredients-td"><label htmlFor="ingredients">
                <textarea id="ingredients" name="ingredients" placeholder="Ingredients" required={true} cols={30} rows={2} value={formData.ingredients} onChange={handleChange}></textarea>
                </label></td>
            <td className="preparation-td"><label htmlFor="preparation">
                <textarea id="preparation" name="preparation" placeholder="Preparation" required={true} cols={30} rows={2} value={formData.preparation} onChange={handleChange}></textarea>
                </label></td>
            <td className="submit-btn-td">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

/* 'Exports' "RecipeCreate" 'function/component'. */
export default RecipeCreate;