const mongoose = require('mongoose')

mongoose.connect(
    '   '

).then(function () {
    console.log('connected')
}).catch(function (e) {
    console.log(e)
})