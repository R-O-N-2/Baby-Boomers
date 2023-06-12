const { Review } = require('../models')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json ({ reviews })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const getReviewByName = async (req, res) => {
    try {
        let searchKey = new RegExp(req.params.name, 'i')
        const review = await Review.find({name: searchKey}).populate({path: 'products', model: 'Product'})
        if (!review) throw Error('Review not found')
        res.status(200).json(brand)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewByName
    
}