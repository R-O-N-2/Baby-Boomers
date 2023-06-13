const db = require('../db')
const { Brand } = require('../models')
const { Category } = require('../models')
const { Product } = require('../models')
const { Review } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    // BRANDS
    const brand1 = await new Brand({
            name: 'UPPAbaby',
            url: 'https://uppababy.com/',
            
        })
        brand1.save()

        
    const brand2 = await new Brand({
            name: 'Doona',
            url: 'https://www.doona.com/en-us/car-seat-stroller/discover-doona?gad=1&gclid=EAIaIQobChMI7rCW1K3A_wIVStCGCh3o-AAIEAAYASAAEgK9gvD_BwE'
        })
        brand2.save()


    const brand3 = await new Brand({
            name: 'Babyzen',
            url: 'https://store-us.babyzen.com/?storeRedirect=US&gad=1&gclid=EAIaIQobChMI9oGTgK7A_wIVxpyGCh3TIg5wEAAYASAAEgIk9_D_BwE'
        })
        brand3.save()


    const brand4 = await new Brand({
            name: 'Chicco',
            url: 'https://www.chiccousa.com/?gad=1&gclid=EAIaIQobChMI2IOeja7A_wIVj7mGCh2vSQiDEAAYASAAEgJ21vD_BwE'
        })
        brand4.save()

        
    const brand5 = await new Brand ({
            name: 'Graco',
            url: 'https://www.gracobaby.com/?utm_source=google&utm_medium=cpc&utm_campaign=ec_ne_google_search_brand_core_exact&utm_term=kwd-15042650_-_602336908546&utm_content=17410661706_-_138131853020&gclid=EAIaIQobChMIuZikqq7A_wIVhIBaBR2Hxgo8EAAYASAAEgI09vD_BwE'
        })
        brand5.save()


    const brand6 = await new Brand({
            name: 'Baby Trend',
            url: 'https://babytrend.com/'
        })
        brand6.save()
        console.log('6 Brands!')
    


    // CATEGORIES
    const category1 = await new Category({
            name: 'Stroller'
         })
    category1.save()


    const category2 = await new Category({
            name: 'Car Seat'
        })
    category2.save()


    const category3 = await new Category({
            name: 'High Chair'
        })
    category3.save()
    console.log('3 Categories!')




    // PRODUCTS
    const product1 = await new Product({
            name: 'Vista V2 Stroller',
            category: category1._id,
            brand: brand1._id,
            capacity: '30 lbs (basket)',
            description: 'The VISTA is designed to grow with families offering multiple configuration options All while strolling like a single. The new VISTA v2 offers design improvements solidifying its positioning as a performance stroller system while Functional upgrades make the lives of parents even easier.',
            image: 'https://m.media-amazon.com/images/I/81JZU-fsBEL._SX466_.jpg',
            price: '$999.99'
        })
        product1.save()

    
    const product2 = await new Product({
            name: 'Doona Car Seat & Stroller',
            category: category1._id,
            brand: brand2._id,
            capacity: '35 lbs',
            description: `Doona is the world’s first complete and fully integrated travel system, allowing you to move from car seat to stroller in seconds.`,
            image: 'https://www.doona.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa5ijcxwbf06s%2FsUKXPkc9zMjsylZnoMphJ%2F976a389bfacb75506539f532a26a4977%2F5-Doona_US_Racing_Green_35627.png&w=1920&q=75',
            price: '$550.00'
        })
        product2.save()


    const product3 = await new Product({
        name: 'Babyzen YOYO2 Stroller',
        category: category1._id,
        brand: brand3._id,
        capacity: '48.5 lbs',
        description: 'EASY TO USE - BABYZEN YOYO2 is one of the most lightweight, compact, full-feature strollers available. Designed for every situation, every day, you can carry it on your shoulder and even steer with one hand.',
        image: 'https://m.media-amazon.com/images/I/61PNPeVKu2L._SX466_.jpg',
        price: '$399.00'
    })
    product3.save()


    const product4 = await new Product({
        name: 'Chicco Mini Bravo Plus',
        category: category1._id,
        brand: brand4._id,
        capacity: '50 lbs',
        description: 'The lightweight Mini Bravo Plus Stroller makes every excursion simpler with user-friendly touchpoints, precise maneuverability, and click-in attachment for all KeyFit and Fit2 infant car seats.',
        image: 'https://m.media-amazon.com/images/I/71BeLs1SfyL._SX466_.jpg',
        price: '$199.99'
    })
    product4.save()


    const product5 = await new Product({
        name: 'Graco Modes Pramette Stroller',
        category: category1._id,
        brand: brand5._id,
        capacity: '50 lbs',
        description: 'The Graco Modes Pramette Stroller offers you and your child more ways to stroll together, from baby to big kid.',
        image: 'https://m.media-amazon.com/images/I/814Eys-70BL._SX466_.jpg',
        price: '$219.99'
    })
    product5.save()


    const product6 = await new Product({
        name: 'Baby Trend Expedition Jogger Stroller',
        category: category1._id,
        brand: brand6._id,
        capacity: '50 lbs',
        description: 'The expedition jogging stroller features large bicycle tires and a front swivel wheel that can be unlocked for low speed maneuvering or locked into place for jogging. Stroller also can accept any of the baby trend flex-lock or inertia infant car seats to make a travel system, comes with both a parent tray with 2 cup holders and a storage compartment and child tray with cup holder.',
        image: 'https://m.media-amazon.com/images/I/61zXUDVeWmL._SX466_.jpg',
        price: '$149.99'
    })
    product6.save()


    const product7 = await new Product({
        name: 'MESA Infant Car Seat',
        category: category2._id,
        brand: brand1._id,
        capacity: '35 lbs',
        description: 'The MESA is the only infant car seat with a unique technology utilizing a tightness indicator and self-retracting LATCH connectors for fast, accurate and easy installation.',
        image: 'https://dimg.dillards.com/is/image/DillardsZoom/mainProduct/uppababy-infant-car-seat/00000000_zi_e06044ea-e43e-47dd-91b9-928bd0942e3a.jpg',
        price: '$299.99'
    })
    product7.save()


    const product8 = await new Product({
        name: 'Chicco Fit4',
        category: category2._id,
        brand: brand4._id,
        capacity: '100 lbs',
        description: 'The Chicco Fit4 4-In-1 Convertible Car Seat, designed to deliver premier child fit and comfort at each unique stage, makes it easy to correctly secure your child in the infant to toddler car seat or big kid booster. Trusted, easy-to-use installation and safety features unique to Chicco combine with an innovative 4-Stage FitKit System, for ultimate convenience and peace of mind as your baby grows.',
        image: 'https://m.media-amazon.com/images/I/71M41mTufAL._SX466_.jpg',
        price: '$379.99'
    })
    product8.save()


    const product9 = await new Product({
        name: 'Graco Extend2Fit Convertible Car Seat',
        category: category2._id,
        brand: brand5._id,
        capacity: '65 lbs',
        description: 'Safely ride rear-facing longer! The Graco Extend2Fit Convertible Car Seat grows with your child from rear-facing harness (4-50 lbs) to forward-facing harness (22-65 lbs). It features a 4-position extension panel that provides up to 5” of extra rear-facing legroom, allowing your child to safely ride rear-facing longer.',
        image: 'https://m.media-amazon.com/images/I/71wNWtNb0sL._SX466_.jpg',
        price: '$234.97'
    })
    product9.save()


    const product10 = await new Product({
        name: 'Baby Trend Cover Me 4-in-1',
        category: category2._id,
        brand: brand6._id,
        capacity: '100 lbs',
        description: 'Introducing the Baby Trend Cover Me 4-in-1 Convertible Car Seat! This car seat offers an integrated, patented height and adjustable angle UPF 50+ canopy for comprehensive in-car shade protection. Adjusting and removing is simple because it is incorporated and coupled to a built-in track.',
        image: 'https://m.media-amazon.com/images/I/71zDiKz4bjL._SX466_.jpg',
        price: '$179.99'
    })
    product10.save()


    const product11 = await new Product({
        name: 'Chicco Polly Highchair',
        category: category3._id,
        brand: brand4._id,
        capacity: '40 lbs',
        description: 'The Polly Space-Saving Fold High Chair grows with your baby to offer comfortable meals from infant through toddler. Polly features new modern styling with smooth, soft fabric that’s easy to wipe clean. A compact, 11” wide fold stands independently for convenient storage.',
        image: 'https://m.media-amazon.com/images/I/61qq-y9v27L._SX466_.jpg',
        price: '$139.99'
    })
    product11.save()


    const product12 = await new Product({
        name: 'Graco DuoDiner DLX',
        category: category3._id,
        brand: brand5._id,
        capacity: '55 lbs',
        description: 'The Graco DuoDiner DLX 6-in-1 Highchair offers 6 growing stages from infant highchair to seating two kids at once. The highchair features infant body support and 3 recline positions, as well as 5 height positions to match dining table height.',
        image: 'https://m.media-amazon.com/images/I/618YCZjDQhL._SY741_.jpg',
        price: '$149.99'
    })
    product12.save()


    const product13 = await new Product({
        name: 'Baby Trend Dine Time 3-in-1 High Chair',
        category: category3._id,
        brand: brand6._id,
        capacity: '40 lbs',
        description: 'The Dine Time 3-in-1 High Chair in Starlight Pink reclines for infant feeding and later transforms from a full-size high chair to a toddler chair. The height, recline and tray can all be adjusted to your child’s growing body and the 5-point safety harness keeps them secure.',
        image: 'https://m.media-amazon.com/images/I/81Nn-cs9L6L._SX466_.jpg',
        price: '$69.99'
    })
    product13.save()
    console.log('Got some products')



    // REVIEWS
    const review1 = await new Review({
            item: product1._id,
            comment: 'Best stroller ever made! Used for all 12 of my kids!',
            rating: '10/10'
        })
        review1.save()


    const review2 = await new Review({
        item: product7._id,
        comment: 'Life Saver!',
        rating: '10/10'
    })
    review2.save()


    const review3 = await new Review({
        item: product11._id,
        comment: 'Must have when feeding the baby, would reccomend to every parent.',
        rating: '10/10'
    })
    review3.save()
    console.log('Got the reviews!')

}
const run = async () => {
    await main()
    db.close()
}

run()



