const router = require('express').Router()
const RecipeController = require('./RecipeController')
const multer = require('multer')
const storage = require('../../config/storage')
const upload = multer({
    storage
})

router.get('/', RecipeController.index)
router.get('/:id', RecipeController.show)
router.post('/', RecipeController.store)
router.put('/:id', RecipeController.update)
router.delete('/:id', RecipeController.destroy)

router.post('/:id/upload', upload.single("image"), RecipeController.upload)


module.exports = router