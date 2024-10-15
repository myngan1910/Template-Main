const express = require('express')
const app = express()
const blogModel = require('../../model/adminModel/blog.js')
const cateModel = require('../../model/adminModel/cate.js')
const tagModel = require('../../model/adminModel/tag.js')
const shopModel = require('../../model/adminModel/shop.js')
const serviceModel = require('../../model/adminModel/service.js')
const socialModel = require('../../model/adminModel/social.js')
const productModel = require('../../model/adminModel/product.js')
const comModel = require('../../model/adminModel/comment.js')
module.exports = {
    getblog: async(req,res) => {
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
        
        const blog = await blogModel.getBlogg(genId);
        const cate = await cateModel.getCate();
        const tag = await tagModel.getTag();
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService()
        const social = await socialModel.getSocial()
        const blogg =  await blogModel.getBlog();
        

        res.render('./dashboard/blog-single-sidebar', {blog:blog,cate:cate,tag:tag,shop:shop, service:service, social:social, cart:cart, blogg:blogg, account:account})

    },

    getViewBlog: async(req,res)=>{
        const userid = parseInt(req.session.userId)
         const id = parseInt(req.params.ID)||1;
         console.log(userid)
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
        
        const cate = await cateModel.getCate();
        const tag = await tagModel.getTag();
        const shop = await shopModel.getShopInfo();
        const service = await serviceModel.getService()
        const social = await socialModel.getSocial()
        const blog =  await blogModel.getpageBlog((id - 1)*2);
       
        res.render('./dashboard/viewBlog', {blog:blog,cate:cate,tag:tag,shop:shop, service:service, social:social, cart:cart,currentpage:id, account:account })

    },
    postCom:  async(req,res) => {
        
        const content = req.body.content;
        const user = parseInt(req.session.userId);
        const blog = parseInt(req.params.ID);

        const createPro =  await comModel.postCreateCom(content,user,blog);
        return res.redirect(`/blog/${blog}`)
      
    
    },
}