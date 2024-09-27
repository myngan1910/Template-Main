const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const socialModel = require('../../model/adminModel/social.js')
const serviceModel = require('../../model/adminModel/service.js')
const productModel = require('../../model/adminModel/product.js')
module.exports = {
    getContact: async(req,res) => {
        const userid = parseInt(req.session.userId)
       
        var cart 
        if( userid >= 0) {
             cart = await productModel.getCart(userid)
        }
      
       
        const shop = await shopModel.getShopInfo();
        const social = await socialModel.getSocial();
        const service = await serviceModel.getService();
        res.render('contact',{shop:shop, social:social, service:service, cart:cart})
    
    },
}