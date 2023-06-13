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


const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


const updateReview = async (req, res) => {
    try {
        let { id } = req.params
        let review = await Review.findByIdAndUpdate(id, req.body, {new: true})
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error('Review not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const deleteReview = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Review.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Review deleted")
        }
        throw new Error("Review not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllReviews,
    getReviewByName,
    createReview,
    updateReview,
    deleteReview
    
}