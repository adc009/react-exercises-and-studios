import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  const recipeImage = `<img src=${recipedata.recipeImage} alt=${recipedata.name} class="recipeImage"/>` 
  return (
  <div> 
    {recipeImage}
    </div>
  );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 