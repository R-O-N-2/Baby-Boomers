const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

const Brand = new Schema(
    {
        name: { type: String, required: true},
        url: {type: String, requrired: true}
    },
    {timestamps: true}
)

module.exports = Brand