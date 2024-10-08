const express = require('express')
const app = express()
const adminModel = require('../model/adminModel.js')
module.exports = {
    getAdmin: async(req,res) =>{

        res.render('./admin/admin-index')
    },

   
   


  

    

     

    

    

    
     


     

  

   



    

    

    


    

    //COMMENT
    // getCom: async(req,res) =>{
    //     const comment = await ViewModel.getCom();
    //     res.render('./comments/comment',{data:comment} )
    // },
    // getcreateCom: async(req,res) => {
    //     const da = await ViewModel.getBlog();
    //     const data = await ViewModel.getUser();
    //     res.render('./comments/commentcre',{datauser:data,datablog:da}  )
    // },
    // postcreCom:  async(req,res) => {
    //     const content = req.body.content;
    //     const user = parseInt(req.session.userId);
    //     const post = parseInt(req.params.postid);
    //     console.log(user)
    //     const createPro =  await ViewModel.postCom(year,info,user,post);
    //     return res.redirect(`/admin/comment`)
      
    
    // },
    // getdetailCom: async(req,res) => {
       
    //     const genId = parseInt(req.params.ID);
    //     const data=  await ViewModel.detailCom(genId)
    //     return res.render("./comments/comeDetail", {comeDetail: data})
    // },
    // getdeleCom: async(req,res) => {
    //     const genId = parseInt(req.params.ID);
     
    //     const delePro =  await ViewModel.deleCom(genId)
    //     res.redirect(`/admin/comment`)
        
    // },
    // viewCom: async(req,res) => {
    //     const genId = parseInt(req.params.ID);
    //     const year = req.body.year;
    //     const info = req.body.information;
    //     const user = parseInt(req.body.userid);
    //     const post = parseInt(req.body.postid);
    //     const viewPro =  await ViewModel.viewCom(genId,year,info,user,post)
    //     return res.redirect(`/admin/comment`)
    // },
    
}