-- CreateTable
CREATE TABLE "expense" (
    "index" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "expense_id_key" ON "expense"("id");

-- CreateIndex
CREATE INDEX "expense_id_idx" ON "expense"("id");
