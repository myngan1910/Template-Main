const express = require('express')
const app = express()
const couponModel = require('../../model/adminModel/coupon.js')
const classModel = require('../../model/adminModel/user_class.js')
const userModel = require('../../model/adminModel/user.js')
const typerModel = require('../../model/adminModel/typer.js')
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
        const user = await userModel.getUser()
        res.render('./admin/coupon/coupon',{data:dtPro, user:user} )
    },
    getDonate : async(req,res) => {
        const dtPro = await couponModel.getCoupon();
        const user = await userModel.getUser()
        res.render('./admin/coupon/donate',{coupon:dtPro, user:user} )
    },
    postDonate : async(req,res) => {
       let user = req.body.user;
       const coupon = parseInt(req.params.ID);
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
        const user = await userModel.getUser()
        res.render('./admin/coupon/couponcre',{classify:creat, user:user} )
    },
    postCreateCoupon: async(req, res) => {
        const name = req.body.name;
        const dis = generateDiscountCode();
        const quant = req.body.quantity;
        const price = req.body.pricemin;
        const buy = req.body.buymin;
        const accmin = req.body.acountmin;
        const accbuy = req.body.acountbuymin;
        const clas = req.body.classify;
        // const dataclas = await classModel.getUser_class()
        // if(clas == 'all'){
        //     clas=[]
        //         for(let i=0;i< dataclas.length; i++){
        //             clas.push(dataclas[i].id)
        //         }
        //     }
        const create = await couponModel.postCreateCoupon(name,dis,quant,price,buy,accmin,accbuy,clas)
        res.redirect(`/admin/coupon`)
    },
    getdetailCoupon: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data=  await couponModel.getdetailCoupon(genId)
        const data1 = await classModel.getUser_class();
        const user = await userModel.getUser()
        const typer = await typerModel.getTyper()

        return res.render("./admin/coupon/couponDetail", {couponDetail: data, classify: data1, user:user, typer:typer})
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
        const clas = req.body.classify;
        // const dataclas = await classModel.getUser_class()
        // if(clas == 'all'){
        //     clas=[]
        //         for(let i=0;i< dataclas.length; i++){
        //             clas.push(dataclas[i].id)
        //         }
        //     }
        const action = req.body.action;
        let user = req.body.user;
        let typer = req.body.typer;
        const datatyper = await typerModel.getTyper()
       const datauser=await userModel.getUser();
       if(user == 'all'){
        user=[]
            for(let i=0;i< datauser.length; i++){
                user.push(datauser[i].id)
            }
        }
        if(typer == 'all'){
            typer=[]
                for(let i=0;i< datatyper.length; i++){
                    typer.push(datatyper[i].id)
                }
            }
      
        const crea=await couponModel.postDonate(user,genId)
        const cretae = await couponModel.postTyper(typer,genId)
        const viewPro =  await couponModel.postCoupon(genId,name,dis,quant,price,buy,accmin,accbuy,clas,action)
        return res.redirect(`/admin/coupon`)
    },

    getActivate: async (req, res) => {
        const couponId = parseInt(req.params.ID);
        const act = await couponModel.getActivate(couponId)
        res.redirect(`/admin/coupon`); 

    },
    getDeactivate: async (req, res) => {
        const couponId = parseInt(req.params.ID);
        const act = await couponModel.getDeactivate(couponId)
        res.redirect(`/admin/coupon`); 

    },
}