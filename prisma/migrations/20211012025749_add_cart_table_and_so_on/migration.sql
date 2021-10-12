/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cart_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `reviews_user_id_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `address` VARCHAR(100) NOT NULL,
    ADD COLUMN `cart_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `reviews`;

-- CreateTable
CREATE TABLE `product_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_korean` VARCHAR(40) NOT NULL,
    `sales_price` INTEGER NOT NULL,
    `original_price` INTEGER NOT NULL,
    `earn_point` INTEGER NOT NULL,
    `thumb_url` VARCHAR(2000) NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `name_korean` VARCHAR(40) NOT NULL,
    `thumb_url` VARCHAR(2000) NOT NULL,
    `sales_price` INTEGER NOT NULL,
    `original_price` INTEGER NOT NULL,
    `earn_point` INTEGER NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `storage_temps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storageType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cart_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `name_korean` VARCHAR(40) NOT NULL,
    `thumb_url` VARCHAR(2000) NOT NULL,
    `sales_price` INTEGER NOT NULL,
    `original_price` INTEGER NOT NULL,
    `earn_point` INTEGER NOT NULL,
    `storage_temp` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_storage_type_fkey` FOREIGN KEY (`storage_type`) REFERENCES `storage_temps`(`storageType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_user_id_address_fkey` FOREIGN KEY (`user_id`, `address`) REFERENCES `users`(`id`, `address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_name_korean_thumb_url_sales_price_original_price_earn_fkey` FOREIGN KEY (`name_korean`, `thumb_url`, `sales_price`, `original_price`, `earn_point`) REFERENCES `product_details`(`name_korean`, `thumb_url`, `sales_price`, `original_price`, `earn_point`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_storage_type_fkey` FOREIGN KEY (`storage_type`) REFERENCES `storage_temps`(`storageType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_address_fkey` FOREIGN KEY (`user_id`, `address`) REFERENCES `users`(`id`, `address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_name_korean_thumb_url_sales_price_original_price_ear_fkey` FOREIGN KEY (`name_korean`, `thumb_url`, `sales_price`, `original_price`, `earn_point`) REFERENCES `product_details`(`name_korean`, `thumb_url`, `sales_price`, `original_price`, `earn_point`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_storage_temp_fkey` FOREIGN KEY (`storage_temp`) REFERENCES `storage_temps`(`storageType`) ON DELETE RESTRICT ON UPDATE CASCADE;
