-- CreateTable
CREATE TABLE "shop_info" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "logo" TEXT,
    "mail" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "description" TEXT,

    CONSTRAINT "shop_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "link" TEXT,

    CONSTRAINT "social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "subject" TEXT,
    "mail" TEXT,
    "message" TEXT,
    "phone" TEXT,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "icon" TEXT,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "possion" TEXT,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "avata" TEXT,
    "fname" TEXT,
    "lname" TEXT,
    "mail" TEXT,
    "phone" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "pass" TEXT,
    "postal" TEXT,
    "contry" TEXT,
    "state" TEXT,
    "company" TEXT,
    "roleid" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "userid" INTEGER NOT NULL,
    "blogid" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "evaluate" TEXT,
    "userid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "userrid" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "time" TEXT,
    "description1" TEXT,
    "description2" TEXT,
    "creater" TEXT,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs_categories" (
    "blogid" INTEGER NOT NULL,
    "categorieid" INTEGER NOT NULL,

    CONSTRAINT "blogs_categories_pkey" PRIMARY KEY ("blogid","categorieid")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs_tags" (
    "blogid" INTEGER NOT NULL,
    "tagid" INTEGER NOT NULL,

    CONSTRAINT "blogs_tags_pkey" PRIMARY KEY ("blogid","tagid")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" TEXT,
    "description" TEXT,
    "classifid" INTEGER NOT NULL,
    "discountid" INTEGER NOT NULL,
    "onsale" INTEGER NOT NULL,
    "view" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image_product" (
    "id" SERIAL NOT NULL,
    "link" TEXT,
    "productid" INTEGER NOT NULL,

    CONSTRAINT "image_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_class" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "user_class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discounts" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "size_product" (
    "productid" INTEGER NOT NULL,
    "sizeid" INTEGER NOT NULL,

    CONSTRAINT "size_product_pkey" PRIMARY KEY ("productid","sizeid")
);

-- CreateTable
CREATE TABLE "size" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color_product" (
    "productid" INTEGER NOT NULL,
    "colorid" INTEGER NOT NULL,

    CONSTRAINT "color_product_pkey" PRIMARY KEY ("productid","colorid")
);

-- CreateTable
CREATE TABLE "color" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_product" (
    "orderid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "quanlity" TEXT,

    CONSTRAINT "order_product_pkey" PRIMARY KEY ("orderid","productid")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleid_fkey" FOREIGN KEY ("roleid") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_blogid_fkey" FOREIGN KEY ("blogid") REFERENCES "blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userrid_fkey" FOREIGN KEY ("userrid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs_categories" ADD CONSTRAINT "blogs_categories_blogid_fkey" FOREIGN KEY ("blogid") REFERENCES "blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs_categories" ADD CONSTRAINT "blogs_categories_categorieid_fkey" FOREIGN KEY ("categorieid") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs_tags" ADD CONSTRAINT "blogs_tags_blogid_fkey" FOREIGN KEY ("blogid") REFERENCES "blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs_tags" ADD CONSTRAINT "blogs_tags_tagid_fkey" FOREIGN KEY ("tagid") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_classifid_fkey" FOREIGN KEY ("classifid") REFERENCES "user_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_discountid_fkey" FOREIGN KEY ("discountid") REFERENCES "discounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_product" ADD CONSTRAINT "image_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "size_product" ADD CONSTRAINT "size_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "size_product" ADD CONSTRAINT "size_product_sizeid_fkey" FOREIGN KEY ("sizeid") REFERENCES "size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "color_product" ADD CONSTRAINT "color_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "color_product" ADD CONSTRAINT "color_product_colorid_fkey" FOREIGN KEY ("colorid") REFERENCES "color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
