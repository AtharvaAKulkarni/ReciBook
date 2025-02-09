const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingridients: { type: Array, required: true },
    likes: { type: Number, required: false, default: 0 },
    notes: { type: String, required: false },
    time: { type: String, required: false },
    rating: { type: Number, required: false },
    category: { type: Array, required: true },
    yield: { type: String, required: true },
    instructions: { type: String, required: true },
    uploadedOn: { type: Date, default: Date.now },
    uploadedBy: { type: String, required: true },
    uploadedByBio:{type:String},
    image: { type: String, required: false },  // New field for recipe image
    comments: [  // New field for comments
        {
            userImage: { type: String, required: true },  // User's profile picture
            username: { type: String, required: true },  // User's name
            comment: { type: String, required: true }  // Actual comment text
        }
    ]
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
