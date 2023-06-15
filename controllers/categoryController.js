const { Category, Product } = require('../models')

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json ({ categories })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const getCategoryByName = async (req, res) => {
    try {
        let {id} = req.params
        const productCategory = await Product.find({category: id})
        if (!productCategory) throw Error('Category not found')
        res.status(200).json(productCategory)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllCategories,
    getCategoryByName
    
}