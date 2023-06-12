const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

const Brand = new Schema(
    {
        brand: { type: String, required: true},
    },
    {timestamps: true}
)

module.exports = Brand