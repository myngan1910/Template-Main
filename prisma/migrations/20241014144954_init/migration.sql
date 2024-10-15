-- CreateTable
CREATE TABLE "like_product" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,

    CONSTRAINT "like_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "like_product" ADD CONSTRAINT "like_product_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like_product" ADD CONSTRAINT "like_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
