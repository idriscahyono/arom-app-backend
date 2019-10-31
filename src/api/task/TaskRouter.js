const router = require('express').Router()
const ControllerRecipe = require('./ControllerRecipe')

router.get('/', ControllerRecipe.index)
router.get('/:id:', ControllerRecipe.show)
router.post('/', ControllerRecipe.store)
router.put('/:id', ControllerRecipe.update)
router.delete('/:id', ControllerRecipe.destroy)

module.exports = router