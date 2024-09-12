const express = require('express')
const app = express()
const userModel  = require('../model/adminModel.js')
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

    //REGISTER
    getRegister: async(req,res) => {
      
        res.render('register')

    },
    postRegister: async(req,res) => {
        const image = req.file ;
        const data = [];
        const avata = await userModel.checkimg(image,data)
        const lname = req.body.name;
        const fname = req.body.name;
        const mail = req.body.mail;
        const pass = req.body.pass;
        const add1 = req.body.address1;
        const phone = req.body.phone;
        const add2 = req.body.address1;
         const pos = '';
         const state = '';
         const con = '';
         const com = '';
        const role = 2;
        const  User = await userModel.postCreateUser(avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role)
        res.redirect('/register')
    }
}