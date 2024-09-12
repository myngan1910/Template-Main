const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const adminModel = require('../../model/adminModel.js')
module.exports = {
   

    // SHOP-INFO
    getShopInfo: async(req,res) =>{
        const dtShop = await shopModel.getShopInfo();
        res.render('./shops/shop', {data:dtShop})
    },
    getCreateShop: async(req,res) =>{
        res.render('./shops/shopcre')
    },
    postCreateShop:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const logo = await adminModel.checkimg(image,data)
        const mail = req.body.mail;
        const phone = req.body.phone;
        const add = req.body.address;
        const des = req.body.description;
        
        const create =  await shopModel.postCreateShop(name,logo,mail,phone,add,des);
        return res.redirect(`/admin/shop`)
      
    
    },
    getDetailShop: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await shopModel.getDetailShop(genId)
        return res.render("./shops/shopDetail", {shopDetail: detail})

    },
    getDeleteShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await shopModel.getDeleteShop(genId)
        res.redirect(`/admin/shop`)
        
    },
    postGetShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = req.file;
        const data = await shopModel.getDetailShop(genId);
        const logo = await shopModel.checkimg(image,data)
        const mail = req.body.mail;
        const phone = req.body.phone;
        const add = req.body.address;
        const des = req.body.description;
        const viewPro =  await shopModel. postGetShop(genId,name,logo,mail,phone,add,des)
        return res.redirect(`/admin/shop`)
    },}