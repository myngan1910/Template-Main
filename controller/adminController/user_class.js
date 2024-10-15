const express = require('express')
const app = express()
const userModel = require('../../model/adminModel/user_class.js')
module.exports = {
    
    getUser_class: async(req,res) =>{
        const dtPro = await userModel.getUser_class();
        res.render('./admin/user-class/class',{data:dtPro,  errorMessage: ''} )
    },
    getCreateUser_class: async(req,res) => {
        res.render('./admin/user-class/classcre' )
    },
    postCreateUser_class:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await userModel.postCreateUser_class(name);
        return res.redirect(`/admin/user-class`)
      
    
    },
    getdetailUser_class: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await userModel.getdetailUser_class(genId)
        return res.render("./admin/user-class/classDetail", {classDetail: data})
       
    },
    getdeleUser_class: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await userModel.getdeleUser_class(genId)
        res.redirect(`/admin/user-class`)
        
    },
    postUser_class: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await userModel.postUser_class(genId,name)
        return res.redirect(`/admin/user-class`)
    },


}