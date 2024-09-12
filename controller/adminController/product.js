const express = require('express')
const app = express()
const productModel = require('../../model/adminModel/product.js')
module.exports = {
    getProduct: async(req,res) =>{
        const dtPro = await productModel.getProduct();
        res.render('./products/product',{data:dtPro} )
    },
    getCreateProduct: async(req,res) => {
        const data1 = await productModel.getUser_class();
        const data2 = await productModel.getDiscount();
        const data3 = await productModel.getSize();
        const data4 = await productModel.getColor()
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
        const createPro =  await productModel.postCreateProduct(name,price,des,clas,dis,ons,view, size, color);
        return res.redirect(`/admin/product`)
      
    
    },
    getdetailProduct: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data=  await productModel.getdetailProduct(genId)
        const data1 = await productModel.getUser_class();
        const data2 = await productModel.getDiscount();
        const data3 = await productModel.getSize();
        const data4 = await productModel.getColor()
        return res.render("./products/prodetail", {proDetail: data, dataclass: data1, datadis: data2,datasize: data3,datacolor: data4  })
       
    },
    getdeleProduct: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await productModel.getdeleProduct(genId)
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
        
        const viewPro =  await productModel.postProduct(genId,name,price,des,clas,dis,ons,view, size, color)
        return res.redirect(`/admin/product`)
    },
}