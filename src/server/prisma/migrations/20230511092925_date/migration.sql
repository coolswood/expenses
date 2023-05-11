-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense" (
    "index" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_expense" ("amount", "date", "description", "id", "index") SELECT "amount", "date", "description", "id", "index" FROM "expense";
DROP TABLE "expense";
ALTER TABLE "new_expense" RENAME TO "expense";
CREATE UNIQUE INDEX "expense_id_key" ON "expense"("id");
CREATE INDEX "expense_id_idx" ON "expense"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
