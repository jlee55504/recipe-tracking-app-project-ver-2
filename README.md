Completed Chegg Skill's "_Recipe-tracking app project_" "_Qualified_" assessment.

App.js
1.'_Imports_' "_React_" and the '_useState_' '_function_' from '_react_'.
2.'_Imports_' the '_./App.css_' file.
3.The "_App_" '_function/component_' holds the "_recipes_" '_variable_' and "_setRecipes_" '_function_' which holds and '_updates_' the '_data_' from the "_RecipeData_" '_variable_' and the "_getRecipes_" '_function_'. The "_deleteRecipe_" '_function_' uses the '_filter_' '_method_' '_updates_' the "_recipes_" '_variable/array_'. "_App_" '_function/component_' returns a '_div_' JSX '_element_', a '_h1_' JSX '_element_', a '_header_' JSX '_element_', 
 "_RecipeList_" '_component_' and the "_RecipeCreate_" '_component_'.
4.'_Exports_' the "_App_" '_function/component_'.

RecipeCreate.js
 1.'_Imports_' "_React_" and the '_useState_' '_function_' from '_react_'.
 2.The "_PostCreate_" '_function/component_' takes the "_getPosts_" '_function_' (from the '_./App.js_' '_file_') as a '_parameter_' and stores the "_type_" '_variable_' and the "_setType_" '_function_', the "_content_" '_variable_', the "_setContent_" '_function_', the "_handleChange_" '_function_' and the "_handleSubmit_" '_function_'. It returns a '_form_' JSX '_element_' with various '_input fields_'. The "_getPosts_" '_function_' then collects the '_data_' to be used in the "_App_" '_function/component_' and the "_PostList_" '_function/component_'.
 3.'_Exports_' the "_PostCreate_" '_function/component_'.

RecipeData.js
1.The "_RecipeData_" '_variable_' holds an '_array_' with two '_objects_' inside.
2.'_Exports_' the "_RecipeData_" '_array_'.

Completed Chegg Skill's "_Recipe-tracking app project_" "_Qualified_" assessment.

App.js
1.'_Imports_' "_React_" and the '_useState_' '_function_' from '_react_'.
2.'_Imports_' the '_./App.css_' file.
3.'_Imports_' "_RecipeCreate_" from '_./RecipeCreate_'.
4.'_Imports_' "_RecipeList_" from '_./RecipeList_'.
5.'_Imports_' "_RecipeData_" from '_./RecipeData_'.
6.The "_App_" '_function/component_' holds the "_recipes_" '_variable_' and "_setRecipes_" 
'_function_' which holds and '_updates_' the '_data_' from the "_RecipeData_" '_variable_' 
and the "_getRecipes_" '_function_'. The "_deleteRecipe_" '_function_' uses the '_filter_' 
'_method_' '_updates_' the "_recipes_" '_variable/array_'. "_App_" '_function/component_' 
returns a '_div_' JSX '_element_', a '_h1_' JSX '_element_', a '_header_' JSX '_element_', 
 "_RecipeList_" '_component_' and the "_RecipeCreate_" '_component_'. The 
 "_checkIfRecipesAreOdd_" '_function_' checks if the "_recipes_" '_variable/array's_' '_length_'
  ( the total number of items in the "_recipes_" '_variable/array_') is odd or even 
  and '_sets_' the '_value_' for the "_areThereOddNumberRecipes_" '_variable_'.
7.'_Exports_' the "_App_" '_function/component_'.

RecipeCreate.js
 1.'_Imports_' "_React_" and the '_useState_' '_function_' from '_react_'.
 2.The "_RecipeCreate_" '_function/component_' takes two '_parameters_'; "_getRecipes_" 
(a '_function_') and "_areThereOddNumberRecipes_" (a '_variable_' containing a '_boolean_'
 '_value_'), returns six '_td_' JSX '_elements_' inside a '_tr_' JSX '_element_' inside a 
 '_tbody_' JSX '_element_' inside a '_table_' JSX '_element_' inside a '_form_' JSX '_element_'.
  Inside the '_td_' JSX '_elements_' are various '_fields_' for '_data_'. Based on the '_data_'
   inputted, The "_handleChange_" '_function_' '_calls_' the "_setFormData_" and '_updates_' the
    "_formData_" '_variable_'. After users completely fill out the form and click the '_form_',
     the "_handleSubmit_" '_function_' '_calls_' the "_setFormData_" '_function_' using the 
     "_initialFormState_" '_object_' with the '_rest parameter_' to '_update_' the "_formData_" 
     '_variable_', then '_calls_' the "_getRecipes_" '_parameter/function_' (from '_./App.js_') with 
   the "_formData_" as its '_argument_'. The "_styleBackground_" '_function_' '_sets_' the "_styling_" 
   '_variable's_' '_value_' depending on the "_areThereOddNumberRecipes_" '_parameter/variable_'
     '_value_'
 3.'_Exports_' the "_RecipCreate_" '_function/component_'.

RecipeData.js
1.The "_RecipeData_" '_variable_' holds an '_array_' with two '_objects_' inside.
2.'_Exports_' the "_RecipeData_" '_array_'.

RecipeList.js
 1.'_Imports_' "_React_" from '_react_'.
 2.The "_RecipeList_" '_function/component_' takes two '_parameters_'; "_recipes_" (a '_variable/array_' from '_./App.js_') and the "_deleteRecipe_" (a '_function_' from '_./App.js_'). The '_function_' "_getIndexToDelete_" '_function_' inside the "_RecipeList_" '_function/component_' takes one '_parameter_' named "_index_" and '_calls_' the "_deleteRecipes_" function with the value of the "_index_" '_parameter_' using the '_target_' and '_value_' '_methods_'. Inside the "_RecipeList_" '_function/component_' is the "_getIndexToDelete_" '_function_' which is used to '_delete_' specific items in 
  the "_recipes_" '_variable/array_'. Also inside is the "_createRecipeTableData_" '_function_', which creates a '_tr_' JSX '_element_' with '_td_', '_p_', '_button_' and '_img_' JSX '_elements_' based on the '_data_' in the items ('_objects_') in the "_recipes_" '_variable/array_'. A '_div_' JSX '_element_' is returned with a '_table_', a '_thead_', a '_tr_' and a '_tbody_' JSX '_element(s)_' with all the '_data_' from "_createRecipeTableData_" '_variable_' inside of the '_tbody_' JSX '_element_'.
 3.'_Exports_' the "_RecipeList_" '_function/component_'.