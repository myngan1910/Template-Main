const express = require('express')
const app = express()

module.exports = {
    getEShop: async(req,res) => {
      
        res.render('index')

    },}