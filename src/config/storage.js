const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: 'dnxlxr3pd',
    api_key: '519952636564435',
    api_secret: 'gelj6lQRbAsYy6tLoq1TXp8OukU'
})

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'uploads',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        const date = new Date()
        cb(undefined, date.getDate() + date.getMonth() + date.getFullYear() + date.getHours() + date.getMinutes() + date.getSeconds() + file.originalname)
    }
})

module.exports = storage