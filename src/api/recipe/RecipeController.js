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
        ModelRecipe.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ModelRecipe.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(show)
        })
    }
}