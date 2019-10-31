const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [{
        name: String,
        price: Number
    }],
    steps: [String]
})

module.exports = mongoose.model('Recipe', recipeSchema)