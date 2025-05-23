const express = require('express')
const app = express()
const registerModel = require('../../model/adminModel/user.js')
const userModel = require('../../model/adminModel.js')
const shopModel = require('../../model/adminModel/shop.js')
const socialModel = require('../../model/adminModel/social.js')
const serviceModel = require('../../model/adminModel/service.js')
const productModel = require('../../model/adminModel/product.js')
module.exports = {
    getRegister: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const shop = await shopModel.getShopInfo();
        const social = await socialModel.getSocial();
        const service = await serviceModel.getService();
        let cart
       let account = 0;
       if( userid >= 0) {
            cart = await productModel.getCart(userid);
           
       }
       if(cart != undefined){
           for (var i=0; i < cart.length; i++ ){
               account=account + parseInt(cart[i].product.price)* parseInt(cart[i].quanlity);
              

           }
       }
        res.render('./dashboard/register',{shop:shop, social:social, service:service, cart: cart,account:account})

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
        const role = 1;
        const  User = await registerModel.postCreateUser(avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role)
        res.redirect('/register')
    }
}