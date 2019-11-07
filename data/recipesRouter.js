const express = require("express");
const db = require("./recipes-model");

const router = express.Router();

router.get("/:id/steps", handleInstructionsGet);
router.get("/:id", handleShoppingListGet);
router.get("/", handleRecipesGet);

function handleInstructionsGet(req, res) {
  db.getInstructions(req.params.id)
    .then(data => {
      console.table(data);
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}

function handleShoppingListGet(req, res) {
  db.getShoppingList(req.params.id)
    .then(data => {
      console.table(data);
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}

function handleRecipesGet(req, res) {
  db.getRecipes()
    .then(data => {
      console.table(data);
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}

module.exports = router;
