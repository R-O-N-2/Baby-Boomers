const { Product } = require('../models')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json ({ products })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const getProductByName = async (req, res) => {
    try {
        let {id} = new req.params
        const product = await Product.find({product: id})
        if (!product) throw Error('Product not found')
        res.status(200).json(brand)
    } catch (e) {
        res.status(400).send(e.message)
    }
}




module.exports = {
    getAllProducts,
    getProductByName,
    
}