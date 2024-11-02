const express = require('express')
const app = express()
const typeModel = require('../../model/adminModel/typer.js')
const userModel = require('../../model/adminModel/user.js')
const couponModel = require('../../model/adminModel/coupon.js')

module.exports = {
    getTyper: async(req,res) => {
        const data = await typeModel.getTyper()
        res.render('./admin/typer/typer', {data:data, errorMessage: ''})
    },

    getCreateTyper: async(req,res) => {
        res.render('./admin/typer/typercre')
    },
    postCreateTyper: async(req,res) => {
        const name = req.body.name;
        const create = await typeModel.postCreateTyper(name);
        res.redirect(`/admin/typer`)
    },

    getdetailTyper: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await typeModel.getdetailTyper(genId)
        const user = await userModel.getUser()
        return res.render("./admin/typer/typerDetail", {typerDetail: data, user: user})
       
    },
    getdeleTyper: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await typeModel.getdeleTyper(genId)
        res.redirect(`/admin/typer`)
        
    },
    postTyper: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        let user = req.body.user;
        if(user == 'all'){
            user=[]
                for(let i=0;i< user.length; i++){
                    user.push(user[i].id)
                }
            }
           
          
        const viewPro =  await typeModel.postTyper(genId,name, user)
        return res.redirect(`/admin/typer`)
    },
}