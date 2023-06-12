const db = require('../db')
const { Brand } = require('../models')
const { Category } = require('../models')
const { Product } = require('../models')
const { Review } = require('../models')

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
            name: 'Vista V2 Stroller',
            category: 'stroller',
            brand: 'UPPAbaby',
            capacity: '30 lbs (basket)',
            description: 'The VISTA is designed to grow with families offering multiple configuration options All while strolling like a single. The new VISTA v2 offers design improvements solidifying its positioning as a performance stroller system while Functional upgrades make the lives of parents even easier.',
            image: 'https://m.media-amazon.com/images/I/81JZU-fsBEL._SX466_.jpg'
        }
    ]
    await Product.insertMany(products)
    console.log('Got some products')


    const reviews = [
        {
            item: 'Vista V2 Stroller',
            comment: 'Best stroller ever made! Used for all 12 of my kids!',
            rating: '10/10'
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



