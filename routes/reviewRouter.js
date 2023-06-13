const Router = require(`express`).Router()
const controller = require(`../controllers/reviewController`)

Router
    .get(`/`, controller.getAllReviews)
    .get(`/:name`, controller.getReviewByName)


    .post(`/`, controller.createReview)


    .put(`/:id`, controller.updateReview)


    .delete(`/:id`, controller.deleteReview)




module.exports = Router