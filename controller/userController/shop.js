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
      const userid = req.session.userId
      const shop1 = await  shopModel.getShopInfo();
      const blog1 = await blogModel.getBlog();
      const service1= await serviceModel.getService();
      const social1 = await socialModel.getSocial();
      const product1 = await productModel.getProduct();
      const userclass1= await user.getUser_class()
      const topview1 = await productModel.getTopView()
      const onsale1 = await productModel.getOnsale()
      const item1 = await productModel.gethotItem()
      const endow1 = await endowModel.getEndow()
      const promotion1 = await promotionModel.getPro()
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
        res.render('./dashboard/index', {shop:shop1,blog:blog1,service:service1, social:social1, product:product1, userclass:userclass1, topview:topview1, onsale:onsale1, item:item1, endow:endow1, promotion: promotion1, cart:cart, account:account})

    },
    getSearch: async(req,res) => {
      const search = req.query.search;
      const genId = parseInt(req.params.ID)
      const id = parseInt(req.session.userId)
      var cart=[]
      let account = 0;
      if(id >= 0 ){
          cart = await productModel.getProduct(id);
          account=account + parseInt(cart[i].product.price)* parseInt(cart[i].quanlity);
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

     console.log(cart)
     
      res.render('./dashboard/viewproduct', {shop:shop, blog:blog,service:service, social:social, product:pro, cart:cart,users:users,currentpage:genId, account:account})


  },
  }