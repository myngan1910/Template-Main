const express = require('express')
const app = express()
const couponModel = require('../../model/adminModel/coupon.js')
const classModel = require('../../model/adminModel/user_class.js')
const userModel = require('../../model/adminModel/user.js')
function generateDiscountCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Chỉ gồm chữ in hoa và số
    var code = '';
    var length = 10; // Độ dài mã giảm giá là 10 ký tự
    
    for (var i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return code;
}
module.exports = {
    getCoupon : async(req,res) => {
        const dtPro = await couponModel.getCoupon();
        res.render('./admin/coupon/coupon',{data:dtPro} )
    },
    getDonate : async(req,res) => {
        const dtPro = await couponModel.getCoupon();
        const user = await userModel.getUser()
        res.render('./admin/coupon/donate',{coupon:dtPro, user:user} )
    },
    postDonate : async(req,res) => {
       let user = req.body.user;
       const coupon = req.body.coupon;
       const datauser=await userModel.getUser();
       if(user == 'all'){
        user=[]
            for(let i=0;i< datauser.length; i++){
                user.push(datauser[i].id)
            }
        }
        const crea=await couponModel.postDonate(user,coupon)
        res.redirect('/admin/coupon' )
    },

    getCreateCoupon: async(req,res) => {
        const creat = await classModel.getUser_class()
        res.render('./admin/coupon/couponcre',{classify:creat} )
    },
    postCreateCoupon: async(req, res) => {
        const name = req.body.name;
        const dis = generateDiscountCode();
        const quant = req.body.quantity;
        const price = req.body.pricemin;
        const buy = req.body.buymin;
        const accmin = req.body.acountmin;
        const accbuy = req.body.acountbuymin;
        let clas = req.body.classify;
        const dataclas = await classModel.getUser_class()
        if(clas == 'all'){
            clas=[]
                for(let i=0;i< dataclas.length; i++){
                    clas.push(dataclas[i].id)
                }
            }
        const action = 0;
        const create = await couponModel.postCreateCoupon(name,dis,quant,price,buy,accmin,accbuy,clas, action)
        res.redirect(`/admin/coupon`)
    },
    getdetailCoupon: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data=  await couponModel.getdetailCoupon(genId)
        const data1 = await classModel.getUser_class();

        return res.render("./admin/coupon/couponDetail", {couponDetail: data, classify: data1})
    },
    getdeleCoupon: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await couponModel.getdeleCoupon(genId)
        res.redirect(`/admin/coupon`)
        
    },
    postCoupon: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const dis = generateDiscountCode();
        const quant = req.body.quantity;
        const price = req.body.pricemin;
        const buy = req.body.buymin;
        const accmin = req.body.acountmin;
        const accbuy = req.body.acountbuymin;
        let clas = req.body.classify;
        const dataclas = await classModel.getUser_class()
        if(clas == 'all'){
            clas=[]
                for(let i=0;i< dataclas.length; i++){
                    clas.push(dataclas[i].id)
                }
            }
        const action = 0;
        const viewPro =  await couponModel.postCoupon(genId,name,dis,quant,price,buy,accmin,accbuy,clas,action)
        return res.redirect(`/admin/coupon`)
    },
}