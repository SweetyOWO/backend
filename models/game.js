const mongoose = require('mongoose');
const usersModel = require('./users');
const categoryModel = require('./category');

const gameShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: usersModel
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel
    }]
})

module.exports = mongoose.model('game', gameShema);