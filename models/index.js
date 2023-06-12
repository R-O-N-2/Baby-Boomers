const mongoose = require('mongoose')
const brandSchema = require('./brandModel')
const productSchema = require('./productModel')
const categorySchema = require('./categoryModel')
const reviewSchema = require('./reviewModel')

const Brand = mongoose.model('Brand', brandSchema)
const Product = mongoose.model('Product', productSchema)
const Category = mongoose.model('Category', categorySchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Brand,
    Product,
    Category,
    Review
}
