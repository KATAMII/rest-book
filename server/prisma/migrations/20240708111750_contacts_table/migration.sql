-- CreateTable
CREATE TABLE "contact_table" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "contact_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_table_email_key" ON "contact_table"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contact_table_phone_key" ON "contact_table"("phone");
