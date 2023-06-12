const { Category } = require('../models')

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
        let searchKey = new RegExp(req.params.name, 'i')
        const category = await Category.find({name: searchKey}).populate({path: 'products', model: 'Product'})
        if (!category) throw Error('Category not found')
        res.status(200).json(brand)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllCategories,
    getCategoryByName
    
}