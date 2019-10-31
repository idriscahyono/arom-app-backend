const router = require('express').Router()

router.use('/recipe', require('../api/recipe/RecipeRouter'))
module.exports = router