const express = require('express')
const app = express()
module.exports = {
    getblog: async(req,res) => {
      
        res.render('blog-single-sidebar')

    },
}