const Router = require(`express`).Router()
const controller = require(`../controllers/brandController`)

Router
    .get(`/`, controller.getAllBrands)
    .get(`/:name`, controller.getBrandByName)

module.exports = Router