const express = require('express')
const app = express()
const cateModel = require('../../model/adminModel/cate.js')
module.exports = {
    //CATEGORIES
    getCate: async(req,res) =>{
        const dtPro = await cateModel.getCate();
        res.render('./admin/categories/cate',{data:dtPro} )
    },
    getCreateCate: async(req,res) => {
        res.render('./admin/categories/catecre' )
    },
    postCreateCate:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await cateModel.postCreateCate(name);
        return res.redirect(`/admin/categories`)
      
    
    },
    getdetailCate: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await cateModel.getdetailCate(genId)
        return res.render("./admin/categories/cateDetail", {cateDetail: data})
       
    },
    getdeleCate: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await cateModel.getdeleCate(genId)
        res.redirect(`/admin/categories`)
        
    },
    postCate: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await cateModel.postCate(genId,name)
        return res.redirect(`/admin/categories`)
    },

}