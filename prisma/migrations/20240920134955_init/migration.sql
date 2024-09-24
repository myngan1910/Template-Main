-- CreateTable
CREATE TABLE "user_product" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "quanlity" TEXT,

    CONSTRAINT "user_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
