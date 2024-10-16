const express = require('express')
const app = express()
const socialModel = require('../../model/adminModel/social.js')
module.exports = {
    getSocial: async(req,res) =>{
        const data = await socialModel.getSocial();
        res.render('./admin/social/social',{data:data,  errorMessage: ''} )
    },
    getCreateSocial: async(req,res) => {
        res.render('./admin/social/socialcre' )
    },
    postCreSocial:  async(req,res) => {
        const name = req.body.name;
        const link = req.body.link;
        console.log(name)
        const createCtc =  await socialModel.postCreSocial(name,link);
          
        return res.redirect(`/admin/social`)
    },
    getdetailSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data =  await socialModel.getdetailSocial(genId)
        return res.render("./admin/social/socialDetail", {socialDetail: data})
    },
    getdeleSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await socialModel.getdeleSocial(genId)
        res.redirect(`/admin/social`)
        
    },
    postSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const link = req.body.link;
        console.log(name)
        const viewCt =  await socialModel.postSocial(genId,name,link)
        return res.redirect(`/admin/social`)
    },
}