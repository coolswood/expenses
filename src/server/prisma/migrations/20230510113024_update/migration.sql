-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense" (
    "index" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_expense" ("amount", "description", "id", "index") SELECT "amount", "description", "id", "index" FROM "expense";
DROP TABLE "expense";
ALTER TABLE "new_expense" RENAME TO "expense";
CREATE UNIQUE INDEX "expense_id_key" ON "expense"("id");
CREATE INDEX "expense_id_idx" ON "expense"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
