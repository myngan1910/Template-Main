/*
  Warnings:

  - Added the required column `quantity` to the `user_coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_coupon" ADD COLUMN     "quantity" INTEGER NOT NULL;