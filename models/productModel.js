const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

const Product = new Schema(
    {
        name: { type: String, required: true},
        category: { type: String, required: true},
        brand: { type: String, required: true},
        capacity: { type: String, required: true},
        desription: {type: String, required: true},
        image: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Product