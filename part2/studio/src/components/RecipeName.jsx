import recipedata from "./recipe.json";

function RecipeName() {
  // const recipeName = `<h1>${recipedata.name}</h1>`
  const recipeName = recipedata.map((data,index) => 
      <div key={index}><h1>{data.name}</h1></div>);
  return recipeName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header