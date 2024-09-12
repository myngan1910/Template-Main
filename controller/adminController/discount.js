const express = require('express')
const app = express()
const disModel = require('../../model/adminModel/discount.js')
module.exports = {
    // DISCOUNT
    getDiscount: async(req,res) =>{
        const dtPro = await disModel.getDiscount();
        res.render('./discount/diss',{data:dtPro} )
    },
    getCreateDiscount: async(req,res) => {
        res.render('./discount/disscre' )
    },
    postCreateDiscount:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await disModel.postCreateDiscount(name);
        return res.redirect(`/admin/discount`)
      
    
    },
    getdetailDiscount: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await disModel.getdetailDiscount(genId)
        return res.render("./discount/dissDetail", {dissDetail: data})
       
    },
    getdeleDiscount: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await disModel.getdeleDiscount(genId)
        res.redirect(`/admin/discount`)
        
    },
    postDiscount: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await disModel.postDiscount(genId,name)
        return res.redirect(`/admin/discount`)
    },
}