const { Brand } = require('../models')

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
        let searchKey = new RegExp(req.params.name, 'i')
        const brand = await Brand.find({name: searchKey}).populate({path: 'products', model: 'Product'})
        if (!brand) throw Error('Brand not found')
        res.status(200).json(brand)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllBrands,
    getBrandByName
    
}