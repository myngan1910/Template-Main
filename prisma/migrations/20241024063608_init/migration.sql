-- CreateTable
CREATE TABLE "coupon_oder" (
    "id" SERIAL NOT NULL,
    "oderid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "coupon_oder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupon_product" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "coupon_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coupon_oder" ADD CONSTRAINT "coupon_oder_oderid_fkey" FOREIGN KEY ("oderid") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupon_oder" ADD CONSTRAINT "coupon_oder_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupon_product" ADD CONSTRAINT "coupon_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupon_product" ADD CONSTRAINT "coupon_product_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
