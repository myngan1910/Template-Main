const express = require('express')
const app = express()
const roleModel = require('../../model/adminModel/role.js')
module.exports = {
      //ROLE
      getRole: async(req,res) =>{
        const dtPro = await roleModel.getRole();
        res.render('./admin/role/role',{data:dtPro} )
    },
    getCreateRole: async(req,res) => {
        res.render('./admin/role/rolecre' )
    },
    postCreateRole:  async(req,res) => {
        const position = req.body.possion;
       
        
        const createPro =  await roleModel.postCreateRole(position);
        return res.redirect(`/admin/role`)
      
    
    },
    getdetailRole: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await roleModel.getdetailRole(genId)
        return res.render("./admin/role/roleDetail", {roleDetail: data})
       
    },
    getdeleRole: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await roleModel.getdeleRole(genId)
        res.redirect(`/admin/role`)
        
    },
    postRole: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const position = req.body.possion;
        const viewPro =  await roleModel.postRole(genId,position)
        return res.redirect(`/admin/role`)
    },
}