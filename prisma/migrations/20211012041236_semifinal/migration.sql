/*
  Warnings:

  - You are about to alter the column `created_at` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(20)`.
  - Added the required column `account` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cart_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mandatory_policy_agreed` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketing_policy_agreed` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personal_information_policy_agreed` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reviews` MODIFY `created_at` TIMESTAMP NOT NULL,
    MODIFY `updated_at` TIMESTAMP;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `account` VARCHAR(50) NOT NULL,
    ADD COLUMN `address` VARCHAR(100) NOT NULL,
    ADD COLUMN `birthday` DATE NOT NULL,
    ADD COLUMN `cart_id` INTEGER NOT NULL,
    ADD COLUMN `created_at` TIMESTAMP NOT NULL,
    ADD COLUMN `gender` VARCHAR(20) NOT NULL,
    ADD COLUMN `mandatory_policy_agreed` BOOLEAN NOT NULL,
    ADD COLUMN `marketing_policy_agreed` BOOLEAN NOT NULL,
    ADD COLUMN `password` VARCHAR(100) NOT NULL,
    ADD COLUMN `personal_information_policy_agreed` BOOLEAN NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(15) NOT NULL,
    MODIFY `name` VARCHAR(20) NOT NULL;

-- CreateTable
CREATE TABLE `reviews_likes` (
    `reviewId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`reviewId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_korean` VARCHAR(40) NOT NULL,
    `thumb_url` VARCHAR(2000) NOT NULL,
    `short_description` VARCHAR(200) NOT NULL,
    `original_price` INTEGER NOT NULL,
    `discount_rate` INTEGER NOT NULL,
    `sales_price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `earn_point` INTEGER NOT NULL,
    `sale_unit` VARCHAR(10) NOT NULL,
    `weight_or_capacity` VARCHAR(20) NOT NULL,
    `delivery_type` VARCHAR(20) NOT NULL,
    `origin_country` VARCHAR(10) NOT NULL,
    `package_type` VARCHAR(20) NOT NULL,
    `package_message` VARCHAR(200) NOT NULL,
    `notification` VARCHAR(200) NOT NULL,
    `allergen_information` VARCHAR(200) NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,
    `products_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `additional_informations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `additional_information` VARCHAR(200) NOT NULL,
    `product_detail_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `descriptions_introductions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `introductions_image` VARCHAR(200) NOT NULL,
    `introductions_title` VARCHAR(200) NOT NULL,
    `introductions_name` VARCHAR(200) NOT NULL,
    `introductions_article` VARCHAR(200) NOT NULL,
    `product_detail_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `descriptions_informations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `information_image` VARCHAR(200) NOT NULL,
    `product_name` VARCHAR(20) NOT NULL,
    `certification` VARCHAR(20) NOT NULL,
    `packaging_unit` VARCHAR(20) NOT NULL,
    `matter_note` VARCHAR(100) NOT NULL,
    `producer` VARCHAR(100) NOT NULL,
    `how_to_store` VARCHAR(100) NOT NULL,
    `origin_country` VARCHAR(20) NOT NULL,
    `service_call` VARCHAR(40) NOT NULL,
    `produce_date` VARCHAR(100) NOT NULL,
    `product_detail_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `product_detail_id` INTEGER NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `storage_temporarys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storageType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `product_detail_id` INTEGER NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,
    `cart_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_details` ADD CONSTRAINT `products_details_storage_type_fkey` FOREIGN KEY (`storage_type`) REFERENCES `storage_temporarys`(`storageType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_details` ADD CONSTRAINT `products_details_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `additional_informations` ADD CONSTRAINT `additional_informations_product_detail_id_fkey` FOREIGN KEY (`product_detail_id`) REFERENCES `products_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `descriptions_introductions` ADD CONSTRAINT `descriptions_introductions_product_detail_id_fkey` FOREIGN KEY (`product_detail_id`) REFERENCES `products_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `descriptions_informations` ADD CONSTRAINT `descriptions_informations_product_detail_id_fkey` FOREIGN KEY (`product_detail_id`) REFERENCES `products_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_product_detail_id_fkey` FOREIGN KEY (`product_detail_id`) REFERENCES `products_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_storage_type_fkey` FOREIGN KEY (`storage_type`) REFERENCES `storage_temporarys`(`storageType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_product_detail_id_fkey` FOREIGN KEY (`product_detail_id`) REFERENCES `products_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_storage_type_fkey` FOREIGN KEY (`storage_type`) REFERENCES `storage_temporarys`(`storageType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
