const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const socialModel = require('../../model/adminModel/social.js')
const serviceModel = require('../../model/adminModel/service.js')
const productModel = require('../../model/adminModel/product.js')
const userModel = require('../../model/adminModel/user.js')
module.exports = {
    getCheck: async(req,res) => {
      const userid = parseInt(req.session.userId)
    
      const idproduct = req.body.product;
      const quant = req.body.quant;
      const quanlity =  []
      let cart
      let account = 0;
      let idoder
      if( userid >= 0) {
           cart = await productModel.getCart(userid);
           if(idproduct.length !=0 ){
            for(var i =0; i < idproduct.length; i++){
                  quanlity.push(req.body[`quant${idproduct[i]}`])
            }
           }
           const create = await productModel.postCheck(idproduct,quanlity, userid)
                idoder = await productModel.getOrder(userid)
      }
      const data=await productModel.getOdered(userid)
          for (var i=0; i < data.length; i++ ){
              account=account + parseInt(data[i].product.price)* parseInt(data[i].quanlity);

      }

      const shop = await shopModel.getShopInfo();   
      const social = await socialModel.getSocial();
      const service = await serviceModel.getService();
      const user = await userModel.getUserr(userid)
        res.render('./dashboard/checkout', {shop:shop, social:social, service:service,cart:cart,user:user, account:account, idorder:idoder[0].id})

    },
   
    getProfile: async(req,res) => {
      const userid = parseInt(req.session.userId)
      var cart 
      let account = 0;
      if( userid >= 0) {
           cart = await productModel.getCart(userid)
      }
      if(cart != undefined){
        for (var i=0; i < cart.length; i++ ){
            account=account + parseInt(cart[i].product.price)* parseInt(cart[i].quanlity);

        }
    }
      const shop = await shopModel.getShopInfo();
      const social = await socialModel.getSocial();
      const service = await serviceModel.getService();
      const user = await userModel.getUserr(userid)

        res.render('./dashboard/profile', {shop:shop, social:social, service:service,cart:cart,user:user,account:account})

    },

    postProfile: async(req,res) => {
      const userid = parseInt(req.session.userId)
    
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
       const currentUser = await userModel.getdetailUser(userid);
       const avata =  currentUser.avata;
      const pass =  currentUser.pass;
      const role =  currentUser.roleid;
      const viewPro =  await  userModel.postProfile(userid,avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role)
      return res.redirect(`/profile`)
    },
    postCheck: async(req,res) => {
      const userid = parseInt(req.session.userId)
      const idorder = req.params.id;
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
       const currentUser = await userModel.getdetailUser(userid);
       const avata =  currentUser.avata;
      const pass =  currentUser.pass;
      const role =  currentUser.roleid;
      const viewPro =  await  userModel.postProfile(userid,avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role)
      const update = await userModel.getOrder(idorder,userid)
      return res.redirect(`/profile`)
    }

}