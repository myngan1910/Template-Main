const express = require('express')
const app = express()
const sizeModel = require('../../model/adminModel/size.js')
module.exports = {
     // SIZE
     getSize: async(req,res) =>{
        const dtPro = await sizeModel.getSize();
        res.render('./size/size',{data:dtPro} )
    },
    getCreateSize: async(req,res) => {
        res.render('./size/sizecre' )
    },
    postCreateSize:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await sizeModel.postCreateSize(name);
        return res.redirect(`/admin/size`)
      
    
    },
    getdetailSize: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await sizeModel.getdetailSize(genId)
        return res.render("./size/sizeDetail", {sizeDetail: data})
       
    },
    getdeleSize: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await sizeModel.getdeleSize(genId)
        res.redirect(`/admin/size`)
        
    },
    postSize: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await sizeModel.postSize(genId,name)
        return res.redirect(`/admin/size`)
    },

}