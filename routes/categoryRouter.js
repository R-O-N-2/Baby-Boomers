const Router = require(`express`).Router()
const controller = require(`../controllers/categoryController`)

Router
    .get(`/`, controller.getAllCategories)
    .get(`/:id`, controller.getCategoryByName)

module.exports = Router