const express = require('express')
const app = express()
const tagModel = require('../../model/adminModel/tag.js')
module.exports = {
    //TAGS
    getTag: async(req,res) =>{
        const dtPro = await tagModel.getTag();
        res.render('./tags/tag',{data:dtPro} )
    },
    getCreateTag: async(req,res) => {
        res.render('./tags/tagcre' )
    },
    postCreateTag:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await tagModel.postCreateTag(name);
        return res.redirect(`/admin/tag`)
      
    
    },
    getdetailTag: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await tagModel.getdetailTag(genId)
        return res.render("./tags/tagDetail", {tagDetail: data})
       
    },
    getdeleTag: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await tagModel.getdeleTag(genId)
        res.redirect(`/admin/tag`)
        
    },
    postTag: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await tagModel.postTag(genId,name)
        return res.redirect(`/admin/tag`)
    },

}