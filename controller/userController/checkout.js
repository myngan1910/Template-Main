const express = require('express')
const app = express()

module.exports = {
    getCheck: async(req,res) => {
      
        res.render('checkout')

    },
}