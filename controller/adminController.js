const express = require('express')
const app = express()
const adminModel = require('../model/adminModel.js')
module.exports = {
    getAdmin: async(req,res) =>{

        res.render('index1')
    },

    // SHOP-INFO
    getShopInfo: async(req,res) =>{
        const dtShop = await adminModel.getShopInfo();
        res.render('./shops/shop', {data:dtShop})
    },
    getCreateShop: async(req,res) =>{
        res.render('./shops/shopcre')
    },
    postCreateShop:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const logo = await adminModel.checkimg(image,data)
        const mail = req.body.mail;
        const phone = req.body.phone;
        const add = req.body.address;
        const des = req.body.description;
        
        const create =  await adminModel.postCreateShop(name,logo,mail,phone,add,des);
        return res.redirect(`/admin/shop`)
      
    
    },
    getDetailShop: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await adminModel.getDetailShop(genId)
        return res.render("./shops/shopDetail", {shopDetail: detail})

    },
    getDeleteShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await adminModel.getDeleteShop(genId)
        res.redirect(`/admin/shop`)
        
    },
    postGetShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = req.file;
        const data = await adminModel.getDetailShop(genId);
        const logo = await adminModel.checkimg(image,data)
        const mail = req.body.mail;
        const phone = req.body.phone;
        const add = req.body.address;
        const des = req.body.description;
        const viewPro =  await adminModel. postGetShop(genId,name,logo,mail,phone,add,des)
        return res.redirect(`/admin/shop`)
    },

    //SOCIAL
    getSocial: async(req,res) =>{
        const data = await adminModel.getSocial();
        res.render('./social/social',{data:data} )
    },
    getCreateSocial: async(req,res) => {
        res.render('./social/socialcre' )
    },
    postCreSocial:  async(req,res) => {
        const name = req.body.name;
        const link = req.body.link;
        console.log(name)
        const createCtc =  await adminModel.postCreSocial(name,link);
          
        return res.redirect(`/admin/social`)
    },
    getdetailSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data =  await adminModel.getdetailSocial(genId)
        return res.render("./social/socialDetail", {socialDetail: data})
    },
    getdeleSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await adminModel.getdeleSocial(genId)
        res.redirect(`/admin/social`)
        
    },
    postSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const link = req.body.link;
        console.log(name)
        const viewCt =  await adminModel.postSocial(genId,name,link)
        return res.redirect(`/admin/social`)
    },


    //ROLE
    getRole: async(req,res) =>{
        const dtPro = await adminModel.getRole();
        res.render('./role/role',{data:dtPro} )
    },
    getCreateRole: async(req,res) => {
        res.render('./role/rolecre' )
    },
    postCreateRole:  async(req,res) => {
        const position = req.body.possion;
       
        
        const createPro =  await adminModel.postCreateRole(position);
        return res.redirect(`/admin/role`)
      
    
    },
    getdetailRole: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailRole(genId)
        return res.render("./role/roleDetail", {roleDetail: data})
       
    },
    getdeleRole: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleRole(genId)
        res.redirect(`/admin/role`)
        
    },
    postRole: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const position = req.body.possion;
        const viewPro =  await adminModel.postRole(genId,position)
        return res.redirect(`/admin/role`)
    },

    // SERVICE
    getService: async(req,res) =>{
        const dtShop = await adminModel.getService();
        res.render('./service/service', {data:dtShop})
    },
    getCreateService: async(req,res) =>{
        res.render('./service/servicecre')
    },
    postCreateService:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const icon = await adminModel.checkimg(image,data)
       
        const des = req.body.description;
        
        const create =  await adminModel.postCreateService(name,icon,des);
        return res.redirect(`/admin/service`)
      
    
    },
    getDetailService: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await adminModel.getDetailService(genId)
        return res.render("./service/serviceDetail", {serviceDetail: detail})

    },
    getDeleteService: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await adminModel.getDeleteService(genId)
        res.redirect(`/admin/service`)
        
    },
    postGetService: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = req.file;
        const data = await adminModel.getDetailService(genId);
        const icon = await adminModel.checkimg(image,data)
        
        const des = req.body.description;
        const viewPro =  await adminModel. postGetService(genId,name,icon,des)
        return res.redirect(`/admin/shop`)
    },

// CONTACT
    getCtc: async(req,res) =>{
        const data = await adminModel.getCtc();
        res.render('./contact/ctc',{data:data} )
    },
    
    postCreateCtc:  async(req,res) => {
        const name = req.body.name;
        const mail = req.body.mail;
        const subject = req.body.subject;
        const phone  = req.body.phone;
        const mess = req.body.message;
        const createCtc =  await adminModel.postCreateCtc(name,subject,mail,phone,mess);
          
        return res.redirect(`/`)
        
       
       
      
    
    },
    getdetailCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const detailCtc =  await adminModel.getdetailCtc(genId)
        return res.render('./contact/ctcDetail', {ctcDetail: detailCtc})
    },
    getdeleCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await adminModel.getdeleCtc(genId)
        res.redirect(`/admin/contact`)
        
    },
    postCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const subject = req.body.subject;
        const mail = req.body.mail;
        const phone  = req.body.phone;
        const mess = req.body.message;
       
        const viewCt =  await adminModel.postCtc(genId,name,subject,mail,phone,mess)
        return res.redirect(`/admin/contact`)
    },

     //CATEGORIES
     getCate: async(req,res) =>{
        const dtPro = await adminModel.getCate();
        res.render('./categories/cate',{data:dtPro} )
    },
    getCreateCate: async(req,res) => {
        res.render('./categories/catecre' )
    },
    postCreateCate:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await adminModel.postCreateCate(name);
        return res.redirect(`/admin/categories`)
      
    
    },
    getdetailCate: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailCate(genId)
        return res.render("./categories/cateDetail", {cateDetail: data})
       
    },
    getdeleCate: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleCate(genId)
        res.redirect(`/admin/categories`)
        
    },
    postCate: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await adminModel.postCate(genId,name)
        return res.redirect(`/admin/categories`)
    },


    //TAGS
    getTag: async(req,res) =>{
        const dtPro = await adminModel.getTag();
        res.render('./tags/tag',{data:dtPro} )
    },
    getCreateTag: async(req,res) => {
        res.render('./tags/tagcre' )
    },
    postCreateTag:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await adminModel.postCreateTag(name);
        return res.redirect(`/admin/tag`)
      
    
    },
    getdetailTag: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailTag(genId)
        return res.render("./tags/tagDetail", {tagDetail: data})
       
    },
    getdeleTag: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleTag(genId)
        res.redirect(`/admin/tag`)
        
    },
    postTag: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await adminModel.postTag(genId,name)
        return res.redirect(`/admin/tag`)
    },


    //COLOR
    getColor: async(req,res) =>{
        const dtPro = await adminModel.getColor();
        res.render('./color/color',{data:dtPro} )
    },
    getCreateColor: async(req,res) => {
        res.render('./color/colorcre' )
    },
    postCreateColor:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await adminModel.postCreateColor(name);
        return res.redirect(`/admin/color`)
      
    
    },
    getdetailColor: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailColor(genId)
        return res.render("./color/colorDetail", {colorDetail: data})
       
    },
    getdeleColor: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleColor(genId)
        res.redirect(`/admin/color`)
        
    },
    postColor: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await adminModel.postColor(genId,name)
        return res.redirect(`/admin/color`)
    },


     // SIZE
     getSize: async(req,res) =>{
        const dtPro = await adminModel.getSize();
        res.render('./size/size',{data:dtPro} )
    },
    getCreateSize: async(req,res) => {
        res.render('./size/sizecre' )
    },
    postCreateSize:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await adminModel.postCreateSize(name);
        return res.redirect(`/admin/size`)
      
    
    },
    getdetailSize: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailSize(genId)
        return res.render("./size/sizeDetail", {sizeDetail: data})
       
    },
    getdeleSize: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleSize(genId)
        res.redirect(`/admin/size`)
        
    },
    postSize: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await adminModel.postSize(genId,name)
        return res.redirect(`/admin/size`)
    },

     // DISCOUNT
     getDiscount: async(req,res) =>{
        const dtPro = await adminModel.getDiscount();
        res.render('./discount/diss',{data:dtPro} )
    },
    getCreateDiscount: async(req,res) => {
        res.render('./discount/disscre' )
    },
    postCreateDiscount:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await adminModel.postCreateDiscount(name);
        return res.redirect(`/admin/discount`)
      
    
    },
    getdetailDiscount: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailDiscount(genId)
        return res.render("./discount/dissDetail", {dissDetail: data})
       
    },
    getdeleDiscount: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleDiscount(genId)
        res.redirect(`/admin/discount`)
        
    },
    postDiscount: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await adminModel.postDiscount(genId,name)
        return res.redirect(`/admin/discount`)
    },


     // USER-CLASS
     getUser_class: async(req,res) =>{
        const dtPro = await adminModel.getUser_class();
        res.render('./user-class/class',{data:dtPro} )
    },
    getCreateUser_class: async(req,res) => {
        res.render('./user-class/classcre' )
    },
    postCreateUser_class:  async(req,res) => {
        const name = req.body.name;
       
        
        const createPro =  await adminModel.postCreateUser_class(name);
        return res.redirect(`/admin/user-class`)
      
    
    },
    getdetailUser_class: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailUser_class(genId)
        return res.render("./user-class/classDetail", {classDetail: data})
       
    },
    getdeleUser_class: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleUser_class(genId)
        res.redirect(`/admin/user-class`)
        
    },
    postUser_class: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const viewPro =  await adminModel.postUser_class(genId,name)
        return res.redirect(`/admin/user-class`)
    },


    // PRODUCT
    getProduct: async(req,res) =>{
        const dtPro = await adminModel.getProduct();
        res.render('./products/product',{data:dtPro} )
    },
    getCreateProduct: async(req,res) => {
        const data1 = await adminModel.getUser_class();
        const data2 = await adminModel.getDiscount();
        const data3 = await adminModel.getSize();
        const data4 = await adminModel.getColor()
        res.render('./products/productcre',{dataclass:data1,datadis: data2 , datasize: data3, datacolor: data4} )
    },
    postCreateProduct:  async(req,res) => {
        const name = req.body.name;
        const price = req.body.price;
        const des = req.body.description;
        const clas = parseInt(req.body.classifid);
        const dis  = parseInt(req.body.discountid);
        const ons  = parseInt(req.body.onsale);
        const view  = parseInt(req.body.view);
        const size = req.body.size;
        const color = req.body.color;
        const createPro =  await adminModel.postCreateProduct(name,price,des,clas,dis,ons,view, size, color);
        return res.redirect(`/admin/product`)
      
    
    },
    getdetailProduct: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailProduct(genId)
        const data1 = await adminModel.getUser_class();
        const data2 = await adminModel.getDiscount();
        const data3 = await adminModel.getSize();
        const data4 = await adminModel.getColor()
        return res.render("./products/prodetail", {proDetail: data, dataclass: data1, datadis: data2,datasize: data3,datacolor: data4  })
       
    },
    getdeleProduct: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleProduct(genId)
        res.redirect(`/admin/product`)
        
    },
    postProduct: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const price = req.body.price;
        const des = req.body.description;
        const clas = parseInt(req.body.classifid);
        const dis  = parseInt(req.body.discountid);
        const ons  = parseInt(req.body.onsale);
        const view  = parseInt(req.body.view);
        const size = req.body.size;
        const color = req.body.color;
        
        const viewPro =  await adminModel.postProduct(genId,name,price,des,clas,dis,ons,view, size, color)
        return res.redirect(`/admin/product`)
    },

    // BLOG
    getBlog: async(req,res) =>{
        const dtPro = await adminModel.getBlog();
        res.render('./blogs/blog',{data:dtPro} )
    },
    getCreateBlog: async(req,res) => {
        const data = await adminModel.getUser();
        const data1 = await adminModel.getCate()
        const data2 = await adminModel.getTag()
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
        const createPro =  await adminModel.postCreateBlog(imagee,time,des,dess,cre,user, tag, cate);
        return res.redirect(`/admin/blog`)
      
    
    },
    getdetailBlog: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailBlog(genId)
        const data1 = await adminModel.getUser();
        const data3 = await adminModel.getCate()
        const data2 = await adminModel.getTag()
        return res.render("./blogs/blogDetail", {blogDetail: data, userid: data1,cate:data3, tag:data2})
       
    },
    getdeleBlog: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleBlog(genId)
        res.redirect(`/admin/blog`)
        
    },
    postBlog: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const image = req.file;
        const data = await adminModel.getdetailBlog(genId);
        const imagee = await adminModel.checkimg(image,data)
        const time = req.body.time;
        const des = req.body.description1;
        const dess = req.body.description2;
        const cre = req.body.create;
        const user = parseInt(req.body.userid);
        const tag = req.body.tag;
        const cate = req.body.cate;
        const viewPro =  await adminModel.postBlog(genId,imagee,time,des,dess,cre,user, tag, cate)
        return res.redirect(`/admin/blog`)
    },




    // ORDER
    getOrder: async(req,res) =>{
        const dtPro = await adminModel.getOrder();
        res.render('./orders/order',{data:dtPro} )
    },
    getCreateOrder: async(req,res) => {
        const data1 = await adminModel.getUser();

        res.render('./orders/ordercre', {userid: data1} )
    },
    postCreateOrder:  async(req,res) => {
       
        const user = parseInt(req.body.userid);
       
        const createPro =  await adminModel.postCreateOrder(user);
        return res.redirect(`/admin/order`)
      
    
    },
    getdetailOrder: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailOrder(genId)
        const data1 = await adminModel.getUser();

        return res.render("./orders/orderDetail", {orderDetail: data, userid: data1})
       
    },
    getdeleOrder: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleOrder(genId)
        res.redirect(`/admin/order`)
        
    },
    postOrder: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const user = parseInt(req.body.userid);
        const viewPro =  await adminModel.postOrder(genId,user)
        return res.redirect(`/admin/order`)
    },


     // IMG-PRODUCT
     getImg: async(req,res) =>{
        const dtPro = await adminModel.getImg();
        res.render('./image_product/img',{data:dtPro} )
    },
    getCreateImg: async(req,res) => {
        const data = await adminModel.getProduct();

        res.render('./image_product/imgcre', {productid: data} )
    },
    postCreateImg:  async(req,res) => {
         const link = req.body.link;
        const pro = parseInt(req.body.productid);
       
        const createPro =  await adminModel.postCreateImg(link, pro);
        return res.redirect(`/admin/img-pro`)
      
    
    },
    getdetailImg: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailImg(genId)
        const data1 = await adminModel.getProduct();

        return res.render("./image_product/imgDetail", {imgDetail: data, productid: data1})
       
    },
    getdeleImg: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleImg(genId)
        res.redirect(`/admin/img-pro`)
        
    },
    postImg: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const link = req.body.link;
        const pro = parseInt(req.body.productid);
        const viewPro =  await adminModel.postImg(genId,link, pro)
        return res.redirect(`/admin/img-pro`)
    },

     // USER
     getUser: async(req,res) =>{
        const dtPro = await adminModel.getUser();
        res.render('./users/user',{data:dtPro} )
    },
    getCreateUser: async(req,res) => {
        const data = await adminModel.getRole();

        res.render('./users/usercre', {roleid: data}  )
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
         const pass = req.body.pass;
         const pos = req.body.postal;
         const state = req.body.state;
         const con = req.body.contry;
         const com = req.body.company;
        const role = parseInt(req.body.roleid);
       
        const createPro =  await adminModel.postCreateUser(avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role);
        return res.redirect(`/admin/user`)
      
    
    },
    getdetailUser: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailUser(genId)
        const data1 = await adminModel.getRole();

        return res.render("./users/userDetail", {userDetail: data, roleid: data1})
       
    },
    getdeleUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleUser(genId)
        res.redirect(`/admin/user`)
        
    },
    postUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const image = req.file;
        const data = await adminModel.getdetailUser(genId);
        const avata = await adminModel.checkimg(image,data)
        const fname = req.body.fname;
         const lname = req.body.lname;
         const mail = req.body.mail;
         const phone = req.body.phone;
         const add1 = req.body.address1;
         const add2 = req.body.address2;
         const pass = req.body.pass;
         const pos = req.body.postal;
         const state = req.body.state;
         const con = req.body.contry;
         const com = req.body.company;
        const role = parseInt(req.body.roleid);
        const viewPro =  await adminModel.postUser(genId,avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role)
        return res.redirect(`/admin/user`)
    },


     // REVIEW
     getRev: async(req,res) =>{
        const dtPro = await adminModel.getRev();
        res.render('./reviews/review',{data:dtPro} )
    },
    getCreateRev: async(req,res) => {
        const data = await adminModel.getUser();
        const data1 = await adminModel.getProduct();

        res.render('./reviews/revcre', {userid: data, productid: data1}  )
    },
    postCreateRev:  async(req,res) => {
        
         const content = req.body.content;
         const evl = req.body.evaluate;
         
        const user = parseInt(req.body.userid);
        const product = parseInt(req.body.productid);

        const createPro =  await adminModel.postCreateRev(content, evl, user, product);
        return res.redirect(`/admin/review`)
      
    
    },
    getdetailRev: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await adminModel.getdetailUser(genId)
        const data2 = await adminModel.getUser();
        const data1 = await adminModel.getProduct();

        return res.render("./reviews/revDetail", {revDetail: data, userid: data2, productid: data1})
       
    },
    getdeleRev: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await adminModel.getdeleRev(genId)
        res.redirect(`/admin/review`)
        
    },
    postRev: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const content = req.body.content;
        const evl = req.body.evaluate;
       const user = parseInt(req.body.userid);
       const product = parseInt(req.body.productid);
        const viewPro =  await adminModel.postRev(genId,content, evl, user, product)
        return res.redirect(`/admin/review`)
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