const { Brand, Product } = require('../models')

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find()
        return res.status(200).json ({ brands })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const getBrandByName = async (req, res) => {
    try {
        let {id} = req.params
        const productBrand = await Product.find({brand: id})
        if (!productBrand) throw Error('Brand not found')
        res.status(200).json(productBrand)
    } catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = {
    getAllBrands,
    getBrandByName
    
}