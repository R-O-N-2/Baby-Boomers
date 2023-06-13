const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

const Category = new Schema(
    {
        name: { type: String, required: true}

    },
    {timestamps: true}
)

module.exports = Category