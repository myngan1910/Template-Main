const express = require('express')
const app = express()
const img_proModel = require('../../model/adminModel/img_pro.js')
const productModel = require('../../model/adminModel/product.js')
module.exports = {
     // IMG-PRODUCT
     getImg: async(req,res) =>{
        const dtPro = await img_proModel.getImg();
        res.render('./image_product/img',{data:dtPro} )
    },
    getCreateImg: async(req,res) => {
        const data = await productModel.getProduct();

        res.render('./image_product/imgcre', {productid: data} )
    },
    postCreateImg:  async(req,res) => {
         const link = req.body.link;
        const pro = parseInt(req.body.productid);
       
        const createPro =  await img_proModel.postCreateImg(link, pro);
        return res.redirect(`/admin/img-pro`)
      
    
    },
    getdetailImg: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await img_proModel.getdetailImg(genId)
        const data1 = await productModel.getProduct();

        return res.render("./image_product/imgDetail", {imgDetail: data, productid: data1})
       
    },
    getdeleImg: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await img_proModel.getdeleImg(genId)
        res.redirect(`/admin/img-pro`)
        
    },
    postImg: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const link = req.body.link;
        const pro = parseInt(req.body.productid);
        const viewPro =  await img_proModel.postImg(genId,link, pro)
        return res.redirect(`/admin/img-pro`)
    },
}