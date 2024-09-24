-- CreateTable
CREATE TABLE "mkt_endow" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "discount" TEXT,
    "description" TEXT,

    CONSTRAINT "mkt_endow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "title" TEXT,
    "discount" TEXT,
    "description" TEXT,

    CONSTRAINT "promotion_pkey" PRIMARY KEY ("id")
);
