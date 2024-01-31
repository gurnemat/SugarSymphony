const express = require("express");
const router = express.Router();

const fs = require("fs");

function readRecipes() {
  const data = fs.readFileSync("./data/recipes.json");
  const prasedvideo = JSON.parse(data);
  return prasedvideo;
}

// --- GET ALL RECIPES ---
router.get("/", async (req, res) => {
  try {
    const recipes = readRecipes();

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).send("internal Server Error");
  }
});

// --- GET RECIPES BY ID ---
router.get("/:recipeId", async (req, res) => {
  const recipeId = req.params.recipeId;

  try {
    const recipes = await readRecipes();

    const recipe = recipes.find((recipe) => recipe.recipeID == recipeId);

    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).send("internal Server Error");
  }
});

module.exports = router;
