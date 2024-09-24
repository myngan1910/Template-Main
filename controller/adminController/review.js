const express = require('express')
const app = express()
const reviewModel = require('../../model/adminModel/review.js')
const userModel = require('../../model/adminModel/user.js')
const productModel = require('../../model/adminModel/product.js')
module.exports = {
     // REVIEW
     getRev: async(req,res) =>{
        const dtPro = await reviewModel.getRev();
        res.render('./reviews/review',{data:dtPro} )
    },
    getCreateRev: async(req,res) => {
        const data = await userModel.getUser();
        const data1 = await productModel.getProduct();

        res.render('./reviews/revcre', {userid: data, productid: data1}  )
    },
    postCreateRev:  async(req,res) => {
        
         const content = req.body.content;
         const evl = '';
         
         const user = parseInt(req.session.userId);
        const product = parseInt(req.params.ID);

        const createPro =  await reviewModel.postCreateRev(content, evl, user, product);
        return res.redirect(`/admin/review`)
      
    
    },
    getdetailRev: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        console.log(genId)
        const data=  await reviewModel.getdetailRev(genId)
        const data2 = await userModel.getUser();
        const data1 = await productModel.getProduct();
       
        return res.render("./reviews/revDetail", {revDetail: data, userid: data2, productid: data1})
       
    },
    getdeleRev: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await reviewModel.getdeleRev(genId)
        res.redirect(`/admin/review`)
        
    },
    postRev: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const content = req.body.content;
        const evl = req.body.evaluate;
       const user = parseInt(req.body.userid);
       const product = parseInt(req.body.productid);
        const viewPro =  await reviewModel.postRev(genId,content, evl, user, product)
        return res.redirect(`/admin/review`)
    },

}