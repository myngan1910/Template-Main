-- CreateTable
CREATE TABLE "coupon" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "discount" TEXT,
    "quantity" TEXT,
    "coupon" TEXT,
    "action" INTEGER NOT NULL,
    "pricemin" TEXT,
    "buymin" TEXT,
    "acountmin" TEXT,
    "acountbuymin" TEXT,

    CONSTRAINT "coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_coupon" (
    "id" SERIAL NOT NULL,
    "classid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "class_coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_coupon" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "user_coupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "class_coupon" ADD CONSTRAINT "class_coupon_classid_fkey" FOREIGN KEY ("classid") REFERENCES "user_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_coupon" ADD CONSTRAINT "class_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_coupon" ADD CONSTRAINT "user_coupon_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_coupon" ADD CONSTRAINT "user_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
