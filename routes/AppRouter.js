const Router = require(`express`).Router()

const BrandRouter = require(`./brandRouter`)
const ProductRouter = require(`./productRouter`)
const CategoryRouter = require(`./categoryRouter`)
const ReviewRouter = require(`./reviewRouter`)

Router.use(`/brands`, BrandRouter)
Router.use(`/products`, ProductRouter)
Router.use(`/categories`, CategoryRouter)
Router.use(`/reviews`, ReviewRouter)

module.exports = Router