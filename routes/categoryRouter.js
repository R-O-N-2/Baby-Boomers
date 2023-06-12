const Router = require(`express`).Router()
const controller = require(`../controllers/categoryController`)

Router
    .get(`/`, controller.getAllCategories)
    .get(`/:name`, controller.getCategoryByName)

module.exports = Router