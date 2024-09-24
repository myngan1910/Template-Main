const express = require('express')
const app = express()
const proModel =  require('../../model/adminModel/promotion.js')
const adminModel = require('../../model/adminModel.js')
module.exports = {
    // ENDOW
    getPro: async(req,res) =>{
        const dtShop = await  proModel.getPro();
        res.render('./promotion/promo', {data:dtShop})
    },
    getCreatePro: async(req,res) =>{
        res.render('./promotion/promocre')
    },
    postCreatePro:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const img = await adminModel.checkimg(image,data)
        const dis = req.body.discount;
        const title = req.body.title;
        
        const create =  await  proModel.postCreatePro(name,img,dis,title);
        return res.redirect(`/admin/promo`)
      
    
    },
    getDetailPro: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await  proModel.getDetailPro(genId)
        return res.render("./promotion/promoDetail", {promoDetail: detail})

    },
    getDeletePro: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await  proModel.getDeletePro(genId)
        res.redirect(`/admin/promo`)
        
    },
    postGetPro: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = req.file;
        const data = await  proModel.getDetailPro(genId);
        const img = await  adminModel.checkimg(image,data)
        const dis = req.body.discount;
        const title = req.body.title;
        const viewPro =  await  proModel. postGetPro(genId,name,img,dis,title)
        return res.redirect(`/admin/promo`)
    },

}