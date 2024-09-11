const express = require('express')
const app = express()
module.exports = {
    getEShop: async(req,res) => {
      
        res.render('index')

    },
    getCart: async(req,res) => {
      
        res.render('cart')

    },
    getblog: async(req,res) => {
      
        res.render('blog-single-sidebar')

    },
    getContact: async(req,res) => {
      
        res.render('contact')

    },
    getCheck: async(req,res) => {
      
        res.render('checkout')

    },
    getProduct: async(req,res) => {
      
        res.render('product')

    },
    getLogin: async(req,res) => {
      
        res.render('login')

    },
    getRegister: async(req,res) => {
      
        res.render('register')

    },
}