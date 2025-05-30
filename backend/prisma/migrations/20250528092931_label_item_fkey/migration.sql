/*
  Warnings:

  - You are about to drop the column `itemId` on the `Label` table. All the data in the column will be lost.
  - You are about to drop the column `admins` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `members` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `_ListToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ListToProject" DROP CONSTRAINT "_ListToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_ListToProject" DROP CONSTRAINT "_ListToProject_B_fkey";

-- AlterTable
ALTER TABLE "Label" DROP COLUMN "itemId";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "admins",
DROP COLUMN "members";

-- DropTable
DROP TABLE "_ListToProject";

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
