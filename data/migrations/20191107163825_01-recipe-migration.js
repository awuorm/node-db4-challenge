
exports.up = function(knex) {
    return knex.schema.createTable("recipes",(table) => {
        table.increments();
        table.string("recipeName").notNullable();
    })
    .createTable("ingredients",(table) => {
        table.increments();
        table.string("ingredientName").notNullable();
    })
    .createTable("ingredientsQuantity",(table) => {
        table.increments();
        table.string("ingredientQuantity");
        table.integer("recipeId").notNullable().unsigned().references("id").inTable("recipes");
        table.integer("IngredientId").notNullable().unsigned().references("id").inTable("ingredients");
    })
    .createTable("recipeSteps",(table) => {
        table.increments();
        table.string("instructions").notNullable();
        table.string("stepNumber").notNullable();
        table.integer("recipeId").notNullable().unsigned().references("id").inTable("recipes");        
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("ingredientsQuantity")
    .dropTableIfExists("recipeSteps")

};
