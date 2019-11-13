const ModelRecipe = require('./RecipeModel')

module.exports = {
    index: function (req, res) {
        ModelRecipe.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ModelRecipe.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ModelRecipe.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        ModelRecipe.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ModelRecipe.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    upload: function (req, res) {
        ModelRecipe.findByIdAndUpdate(req.params.id, {
            image_url: req.file.url
        }, {
            new: true
        }).then(function (row) {
            res.send(row)
        })
    }
}
