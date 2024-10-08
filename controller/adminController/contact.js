const express = require('express')
const app = express()
const contactModel = require('../../model/adminModel/contact.js')
module.exports = {
    // CONTACT
    getCtc: async(req,res) =>{
        const data = await contactModel .getCtc();
        res.render('./admin/contact/ctc',{data:data} )
    },
    
    postCreateCtc:  async(req,res) => {
        const name = req.body.name;
        const mail = req.body.mail;
        const subject = req.body.subject;
        const phone  = req.body.phone;
        const mess = req.body.message;
        const createCtc =  await contactModel .postCreateCtc(name,subject,mail,phone,mess);
          
        return res.redirect(`/`)
        
       
       
      
    
    },
    getdetailCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const detailCtc =  await contactModel .getdetailCtc(genId)
        return res.render('./admin/contact/ctcDetail', {ctcDetail: detailCtc})
    },
    getdeleCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await contactModel .getdeleCtc(genId)
        res.redirect(`/admin/contact`)
        
    },
    postCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const subject = req.body.subject;
        const mail = req.body.mail;
        const phone  = req.body.phone;
        const mess = req.body.message;
       
        const viewCt =  await contactModel .postCtc(genId,name,subject,mail,phone,mess)
        return res.redirect(`/admin/contact`)
    },

}