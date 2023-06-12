const db = require('../db')
const Brand = require('../models/brandModel')
const Category = require('../models/categoryModel')
const Product = require('../models/productModel')
const Review = require('../models/reviewModel')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const brands = [
        {brand: 'UPPAbaby'},
        {brand: 'Doona'},
        {brand: 'Babyzen'},
        {brand: 'Chicco'},
        {brand: 'Graco'},
        {brand: 'Baby Trend'}
    ]
    await Brand.insertMany(brands)
    console.log('Got the Brands!')


    
    const categories = [
        {category: 'stroller'},
        {category: 'car seat'},
        {category: 'high chair'}
    ]
    await Category.insertMany(categories)
    console.log('Got the Categories!')



    const products = [
        {
            name: '',
            category: '',
            brand: '',
            capacity: '',
            description: '',
            image: ''
        }
    ]
    await Product.insertMany(products)
    console.log('Got some products')


    const reviews = [
        {
            item: '',
            comment: '',
            rating: ''
        }
    ]
    await Review.insertMany(reviews)
    console.log('Got the reviews!')



}
const run = async () => {
    await main()
    db.close()
}

run()



