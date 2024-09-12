const express = require('express')
const app = express()
const colorModel = require('../../model/adminModel/color.js')
module.exports = {
    
    getColor: async(req,res) =>{
        const dtPro = await colorModel.getColor();
        res.render('./color/color',{data:dtPro} )
    },
    getCreateColor: async(req,res) => {
        res.render('./color/colorcre' )
    },
    postCreateColor:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await colorModel.postCreateColor(name);
        return res.redirect(`/admin/color`)
      
    
    },
    getdetailColor: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await colorModel.getdetailColor(genId)
        return res.render("./color/colorDetail", {colorDetail: data})
       
    },
    getdeleColor: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await colorModel.getdeleColor(genId)
        res.redirect(`/admin/color`)
        
    },
    postColor: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await colorModel.postColor(genId,name)
        return res.redirect(`/admin/color`)
    },

}