const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

const Product = new Schema(
    {
        name: { type: String, required: true},
        category: { type: Schema.Types.ObjectId, ref: 'Category'},
        brand: { type: Schema.Types.ObjectId, ref: `Brand`, required: true},
        capacity: { type: String, required: true},
        description: {type: String, required: true},
        image: { type: String, required: true},
        price: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Product