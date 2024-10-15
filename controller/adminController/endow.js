const express = require('express')
const app = express()
const endowModel =  require('../../model/adminModel/endow.js')
const adminModel = require('../../model/adminModel.js')
module.exports = {
    // ENDOW
    getEndow: async(req,res) =>{
        const dtShop = await  endowModel.getEndow();
        res.render('./admin/endow/endow', {data:dtShop,  errorMessage: ''})
    },
    getCreateEndow: async(req,res) =>{
        res.render('./admin/endow/endowcre')
    },
    postCreateEndow:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const img = await adminModel.checkimg(image,data)
        const dis = req.body.discount;
        const des = req.body.description;
        
        const create =  await  endowModel.postCreateEndow(name,img,dis,des);
        return res.redirect(`/admin/endow`)
      
    
    },
    getDetailEndow: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await  endowModel.getDetailEndow(genId)
        return res.render("./admin/endow/endowDetail", {endowDetail: detail})

    },
    getDeleteEndow: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await  endowModel.getDeleteEndow(genId)
        res.redirect(`/admin/endow`)
        
    },
    postGetEndow: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = req.file;
        const data = await  endowModel.getDetailEndow(genId);
        const img = await  adminModel.checkimg(image,data)
        const dis = req.body.discount;
        const des = req.body.description;
        const viewPro =  await  endowModel. postGetEndow(genId,name,img,dis,des)
        return res.redirect(`/admin/endow`)
    },

}