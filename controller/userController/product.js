const express = require('express')
const app = express()
const productModel = require('../../model/adminModel/product.js')
const shopModel = require('../../model/adminModel/shop.js')
const serviceModel = require('../../model/adminModel/service.js')
const socialModel = require('../../model/adminModel/social.js')
const colorModel = require('../../model/adminModel/color.js')
const sizeModel = require('../../model/adminModel/size.js')
const reviewModel = require('../../model/adminModel/review.js')

module.exports = {
    getProduct: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const genId = parseInt(req.params.ID);
      
        const product = await productModel.getProductt(genId);
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService();
        const social = await socialModel.getSocial();
        const color = await colorModel.getColor();
        const size = await sizeModel.getSize();
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
        const view = await productModel.increas(genId)
        
        res.render('./dashboard/product', {product:product,shop:shop, service:service, social:social, color:color,size:size, cart:cart, account:account})

    },
    createlikeProduct: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const genId = parseInt(req.params.ID);
        let likeproduct 
        if(userid > 0) {
             likeproduct = await productModel.createlikeProduct(userid,genId)
           
        }
      

        res.redirect(`/product/${genId}`)
    },
    getviewProduct: async(req,res) => {
        const genId = parseInt(req.params.ID) || 1;
        
        const userid = parseInt(req.session.userId)
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
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService();
        const social = await socialModel.getSocial();
        const color = await colorModel.getColor();
        const size = await sizeModel.getSize();
        const pro = await productModel.getpageProduct((genId - 1)*2)


       
        res.render('./dashboard/viewproduct', {product:pro,shop:shop, service:service, social:social, color:color,size:size,  cart:cart,currentpage:genId, account:account})
    
    },
    getlikeProduct: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const userid = parseInt(req.session.userId)
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
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService();
        const social = await socialModel.getSocial();
        const color = await colorModel.getColor();
        const size = await sizeModel.getSize();
        const product = await productModel.getlikeProduct(userid)
       
        res.render('./dashboard/productlike', {product:product,shop:shop, service:service, social:social, color:color,size:size,  cart:cart,currentpage:genId, account:account})
    
    },
    
    createCart: async(req,res) => {
        const id = parseInt(req.params.ID);
        const userid = parseInt(req.session.userId);
        const quatity = req.body.quantity;
       
        let create 
        if( userid > 0) {
         create = await productModel.createCart(id,userid,quatity);
        }
        res.redirect(`/product/${id}`)

    },
    remove: async(req,res) => {
        const userid = parseInt(req.session.userId);
        const productid = parseInt(req.params.ID);
        console.log(productid)
        const cart = await productModel.remove(userid,productid)
         res.redirect(`/cart`)
    },

    postRev:  async(req,res) => {
        
        const content = req.body.content;
        const evl = '';
        
        const user = parseInt(req.session.userId);
       const product = parseInt(req.params.ID);

       const createPro =  await reviewModel.postCreateRev(content, evl, user, product);
       return res.redirect(`/product/${product}`)
     
   
   },
   
}