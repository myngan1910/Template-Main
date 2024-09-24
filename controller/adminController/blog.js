const express = require('express')
const app = express()
const blogModel = require('../../model/adminModel/blog.js')
const userModel = require('../../model/adminModel/user.js')
const adminModel = require('../../model/adminModel.js')
const tagModel = require('../../model//adminModel/tag.js')
const cateModel = require('../../model/adminModel/cate.js')
module.exports={
     // BLOG
     getBlog: async(req,res) =>{
        const dtPro = await blogModel.getBlog();
        res.render('./blogs/blog',{data:dtPro} )
    },
    getCreateBlog: async(req,res) => {
        const data = await userModel.getUser();
        const data1 = await cateModel.getCate()
        const data2 = await tagModel.getTag()
        res.render('./blogs/blogcre', {userid: data, cate:data1, tag:data2 } )
    },
    postCreateBlog:  async(req,res) => {
        const image = req.file ;
        const data = [];
        const imagee = await adminModel.checkimg(image,data)
        const time = req.body.time;
        const des = req.body.description1;
        const dess = req.body.description2;
        const cre = req.body.create;
        const user = parseInt(req.body.userid);
       const tag = req.body.tag;
       const cate = req.body.cate;
        const createPro =  await blogModel.postCreateBlog(imagee,time,des,dess,cre,user, tag, cate);
        return res.redirect(`/admin/blog`)
      
    
    },
    getdetailBlog: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await blogModel.getdetailBlog(genId)
        const data1 = await userModel.getUser();
        const data3 = await cateModel.getCate()
        const data2 = await tagModel.getTag()
        return res.render("./blogs/blogDetail", {blogDetail: data, userid: data1,cate:data3, tag:data2})
       
    },
    getdeleBlog: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await blogModel.getdeleBlog(genId)
        res.redirect(`/admin/blog`)
        
    },
    postBlog: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const image = req.file;
        const data = await blogModel.getdetailBlog(genId);
        const imagee = await adminModel.checkimg(image,data)
        const time = req.body.time;
        const des = req.body.description1;
        const dess = req.body.description2;
        const cre = req.body.create;
        const user = parseInt(req.body.userid);
        const tag = req.body.tag;
        const cate = req.body.cate;
        const viewPro =  await blogModel.postBlog(genId,imagee,time,des,dess,cre,user, tag, cate)
        return res.redirect(`/admin/blog`)
    },
    

}