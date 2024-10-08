const express = require('express')
const app = express()
const img_proModel = require('../../model/adminModel/img_pro.js')
const productModel = require('../../model/adminModel/product.js')
const adminModel = require('../../model/adminModel.js')
module.exports = {
     // IMG-PRODUCT
     getImg: async(req,res) =>{
        const dtPro = await img_proModel.getImg();
        res.render('./admin/image_product/img',{data:dtPro} )
    },
    getCreateImg: async(req,res) => {
        const data = await productModel.getProduct();

        res.render('./admin/image_product/imgcre', {productid: data} )
    },
    postCreateImg:  async(req,res) => {
        const image = req.files;
        const data = [];
        const img =[]
        for(var i=0; i<image.length; i++){

        
        img.push( await adminModel.checkimg(image[i],data))
    }
        const pro = parseInt(req.body.productid);
        const createPro =  await img_proModel.postCreateImg(img, pro);
        return res.redirect(`/admin/img-pro`)
      
    
    },
    getdetailImg: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await img_proModel.getdetailImg(genId)
        const data1 = await productModel.getProduct();
        console.log(data)

        return res.render("./admin/image_product/imgDetail", {imgDetail: data, productid: data1})
       
    },
    getdeleImg: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await img_proModel.getdeleImg(genId)
        res.redirect(`/admin/img-pro`)
        
    },
    postImg: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const image = req.files;
        const data = await img_proModel.getdetailImg(genId);
        const img = []
        for(var i=0; i<image; i++){
            img.push( await adminModel.checkimg(image[i],data))
        }
        const pro = parseInt(req.body.productid);
        const viewPro =  await img_proModel.postImg(genId,img, pro)
        return res.redirect(`/admin/img-pro`)
    },
}