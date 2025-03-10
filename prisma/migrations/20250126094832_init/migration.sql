-- CreateTable
CREATE TABLE "Requirement" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "communicationChannel" TEXT NOT NULL,
    "callTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requirement_pkey" PRIMARY KEY ("id")
);
