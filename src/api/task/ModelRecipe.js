const mongoose = require('mongoose')

const taskRecipe = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [{
        name: String,
        price: Number
    }],
    steps: String[{}]
})

module.exports = mongoose.model('Task', taskRecipe)