const express = require('express')
const app = express()
const orderModel = require('../../model/adminModel/order.js')
const userModel = require('../../model/adminModel/user.js')
module.exports ={
    // ORDER
    getOrder: async(req,res) =>{
        const dtPro = await orderModel.getOrder();
        res.render('./admin/orders/order',{data:dtPro} )
    },
    getCreateOrder: async(req,res) => {
        const data1 = await userModel.getUser();

        res.render('./admin/orders/ordercre', {userid: data1} )
    },
    postCreateOrder:  async(req,res) => {
       
        const user = parseInt(req.body.userid);
       
        const createPro =  await orderModel.postCreateOrder(user);
        return res.redirect(`/admin/order`)
      
    
    },
    getdetailOrder: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await orderModel.getdetailOrder(genId)
        const data1 = await userModel.getUser();

        return res.render("./admin/orders/orderDetail", {orderDetail: data, userid: data1})
       
    },
    getdeleOrder: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await orderModel.getdeleOrder(genId)
        res.redirect(`/admin/order`)
        
    },
    postOrder: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const user = parseInt(req.body.userid);
        const viewPro =  await orderModel.postOrder(genId,user)
        return res.redirect(`/admin/order`)
    },

}