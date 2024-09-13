const express = require('express')
const app = express();
module.exports = {
    getCart: async(req,res) => {
      
        res.render('cart')

    },
}