const db = require("./db-config");
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes as r");
}

function getShoppingList(id) {
  return db("ingredientsQuantity as i")
    .join("ingredients as in", "i.IngredientID", "in.id")
    .select("in.id", "i.ingredientQuantity", "in.ingredientName")
    .where({ recipeId: id });
}

function getInstructions(id) {
  return db("recipeSteps as s")
    .join("recipes as r", "r.id", "s.recipeId")
    .select("s.stepNumber", "r.recipeName", "s.instructions")
    .where({ recipeId: id });
}
