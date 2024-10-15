/*
  Warnings:

  - The primary key for the `order_product` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "order_product" DROP CONSTRAINT "order_product_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "order_product_pkey" PRIMARY KEY ("id");
