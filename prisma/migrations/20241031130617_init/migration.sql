/*
  Warnings:

  - You are about to drop the column `quantity` on the `user_coupon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_coupon" DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "typer" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "typer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_user" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "typerid" INTEGER NOT NULL,

    CONSTRAINT "type_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_coupon" (
    "id" SERIAL NOT NULL,
    "typerid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "type_coupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "type_user" ADD CONSTRAINT "type_user_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_user" ADD CONSTRAINT "type_user_typerid_fkey" FOREIGN KEY ("typerid") REFERENCES "typer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_coupon" ADD CONSTRAINT "type_coupon_typerid_fkey" FOREIGN KEY ("typerid") REFERENCES "typer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_coupon" ADD CONSTRAINT "type_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
