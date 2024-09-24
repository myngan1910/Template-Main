 const express = require('express')
 const app = express()
 const comModel = require('../../model/adminModel/comment.js')
 const blogModel = require('../../model/adminModel/blog.js')
 const userModel =  require('../../model/adminModel/user.js')
module.exports = {
    getComment: async(req,res) =>{
        const comment = await comModel.getComment();
        res.render('./comments/comment',{data:comment} )
    },
    createCom: async(req,res) => {
        const time = Date.now()
        const da = await blogModel.getBlog();
        const data = await userModel.getUser();
        res.render('./comments/commentcre',{datauser:data,datablog:da}  )
    },
    postCreateCom:  async(req,res) => {
      
        const content = req.body.content;
        const user = parseInt(req.session.userId);
        const blog = parseInt(req.params.ID);
        console.log(blog)

        const createPro =  await comModel.postCreateCom(content,user,blog);
        return res.redirect(`/admin/comment`)
      
    
    },
    getdetailCom: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const da = await blogModel.getBlog();
        const data = await userModel.getUser();
        const data1 =  await comModel.getdetailCom(genId)
        return res.render("./comments/comeDetail", {comeDetail: data1, datablog:da, datauser:data})
    },
    getdeleCom: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await comModel.getdeleCom(genId)
        res.redirect(`/admin/comment`)
        
    },
   
}