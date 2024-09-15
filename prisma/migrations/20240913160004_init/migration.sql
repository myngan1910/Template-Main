/*
  Warnings:

  - You are about to drop the column `link` on the `image_product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "image_product" DROP COLUMN "link",
ADD COLUMN     "image" TEXT;
