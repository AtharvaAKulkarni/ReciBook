const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware"); // Import the upload middleware

router.post('/add-recipe', verifyToken, upload.single("image"), async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file); // Debugging log

        if (!req.file) {
            return res.status(400).json({ message: "Image is required!" });
        }

        const { 
            name, description, ingridients, likes, notes, time, rating, category, 
            yield, instructions, uploadedBy, uploadedByBio
        } = req.body;

        const imageUrl = `/uploads/${req.file.filename}`;

        if (!name || !instructions || !ingridients.length) {
            return res.status(400).json({ message: "Missing required fields!" });
        }

        const newRecipe = new Recipe({
            name,
            description,
            ingridients: JSON.parse(ingridients),
            likes,
            notes,
            time,
            rating,
            category,
            yield,
            instructions,
            uploadedBy,
            uploadedByBio,
            imageUrl,
            comments: [],
        });

        await newRecipe.save();
        res.json({ message: "Recipe added successfully!", 
            imageUrl: imageUrl  });
    } catch (error) {
        res.status(500).json({ message: "Couldn't add recipe!", error });
    }
});



// Add a comment to a recipe
router.post('/add-comment', async (req, res) => {
    try {
        const { recipeId, userImage, username, comment } = req.body;

        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found!" });
        }

        // Add the new comment
        recipe.comments.push({ userImage, username, comment });

        await recipe.save();
        res.json({ message: "Comment added successfully!", comments: recipe.comments });
    } catch (error) {
        res.status(500).json({ message: "Couldn't add comment!", error });
    }
});

// Get recipes based on condition
router.post('/get-recipes', async (req, res) => {
    try {
        const { condition, category, id } = req.body;

        if (condition === "trending") {
            const topRecipes = await Recipe.find().sort({ likes: -1 }).limit(4);
            return res.status(200).json({ message: "Fetched top 4 recipes", recipes: topRecipes });
        }

        if (condition === "category" && category) {
            const fetchCategory = await Recipe.find({ category });
            return res.status(200).json({ message: "Fetched category recipes", category: fetchCategory });
        }

        if (condition === "all") {
            const allRecipes = await Recipe.find();
            return res.status(200).json({ message: "Fetched all recipes", recipes: allRecipes });
        }

        if (condition === "id" && id) {
            const fetchRecipeFromId = await Recipe.findById(id);
            return res.status(200).json({ message: "Recipe fetched successfully!", recipe: fetchRecipeFromId });
        }

        return res.status(400).json({ message: "Invalid condition parameter" });

    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
});

module.exports = router;
