const Router = require(`express`).Router()
const controller = require(`../controllers/reviewController`)

Router
    .get(`/`, controller.getAllReviews)
    .get(`/:name`, controller.getReviewByName)

module.exports = Router