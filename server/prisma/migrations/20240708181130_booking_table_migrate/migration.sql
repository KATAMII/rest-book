-- CreateTable
CREATE TABLE "booking_table" (
    "bookId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "roomsBooked" INTEGER NOT NULL,

    CONSTRAINT "booking_table_pkey" PRIMARY KEY ("bookId")
);

-- CreateIndex
CREATE UNIQUE INDEX "booking_table_email_key" ON "booking_table"("email");
