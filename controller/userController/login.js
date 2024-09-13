const express = require('express')
const app = express()

module.exports = {
    getLogin: async(req,res) => {
      
        res.render('login')

    },
}