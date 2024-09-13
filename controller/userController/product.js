const express = require('express')
const app = express()

module.exports = {
    getProduct: async(req,res) => {
      
        res.render('product')

    },
}