const Router = require(`express`).Router()
const controller = require(`../controllers/productController`)

Router
    .get(`/`, controller.getAllProducts)
    .get(`/:name`, controller.getProductByName)

module.exports = Router