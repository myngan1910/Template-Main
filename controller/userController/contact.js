const express = require('express')
const app = express()

module.exports = {
    getContact: async(req,res) => {
      
        res.render('contact')

    },
}