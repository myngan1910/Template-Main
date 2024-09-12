const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    checkimg: async (image,data) => {
        var img = null;
        if(image == undefined){
            if(data.length != 0){
               img = data.image || data.avata;

            }else {
               img = "assets/uploads/icon-04.png" 
            }

        }else {
            img = "assets/uploads/" + image.filename;
        }
        return img;
    }

}