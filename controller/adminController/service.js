const express = require('express')
const app = express()
const serviceModel =  require('../../model/adminModel/service.js')
const adminModel = require('../../model/adminModel.js')
module.exports = {
    // SERVICE
    getService: async(req,res) =>{
        const dtShop = await  serviceModel.getService();
        res.render('./service/service', {data:dtShop})
    },
    getCreateService: async(req,res) =>{
        res.render('./service/servicecre')
    },
    postCreateService:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const icon = await adminModel.checkimg(image,data)
       
        const des = req.body.description;
        
        const create =  await  serviceModel.postCreateService(name,icon,des);
        return res.redirect(`/admin/service`)
      
    
    },
    getDetailService: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await  serviceModel.getDetailService(genId)
        return res.render("./service/serviceDetail", {serviceDetail: detail})

    },
    getDeleteService: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await  serviceModel.getDeleteService(genId)
        res.redirect(`/admin/service`)
        
    },
    postGetService: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = req.file;
        const data = await  serviceModel.getDetailService(genId);
        const icon = await  serviceModel.checkimg(image,data)
        
        const des = req.body.description;
        const viewPro =  await  serviceModel. postGetService(genId,name,icon,des)
        return res.redirect(`/admin/shop`)
    },

}