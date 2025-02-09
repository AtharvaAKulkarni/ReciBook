const mongoose = require("mongoose");

const debugObjectId = (recipe_id) => {
    console.log("Raw recipe_id:", recipe_id);
    console.log("Is Valid ID (before conversion):", mongoose.isValidObjectId(recipe_id));

    try {
        const objectId = new mongoose.Types.ObjectId(String(recipe_id));
        console.log("Converted ObjectId:", objectId);
        console.log("Is Valid ID (after conversion):", mongoose.isValidObjectId(objectId));
        return objectId;
    } catch (error) {
        console.log("Error converting to ObjectId:", error.message);
        return null;
    }
};

// Example usage
const testId = "67a620c5b45f579fe18970c8"; // Replace with actual ID
debugObjectId(testId);
