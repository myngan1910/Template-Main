const express = require('express')
const app = express()
const userModel = require('../../model/adminModel/user.js')
const roleModel = require('../../model/adminModel/role.js')
const adminModel = require('../../model/adminModel.js')
const bcrypt = require('bcrypt')
const typerModel = require('../../model/adminModel/typer.js')

module.exports = {
     // USER
     getUser: async(req,res) =>{
        const dtPro = await  userModel.getUser();
        res.render('./admin/users/user',{data:dtPro} )
    },
    getCreateUser: async(req,res) => {
        const data = await  roleModel.getRole();

        res.render('./admin/users/usercre', {roleid: data}  )
    },
    postCreateUser:  async(req,res) => {
        const image = req.file ;
        const data = [];
        const avata = await adminModel.checkimg(image,data)
         const fname = req.body.fname;
         const lname = req.body.lname;
         const mail = req.body.mail;
         const phone = req.body.phone;
         const add1 = req.body.address1;
         const add2 = req.body.address2;
         const pass1 = req.body.pass;
         const pass =  bcrypt.hashSync(pass1,5)

         const pos = req.body.postal;
         const state = req.body.state;
         const con = req.body.contry;
         const com = req.body.company;
        const role = parseInt(req.body.roleid);
       
        const createPro =  await  userModel.postCreateUser(avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role);
        return res.redirect(`/admin/user`)
      
    
    },
    getdetailUser: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await  userModel.getdetailUser(genId)
        const data1 = await roleModel.getRole();
        const typer = await typerModel.getTyper()

        return res.render("./admin/users/userDetail", {userDetail: data, roleid: data1, typer:typer})
       
    },
    getdeleUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await userModel.getdeleUser(genId)
        res.redirect(`/admin/user`)
        
    },
    postUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const image = req.file;
        const data = await  userModel.getdetailUser(genId);
        const avata = await  adminModel.checkimg(image,data)
        const fname = req.body.fname;
         const lname = req.body.lname;
         const mail = req.body.mail;
         const phone = req.body.phone;
         const add1 = req.body.address1;
         const add2 = req.body.address2;
         
         const pos = req.body.postal;
         const state = req.body.state;
         const con = req.body.contry;
         const com = req.body.company;
        const role = parseInt(req.body.roleid);
        let typer = req.body.typer;

        const datatyper=await typerModel.getTyper();
        if(typer == 'all'){
         typer=[]
             for(let i=0;i< datatyper.length; i++){
                 typer.push(datatyper[i].id)
             }
         }
         
         const create = await typerModel.postUTyper(genId,typer)
        const viewPro =  await  userModel.postUser(genId,avata,fname,lname,mail,phone,add1,add2,pos,state,con,com,role)
        return res.redirect(`/admin/user`)
    },
}