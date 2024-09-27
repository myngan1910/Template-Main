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
        const productt = await productModel.getProduct()
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService();
        const social = await socialModel.getSocial();
        const color = await colorModel.getColor();
        const size = await sizeModel.getSize();
        var cart 
        if( userid >= 0) {
             cart = await productModel.getCart(userid,genId)
        }
        const view = await productModel.increas(genId)
        if(userid >= 0 ){
        console.log(await productModel.getUser_pro(userid))
        } 
        res.render('product', {product:product,shop:shop, service:service, social:social, color:color,size:size, productt:productt, cart:cart})

    },
    getviewProduct: async(req,res) => {
        const genId = parseInt(req.params.ID) || 1;
        
        const userid = parseInt(req.session.userId)
        var cart 
        if( userid >= 0) {
             cart = await productModel.getCart(userid)
        }
        const product = await productModel.getProduct(genId);
        const productt = await productModel.getProduct()
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService();
        const social = await socialModel.getSocial();
        const color = await colorModel.getColor();
        const size = await sizeModel.getSize();
        const pro = await productModel.getpageProduct((genId - 1)*2)

       
        res.render('viewproduct', {product:product,shop:shop, service:service, social:social, color:color,size:size, productt:productt, cart:cart,currentpage:genId})
    
    },
    createCart: async(req,res) => {
        const id = parseInt(req.params.ID);
        const userid = parseInt(req.session.userId);
        const quatity = req.body.quantity;
        console.log(userid)
       

        const create = await productModel.createCart(id,userid,quatity);
        
        res.redirect(`/product/${id}`)

    },
    remove: async(req,res) => {
        const userid = parseInt(req.session.userId);
        const productid = parseInt(req.params.ID);
        const cart = await productModel.remove(userid,productid)
         res.redirect(`/product/${productid}`)
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