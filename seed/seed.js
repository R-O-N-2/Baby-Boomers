const db = require('../db')
const { Brand } = require('../models')
const { Category } = require('../models')
const { Product } = require('../models')
const { Review } = require('../models')
// const prodID = Product.find({})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const brands = [
        {
            brand: 'UPPAbaby',
            url: 'https://uppababy.com/',
            
        },

        {
            brand: 'Doona',
            url: 'https://www.doona.com/en-us/car-seat-stroller/discover-doona?gad=1&gclid=EAIaIQobChMI7rCW1K3A_wIVStCGCh3o-AAIEAAYASAAEgK9gvD_BwE'
        },

        {
            brand: 'Babyzen',
            url: 'https://store-us.babyzen.com/?storeRedirect=US&gad=1&gclid=EAIaIQobChMI9oGTgK7A_wIVxpyGCh3TIg5wEAAYASAAEgIk9_D_BwE'
        },

        {
            brand: 'Chicco',
            url: 'https://www.chiccousa.com/?gad=1&gclid=EAIaIQobChMI2IOeja7A_wIVj7mGCh2vSQiDEAAYASAAEgJ21vD_BwE'
        },

        {
            brand: 'Graco',
            url: 'https://www.gracobaby.com/?utm_source=google&utm_medium=cpc&utm_campaign=ec_ne_google_search_brand_core_exact&utm_term=kwd-15042650_-_602336908546&utm_content=17410661706_-_138131853020&gclid=EAIaIQobChMIuZikqq7A_wIVhIBaBR2Hxgo8EAAYASAAEgI09vD_BwE'
        },

        {
            brand: 'Baby Trend',
            url: 'https://babytrend.com/'
        }
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
            item: '6487a1d74f77be869b5279c3',
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



