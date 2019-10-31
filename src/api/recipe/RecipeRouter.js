const router = require('express').Router()
const RecipeController = require('./RecipeController')

router.get('/', RecipeController.index)
router.get('/:id:', RecipeController.show)
router.post('/', RecipeController.store)
router.put('/:id', RecipeController.update)
router.delete('/:id', RecipeController.destroy)

module.exports = router