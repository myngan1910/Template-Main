const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const productModel = require('../../model/adminModel/product.js')
const blogModel = require('../../model/adminModel/blog.js')
const serviceModel = require('../../model/adminModel/service.js')
const socialModel = require('../../model/adminModel/social.js')
const userModel = require('../../model/adminModel/user.js')
const user = require('../../model/adminModel/user_class.js')
const endowModel = require('../../model/adminModel/endow.js')
const promotionModel = require('../../model/adminModel/promotion.js')
module.exports = {
    getEShop: async(req,res) => {
      const userid = parseInt(req.session.userId)
      const shop = await  shopModel.getShopInfo();
      const blog = await blogModel.getBlog();
      const service = await serviceModel.getService();
      const social = await socialModel.getSocial();
      const product = await productModel.getProduct();
      const userclass = await user.getUser_class()
      const topview = await productModel.getTopView()
      const onsale = await productModel.getOnsale()
      const item = await productModel.gethotItem()
      const endow = await endowModel.getEndow()
      const promotion = await promotionModel.getPro()
      var cart 
      if(userid >= 0) {
       cart = await productModel.getCart(userid)

      }
      const userr = userModel.getUser(userid)
     
    


        res.render('index', {shop:shop, blog:blog,service:service, social:social, product:product, userclass:userclass, topview:topview, onsale:onsale, item:item, endow:endow, promotion: promotion, cart:cart, user:userr})

    },
    getSearch: async(req,res) => {
      const search = req.query.search;
      const id = parseInt(req.session.userId)
      if(id >= 0 ){
          var cart = await productModel.getProduct(id);
      } else {
          var cart ={}
      }
      const users = await userModel.getUser();
      const product = await productModel.getProduct();
      const shop = await  shopModel.getShopInfo();
      const blog = await blogModel.getBlog();
      const service = await serviceModel.getService();
      const social = await socialModel.getSocial();
     
      var pro = product.filter((name) => {
          return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      })

     
     
      res.render('viewproduct', {shop:shop, blog:blog,service:service, social:social, product:pro, cart:cart,users:users})


  },
  }