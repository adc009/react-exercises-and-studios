import recipedata from "./recipe.json";

function IngredientList() {
  const ingredients = recipedata.ingredients;
  const ingredientsList = (props) => {
    return props.map((ingredient) => <li key={props.index}>{ingredient}</li>);
  };
  
  return <ul>{ingredientsList(ingredients)}</ul>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 