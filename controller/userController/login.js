const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const serviceModel = require('../../model/adminModel/service.js')
const socialModel = require('../../model/adminModel/social.js')


module.exports = {
    getLogin: async(req,res) => {
    
       const shop = await shopModel.getShopInfo();
       const service = await serviceModel.getService();
       const social = await socialModel.getSocial();
       
        res.render('login', {shop:shop,service:service,social:social})

    },
   
}