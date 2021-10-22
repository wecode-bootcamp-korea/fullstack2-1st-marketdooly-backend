-- MySQL dump 10.13  Distrib 8.0.26, for macos10.15 (x86_64)
--
-- Host: localhost    Database: marketdooly
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('7f42fb8f-8eed-49e4-8730-dfe040652e13','7c352d697d34fd5d284d298b7ece909cf656c8685de186ddce4636952d2ff7b3','2021-10-14 17:20:28.787','20211014172028_added_category_event',NULL,NULL,'2021-10-14 17:20:28.510',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `header` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_order` int DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1633483205.jpg','/','slider',NULL,NULL,1,'2021-10-15 03:13:24.000'),(2,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1633539282.jpg','/','slider',NULL,NULL,2,'2021-10-15 03:13:24.000'),(3,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1634085424.jpg','/','slider',NULL,NULL,3,'2021-10-15 03:13:24.000'),(4,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1633506913.jpg','/','slider',NULL,NULL,4,'2021-10-15 03:13:24.000'),(5,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1633562452.jpg','/','slider',NULL,NULL,5,'2021-10-15 03:13:24.000'),(6,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1633486884.jpg','/','slider',NULL,NULL,6,'2021-10-15 03:13:30.000'),(7,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1628583839.jpg','/','slider',NULL,NULL,7,'2021-10-15 03:13:30.000'),(8,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1621561009.jpg','/','slider',NULL,NULL,8,'2021-10-15 03:13:30.000'),(9,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1583112495.jpg','/','slider',NULL,NULL,9,'2021-10-15 03:13:30.000'),(10,'main','https://img-cf.kurly.com/shop/data/main/1/pc_img_1633501694.jpg','/','slider',NULL,NULL,10,'2021-10-15 03:13:36.000'),(11,'bar','https://i.imgur.com/LLS8kDr.jpg','/','static',NULL,NULL,1,'2021-10-15 03:13:36.000'),(12,'bar','https://i.imgur.com/9wyLyD2.jpg','/','static',NULL,NULL,1,'2021-10-15 03:13:36.000'),(13,'bar','https://i.imgur.com/RjLSynO.jpg','/','static',NULL,NULL,1,'2021-10-15 03:13:36.000');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `carts_user_id_fkey` (`user_id`),
  KEY `carts_product_id_fkey` (`product_id`),
  CONSTRAINT `carts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `carts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (45,1,2,4),(46,1,3,1),(47,1,4,1),(48,1,5,7),(49,1,7,1),(50,1,10,1);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'채소','2021-10-15 12:29:53.989',NULL),(2,'과일·견과·쌀','2021-10-15 12:29:53.989',NULL),(3,'수산·해산·건어물','2021-10-15 12:29:53.989',NULL),(4,'정육·계란','2021-10-15 12:29:53.989',NULL),(5,'국·반찬·메인요리','2021-10-15 12:29:53.989',NULL),(6,'샐러드·간편식','2021-10-15 12:29:53.989',NULL),(7,'면·양념·오일','2021-10-15 12:29:53.989',NULL),(8,'생수·음료·우유·커피','2021-10-15 12:29:53.989',NULL),(9,'간식·과자·떡','2021-10-15 12:29:53.989',NULL),(10,'베이커리·치즈·델리','2021-10-15 12:29:53.989',NULL),(11,'건강식품','2021-10-15 12:29:53.989',NULL),(12,'생활용품·리빙·캠핑','2021-10-15 12:29:53.989',NULL),(13,'스킨케어·메이크업','2021-10-15 12:29:53.989',NULL),(14,'헤어·바디·구강','2021-10-15 12:29:53.989',NULL),(15,'주방용품','2021-10-15 12:29:53.989',NULL),(16,'가전제품','2021-10-15 12:29:53.989',NULL),(17,'베이비·키즈','2021-10-15 12:29:53.989',NULL),(18,'반려동물','2021-10-15 12:29:53.989',NULL),(19,'컬리의 추천','2021-10-15 12:29:53.989',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_event`
--

DROP TABLE IF EXISTS `category_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `event_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_event_product_id_fkey` (`product_id`),
  KEY `category_event_event_id_fkey` (`event_id`),
  KEY `category_event_category_id_fkey` (`category_id`),
  CONSTRAINT `category_event_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `category_event_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `category_event_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_event`
--

LOCK TABLES `category_event` WRITE;
/*!40000 ALTER TABLE `category_event` DISABLE KEYS */;
INSERT INTO `category_event` VALUES (1,1,17,1),(2,2,17,1),(3,3,17,1),(4,4,17,1),(5,5,17,1),(6,6,17,1),(7,7,17,1),(8,8,17,1),(9,9,17,1),(10,10,17,1),(11,5,17,2),(12,4,17,2),(13,3,17,2),(14,2,17,2),(15,1,17,2),(16,6,17,2),(17,7,17,2),(18,8,17,2),(19,9,17,2),(20,10,17,2),(21,7,17,3),(22,8,17,3),(23,9,17,3),(24,4,17,3),(25,5,17,3),(26,6,17,3),(27,10,17,3),(28,1,17,3),(29,2,17,3),(30,3,17,3),(31,10,17,4),(32,9,17,4),(33,8,17,4),(34,7,17,4),(35,6,17,4),(36,5,17,4),(37,4,17,4),(38,3,17,4),(39,2,17,4),(40,1,17,4),(41,1,17,5),(42,2,17,5),(43,3,17,5),(44,4,17,5),(45,5,17,5),(46,6,17,5),(47,7,17,5),(48,8,17,5),(49,9,17,5),(50,10,17,5),(51,5,17,6),(52,4,17,6),(53,3,17,6),(54,2,17,6),(55,1,17,6),(56,6,17,6),(57,7,17,6),(58,8,17,6),(59,9,17,6),(60,10,17,6),(61,7,17,7),(62,8,17,7),(63,9,17,7),(64,4,17,7),(65,5,17,7),(66,6,17,7),(67,10,17,7),(68,1,17,7),(69,2,17,7),(70,3,17,7),(71,10,17,8),(72,9,17,8),(73,8,17,8),(74,7,17,8),(75,6,17,8),(76,5,17,8),(77,4,17,8),(78,3,17,8),(79,2,17,8),(80,1,17,8);
/*!40000 ALTER TABLE `category_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` int NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `header` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_order` int DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `events_product_id_fkey` (`product_id`),
  CONSTRAINT `events_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'suggestion',1,'carousel','이 상품 어때요?',NULL,1,'2021-10-15 02:25:51.000'),(2,'suggestion',2,'carousel','이 상품 어때요?',NULL,2,'2021-10-15 02:25:51.000'),(3,'suggestion',3,'carousel','이 상품 어때요?',NULL,3,'2021-10-15 02:25:51.000'),(4,'suggestion',4,'carousel','이 상품 어때요?',NULL,4,'2021-10-15 02:25:51.000'),(5,'suggestion',5,'carousel','이 상품 어때요?',NULL,5,'2021-10-15 02:25:51.000'),(6,'suggestion',6,'carousel','이 상품 어때요?',NULL,6,'2021-10-15 02:25:51.000'),(7,'suggestion',7,'carousel','이 상품 어때요?',NULL,7,'2021-10-15 02:25:51.000'),(8,'suggestion',8,'carousel','이 상품 어때요?',NULL,8,'2021-10-15 02:25:51.000'),(9,'suggestion',9,'carousel','이 상품 어때요?',NULL,9,'2021-10-15 02:25:51.000'),(10,'suggestion',10,'carousel','이 상품 어때요?',NULL,10,'2021-10-15 02:25:51.000'),(11,'special_price',1,'hold','특가/혜택 >','도드람 한돈 최대 14% 할인',1,'2021-10-15 02:25:55.000'),(12,'special_price',2,'hold','특가/혜택 >','Kurly\'s 간편식 최대 20% 할인',2,'2021-10-15 02:25:55.000'),(13,'special_price',3,'hold','특가/혜택 >','밴엔제리스 파인트 증정 EVENT',3,'2021-10-15 02:25:55.000'),(14,'special_price',1,'hold','특가/혜택 >','건강하고 안전한 우리 한돈',1,'2021-10-15 02:25:55.000'),(15,'special_price',2,'hold','특가/혜택 >','컬리답게 만든',2,'2021-10-15 02:25:55.000'),(16,'special_price',3,'hold','특가/혜택 >','컬리 BEST 아이스크림 구매 시',3,'2021-10-15 02:25:55.000'),(17,'mds_pick',1,'carousel','MD의 추천 >',NULL,1,'2021-10-15 02:26:01.000'),(18,'mds_pick',2,'carousel','MD의 추천 >',NULL,2,'2021-10-15 02:26:01.000'),(19,'mds_pick',3,'carousel','MD의 추천 >',NULL,3,'2021-10-15 02:26:01.000'),(20,'mds_pick',4,'carousel','MD의 추천 >',NULL,4,'2021-10-15 02:26:01.000'),(21,'mds_pick',5,'carousel','MD의 추천 >',NULL,5,'2021-10-15 02:26:01.000'),(22,'mds_pick',6,'carousel','MD의 추천 >',NULL,6,'2021-10-15 02:26:01.000'),(23,'mds_pick',7,'carousel','MD의 추천 >',NULL,7,'2021-10-15 02:26:01.000'),(24,'mds_pick',8,'carousel','MD의 추천 >',NULL,8,'2021-10-15 02:26:01.000'),(25,'mds_pick',9,'carousel','MD의 추천 >',NULL,9,'2021-10-15 02:26:01.000'),(26,'mds_pick',10,'carousel','MD의 추천 >',NULL,10,'2021-10-15 02:26:01.000'),(27,'most_popular',1,'carousel','지금 가장 핫한 상품 >',NULL,1,'2021-10-15 02:26:06.000'),(28,'most_popular',2,'carousel','지금 가장 핫한 상품 >',NULL,2,'2021-10-15 02:26:06.000'),(29,'most_popular',3,'carousel','지금 가장 핫한 상품 >',NULL,3,'2021-10-15 02:26:06.000'),(30,'most_popular',4,'carousel','지금 가장 핫한 상품 >',NULL,4,'2021-10-15 02:26:06.000'),(31,'most_popular',5,'carousel','지금 가장 핫한 상품 >',NULL,5,'2021-10-15 02:26:06.000'),(32,'most_popular',6,'carousel','지금 가장 핫한 상품 >',NULL,6,'2021-10-15 02:26:06.000'),(33,'most_popular',7,'carousel','지금 가장 핫한 상품 >',NULL,7,'2021-10-15 02:26:06.000'),(34,'most_popular',8,'carousel','지금 가장 핫한 상품 >',NULL,8,'2021-10-15 02:26:06.000'),(35,'most_popular',9,'carousel','지금 가장 핫한 상품 >',NULL,9,'2021-10-15 02:26:06.000'),(36,'most_popular',10,'carousel','지금 가장 핫한 상품 >',NULL,10,'2021-10-15 02:26:06.000'),(37,'kitchen',1,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,1,'2021-10-15 02:26:10.000'),(38,'kitchen',2,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,2,'2021-10-15 02:26:10.000'),(39,'kitchen',3,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,3,'2021-10-15 02:26:10.000'),(40,'kitchen',4,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,4,'2021-10-15 02:26:10.000'),(41,'kitchen',5,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,5,'2021-10-15 02:26:10.000'),(42,'kitchen',6,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,6,'2021-10-15 02:26:10.000'),(43,'kitchen',7,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,7,'2021-10-15 02:26:10.000'),(44,'kitchen',8,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,8,'2021-10-15 02:26:10.000'),(45,'kitchen',9,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,9,'2021-10-15 02:26:10.000'),(46,'kitchen',10,'carousel','똑똑한 요리 비법, 주방가전 특가 >',NULL,10,'2021-10-15 02:26:10.000'),(47,'last_call',1,'carousel','마감세일 >',NULL,1,'2021-10-15 02:26:17.000'),(48,'last_call',2,'carousel','마감세일 >',NULL,2,'2021-10-15 02:26:17.000'),(49,'last_call',3,'carousel','마감세일 >',NULL,3,'2021-10-15 02:26:17.000'),(50,'last_call',4,'carousel','마감세일 >',NULL,4,'2021-10-15 02:26:17.000'),(51,'last_call',5,'carousel','마감세일 >',NULL,5,'2021-10-15 02:26:17.000'),(52,'last_call',6,'carousel','마감세일 >',NULL,6,'2021-10-15 02:26:17.000'),(53,'last_call',7,'carousel','마감세일 >',NULL,7,'2021-10-15 02:26:17.000'),(54,'last_call',8,'carousel','마감세일 >',NULL,8,'2021-10-15 02:26:17.000'),(55,'last_call',9,'carousel','마감세일 >',NULL,9,'2021-10-15 02:26:17.000'),(56,'last_call',10,'carousel','마감세일 >',NULL,10,'2021-10-15 02:26:17.000'),(57,'lowest_price',1,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',1,'2021-10-15 02:27:22.000'),(58,'lowest_price',2,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',2,'2021-10-15 02:27:22.000'),(59,'lowest_price',3,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',3,'2021-10-15 02:27:22.000'),(60,'lowest_price',4,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',4,'2021-10-15 02:27:22.000'),(61,'lowest_price',5,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',5,'2021-10-15 02:27:22.000'),(62,'lowest_price',6,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',6,'2021-10-15 02:27:27.000'),(63,'lowest_price',7,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',7,'2021-10-15 02:27:27.000'),(64,'lowest_price',8,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',8,'2021-10-15 02:27:27.000'),(65,'lowest_price',9,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',9,'2021-10-15 02:27:27.000'),(66,'lowest_price',10,'carousel','365일 최저가 도전 >','최저가 도전, 365일 언제나 알뜰하게',10,'2021-10-15 02:27:27.000'),(67,'large_capacity',1,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',1,'2021-10-15 02:27:31.000'),(68,'large_capacity',2,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',2,'2021-10-15 02:27:31.000'),(69,'large_capacity',3,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',3,'2021-10-15 02:27:31.000'),(70,'large_capacity',4,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',4,'2021-10-15 02:27:31.000'),(71,'large_capacity',5,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',5,'2021-10-15 02:27:31.000'),(72,'large_capacity',6,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',6,'2021-10-15 02:27:36.000'),(73,'large_capacity',7,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',7,'2021-10-15 02:27:36.000'),(74,'large_capacity',8,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',8,'2021-10-15 02:27:36.000'),(75,'large_capacity',9,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',9,'2021-10-15 02:27:36.000'),(76,'large_capacity',10,'carousel','대용량 상품 >','팬트리 가득 든든하게, 부담 없는 대용량 묶음 상품',10,'2021-10-15 02:27:36.000');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `product_image` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail_image` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_image` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `labeling_image` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `template_image` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_product_id_fkey` (`product_id`),
  CONSTRAINT `images_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'https://i.imgur.com/HVuWbJl.jpg','https://i.imgur.com/HVuWbJl.jpg','https://i.ibb.co/nDMvttv/2-description-image.png','https://i.ibb.co/tJgngwR/2-labeling-image.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(2,2,'https://i.imgur.com/WbEBYHz.jpg','https://i.imgur.com/WbEBYHz.jpg','https://i.imgur.com/7LEIcGw.png','https://i.imgur.com/ag9xqkk.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(3,3,'https://i.imgur.com/9bDHqPj.jpg','https://i.imgur.com/9bDHqPj.jpg','https://i.imgur.com/kuvkxbE.jpg','https://i.imgur.com/iSbh4Yq.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(4,4,'https://i.imgur.com/npH8WDc.jpg','https://i.imgur.com/npH8WDc.jpg','https://i.imgur.com/uU6FcYp.jpg','https://i.imgur.com/IDkmhyP.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(5,5,'https://i.imgur.com/4S1nDLx.jpg','https://i.imgur.com/4S1nDLx.jpg','https://i.imgur.com/i0EAZ18.png','https://i.imgur.com/QGr1Sgo.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(6,6,'https://i.imgur.com/pZW7wC2.jpg','https://i.imgur.com/pZW7wC2.jpg','https://i.imgur.com/e7MFyMv.jpg','https://i.imgur.com/3iqugDg.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(7,7,'https://i.imgur.com/z6PJEiX.jpg','https://i.imgur.com/z6PJEiX.jpg','https://i.imgur.com/HHQXwRa.png','https://i.imgur.com/croK20X.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(8,8,'https://i.imgur.com/VqFk9MF.jpg','https://i.imgur.com/VqFk9MF.jpg','https://i.imgur.com/O7nztkJ.jpg','https://i.imgur.com/mkW3Nwr.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(9,9,'https://i.imgur.com/3cd7x17.jpg','https://i.imgur.com/3cd7x17.jpg','https://i.imgur.com/2ohK42U.png','https://i.imgur.com/QnqTL5O.png','https://i.ibb.co/M7xvzPr/2-template-image.png'),(10,10,'https://i.imgur.com/8Dzjvfn.jpg','https://i.imgur.com/8Dzjvfn.jpg','https://i.imgur.com/gP1LyQ0.jpg','https://i.imgur.com/W2Ja4GV.jpg','https://i.ibb.co/M7xvzPr/2-template-image.png');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_cart_id_fkey` (`cart_id`),
  CONSTRAINT `orders_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `storage_temperature_id` int NOT NULL,
  `sales_price` int DEFAULT NULL,
  `discount_rate` int DEFAULT NULL,
  `original_price` int NOT NULL,
  `earn_points` int DEFAULT NULL,
  `special_features` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_category_id` int NOT NULL,
  `sales_unit` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weight_or_capacity` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `delivery_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '샛별배송/택배배송',
  `origin_country` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `packaging` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_message` varchar(400) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `allergen_information` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiry_date` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice` varchar(400) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_storage_temperature_id_fkey` (`storage_temperature_id`),
  KEY `products_sub_category_id_fkey` (`sub_category_id`),
  CONSTRAINT `products_storage_temperature_id_fkey` FOREIGN KEY (`storage_temperature_id`) REFERENCES `storage_temperature` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `products_sub_category_id_fkey` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'[우리밀] 참깨 꼬소봉','길쭉한 스틱 과자에 국산 참깨가 콕콕 박힌',1,2380,20,3000,167,'+15%쿠폰',15,'1박스','100g','2021-10-15 02:23:55.237',NULL,'샛별배송/택배배송','제품 라벨 참조','상온/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다','- 밀, 우유, 대두 함유 - 계란, 땅콩, 토마토, 호두, 쇠고기 와 같은 시설에서 생산','상세정보 및 제품 별도라벨 표기','해당상품은 오징어 땅콩볼 제품과 무관한 제조사에서 생산되고 있습니다. 제품 구매시 참고 부탁드립니다.'),(2,'[캘리포니아팜즈] 유기농 민트 초콜릿 소스','비스킷, 아이스크림에 더하는 시원함',1,9500,4,9900,475,'+15%쿠폰',1,'1병','450g','2021-10-15 02:24:00.846',NULL,'샛별배송/택배배송','제품 라벨 참조','상온/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다','우유 함유','상세정보 및 제품 별도라벨 표기','반민초단도 민초단으로 바꿀 수 있는 갓템!'),(3,'호주산 토마호크 스테이크 700g(냉장)','100g당 판매가: 8423원',2,59900,0,59900,2995,NULL,27,'PK','700g(+-15g)','2021-10-15 02:24:05.961',NULL,'샛별배송/택배배송','호주산','냉장/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','없음','수령일 포함 최소 4일 남은 제품을 보내드립니다.','메이플에서나 볼 수 있던 토마호크를 내 밥상에!'),(4,'[바이킹스워프] 자숙 랍스터','간편하게 즐기는 탱글한 속살',3,15900,0,15900,795,NULL,21,'1박스','1마리/400~450g 내외','2021-10-15 02:24:11.061',NULL,'샛별배송/택배배송','캐나다산','냉동/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','갑각류','수령일 포함 최소 180일 남은 제품을 보내드립니다. (총 유통기한 365일)','집게사장의 최후'),(5,'[달달허니] 달고나 캔디','자꾸만 생각나는 달고나 7개입',1,1900,0,1900,95,NULL,10,'1개','100g(7개입)','2021-10-15 02:24:16.116',NULL,'샛별배송/택배배송','제품 라벨 참조','상온/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','없음','제품 라벨 참조','괜히 국자 태워먹지 말고 이거 사드세요'),(6,'[올네이쳐] DOG 송아지 양지살','뉴질랜드산 양지살 100% 오래 먹는 껌',1,13000,0,13000,650,NULL,27,'1개','100g(약 5~8개입)','2021-10-15 02:24:21.366',NULL,'샛별배송/택배배송','뉴질랜드산','상온/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','없음','제품 라벨 참조','창식이 사줘야지'),(7,'[원영엄니] 부대찌개','줌에서 본 감격 그대로',3,13500,10,15500,675,NULL,33,'1개','450g/육수 750ml','2021-10-15 02:24:26.241',NULL,'샛별배송/택배배송','제품 라벨 참고','냉장/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','우유, 대두, 밀, 새우, 돼지고기, 토마토, 닭고기, 쇠고기 함유','수령일 포함 최소 5일 남은 제품을 보내드립니다.','놀부 딱 기다려'),(8,'[콜린스그린] 더 자몽','진짜 자몽의 다채로운 맛',2,16600,0,16600,830,'+15%쿠폰',12,'1병','1000ml','2021-10-15 02:24:32.691',NULL,'샛별배송/택배배송','국내산','냉장/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','없음','수령일로부터 2~3일','생물을 그대로 갈아서 침전물이 있을 수 있습니다.'),(9,'[콜드스톤] 초코 아이스크림 파인트','초코칩을 품은 부드러운 달콤함',3,9800,0,9800,490,'+15%쿠폰',30,'1통','474mL','2021-10-15 02:24:38.886',NULL,'샛별배송/택배배송','제품 라벨 참고','냉동/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','우유, 대두, 밀','없음','특) 비싸서 못사먹음'),(10,'[램노스] 과일치즈 6종','상큼하고 달콤하게 즐기는 치즈!',2,4900,0,4900,245,NULL,31,'6봉지','125g','2021-10-15 02:24:47.211',NULL,'샛별배송/택배배송','호주산','냉동/종이포장','택배배송은 에코포장이 스티로폼으로 대체됩니다.','우유, 땅콩, 대두, 밀','없음','치즈 속 고소한 견과류와 상큼한 과일을 느껴보세요!');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_user_id_fkey` (`user_id`),
  CONSTRAINT `reviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'두번째 주문!','벌써 두번째 주문이에요!',1,'2021-10-15 18:12:25.662',NULL,2),(2,'오 맛있어요!','정말 맛있네요',1,'2021-10-15 18:12:25.662',NULL,2),(3,'배송이 정말 빨라요!','하루만에 배송 됐어요',1,'2021-10-15 18:12:25.662',NULL,2),(4,'가격이 정말 저렴해요','가격이 저렴해서 자주 사먹을거 같아요',2,'2021-10-15 18:12:25.662',NULL,2),(5,'좋아요','다음에 또 주문 할게요',2,'2021-10-15 18:12:25.662',NULL,2),(6,'대박!','완전 취향 저격!',2,'2021-10-15 18:12:25.662',NULL,2),(7,'보통','그저 그래요',3,'2021-10-15 18:12:25.662',NULL,2),(8,'너무 맘에 들어요','자주 주문 할거 같아요!',3,'2021-10-15 18:12:25.662',NULL,2),(9,'가성비 최고!','싼가격 고 퀄리티! 믿고 사는 마켓둘리!',3,'2021-10-15 18:12:25.662',NULL,2),(10,'마켓둘리 좋아요','내 사랑 마켓둘리 나랑 결혼 해줄래?',3,'2021-10-15 18:12:25.662',NULL,2),(11,'첫 주문!','처음 주문해본 품목인데 정말 마음에 들어요',3,'2021-10-15 18:12:25.662',NULL,2),(12,'별로에요','생각했던 것 보다 훨씬 별로에요',3,'2021-10-15 18:12:25.662',NULL,2),(13,'두번째 주문!','벌써 두번째 주문이에요!',1,'2021-10-15 18:12:26.906',NULL,2),(14,'오 맛있어요!','정말 맛있네요',1,'2021-10-15 18:12:26.906',NULL,2),(15,'배송이 정말 빨라요!','하루만에 배송 됐어요',1,'2021-10-15 18:12:26.906',NULL,2),(16,'가격이 정말 저렴해요','가격이 저렴해서 자주 사먹을거 같아요',2,'2021-10-15 18:12:26.906',NULL,2),(17,'좋아요','다음에 또 주문 할게요',2,'2021-10-15 18:12:26.906',NULL,2),(18,'대박!','완전 취향 저격!',2,'2021-10-15 18:12:26.906',NULL,2),(19,'보통','그저 그래요',3,'2021-10-15 18:12:26.906',NULL,2),(20,'너무 맘에 들어요','자주 주문 할거 같아요!',3,'2021-10-15 18:12:26.906',NULL,2),(21,'가성비 최고!','싼가격 고 퀄리티! 믿고 사는 마켓둘리!',3,'2021-10-15 18:12:26.906',NULL,2),(22,'마켓둘리 좋아요','내 사랑 마켓둘리 나랑 결혼 해줄래?',3,'2021-10-15 18:12:26.906',NULL,2),(23,'첫 주문!','처음 주문해본 품목인데 정말 마음에 들어요',3,'2021-10-15 18:12:26.906',NULL,2),(24,'별로에요','생각했던 것 보다 훨씬 별로에요',3,'2021-10-15 18:12:26.906',NULL,2),(25,'두번째 주문!','벌써 두번째 주문이에요!',1,'2021-10-15 18:12:27.461',NULL,2),(26,'오 맛있어요!','정말 맛있네요',1,'2021-10-15 18:12:27.461',NULL,2),(27,'배송이 정말 빨라요!','하루만에 배송 됐어요',1,'2021-10-15 18:12:27.461',NULL,2),(28,'가격이 정말 저렴해요','가격이 저렴해서 자주 사먹을거 같아요',2,'2021-10-15 18:12:27.461',NULL,2),(29,'좋아요','다음에 또 주문 할게요',2,'2021-10-15 18:12:27.461',NULL,2),(30,'대박!','완전 취향 저격!',2,'2021-10-15 18:12:27.461',NULL,2),(31,'보통','그저 그래요',3,'2021-10-15 18:12:27.461',NULL,2),(32,'너무 맘에 들어요','자주 주문 할거 같아요!',3,'2021-10-15 18:12:27.461',NULL,2),(33,'가성비 최고!','싼가격 고 퀄리티! 믿고 사는 마켓둘리!',3,'2021-10-15 18:12:27.461',NULL,2),(34,'마켓둘리 좋아요','내 사랑 마켓둘리 나랑 결혼 해줄래?',3,'2021-10-15 18:12:27.461',NULL,2),(35,'첫 주문!','처음 주문해본 품목인데 정말 마음에 들어요',3,'2021-10-15 18:12:27.461',NULL,2),(36,'별로에요','생각했던 것 보다 훨씬 별로에요',3,'2021-10-15 18:12:27.461',NULL,2),(37,'두번째 주문!','벌써 두번째 주문이에요!',1,'2021-10-15 18:12:27.971',NULL,2),(38,'오 맛있어요!','정말 맛있네요',1,'2021-10-15 18:12:27.971',NULL,2),(39,'배송이 정말 빨라요!','하루만에 배송 됐어요',1,'2021-10-15 18:12:27.971',NULL,2),(40,'가격이 정말 저렴해요','가격이 저렴해서 자주 사먹을거 같아요',2,'2021-10-15 18:12:27.971',NULL,2),(41,'좋아요','다음에 또 주문 할게요',2,'2021-10-15 18:12:27.971',NULL,2),(42,'대박!','완전 취향 저격!',2,'2021-10-15 18:12:27.971',NULL,2),(43,'보통','그저 그래요',3,'2021-10-15 18:12:27.971',NULL,2),(44,'너무 맘에 들어요','자주 주문 할거 같아요!',3,'2021-10-15 18:12:27.971',NULL,2),(45,'가성비 최고!','싼가격 고 퀄리티! 믿고 사는 마켓둘리!',3,'2021-10-15 18:12:27.971',NULL,2),(46,'마켓둘리 좋아요','내 사랑 마켓둘리 나랑 결혼 해줄래?',3,'2021-10-15 18:12:27.971',NULL,2),(47,'첫 주문!','처음 주문해본 품목인데 정말 마음에 들어요',3,'2021-10-15 18:12:27.971',NULL,2),(48,'별로에요','생각했던 것 보다 훨씬 별로에요',3,'2021-10-15 18:12:27.971',NULL,2),(49,'두번째 주문!','벌써 두번째 주문이에요!',1,'2021-10-15 18:12:28.451',NULL,2),(50,'오 맛있어요!','정말 맛있네요',1,'2021-10-15 18:12:28.451',NULL,2),(51,'배송이 정말 빨라요!','하루만에 배송 됐어요',1,'2021-10-15 18:12:28.451',NULL,2),(52,'가격이 정말 저렴해요','가격이 저렴해서 자주 사먹을거 같아요',2,'2021-10-15 18:12:28.451',NULL,2),(53,'좋아요','다음에 또 주문 할게요',2,'2021-10-15 18:12:28.451',NULL,2),(54,'대박!','완전 취향 저격!',2,'2021-10-15 18:12:28.451',NULL,2),(55,'보통','그저 그래요',3,'2021-10-15 18:12:28.451',NULL,2),(56,'너무 맘에 들어요','자주 주문 할거 같아요!',3,'2021-10-15 18:12:28.451',NULL,2),(57,'가성비 최고!','싼가격 고 퀄리티! 믿고 사는 마켓둘리!',3,'2021-10-15 18:12:28.451',NULL,2),(58,'마켓둘리 좋아요','내 사랑 마켓둘리 나랑 결혼 해줄래?',3,'2021-10-15 18:12:28.451',NULL,2),(59,'첫 주문!','처음 주문해본 품목인데 정말 마음에 들어요',3,'2021-10-15 18:12:28.451',NULL,2),(60,'별로에요','생각했던 것 보다 훨씬 별로에요',3,'2021-10-15 18:12:28.451',NULL,2),(61,'후기입니다','게시판 후기',1,'2021-10-15 18:13:34.893',NULL,2),(62,'후기작성입니다','제품의 후기입니다.',1,'2021-10-15 19:46:07.178',NULL,2),(63,'후기작성입니다','후기',1,'2021-10-15 19:47:30.644',NULL,2);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews_likes`
--

DROP TABLE IF EXISTS `reviews_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews_likes` (
  `review_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`review_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews_likes`
--

LOCK TABLES `reviews_likes` WRITE;
/*!40000 ALTER TABLE `reviews_likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage_temperature`
--

DROP TABLE IF EXISTS `storage_temperature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage_temperature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `storage_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage_temperature`
--

LOCK TABLES `storage_temperature` WRITE;
/*!40000 ALTER TABLE `storage_temperature` DISABLE KEYS */;
INSERT INTO `storage_temperature` VALUES (1,'냉장 보관'),(2,'냉동 보관'),(3,'실온 보관');
/*!40000 ALTER TABLE `storage_temperature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sub_categories_category_id_fkey` (`category_id`),
  CONSTRAINT `sub_categories_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES (1,'친환경',1,'2021-10-15 12:26:42.723',NULL),(2,'고구마·감자·당근',1,'2021-10-15 12:26:42.723',NULL),(3,'시금치·쌈채소·나물',1,'2021-10-15 12:26:42.723',NULL),(4,'브로콜리·파프리카·양배추',1,'2021-10-15 12:26:42.723',NULL),(5,'양파·대파·마늘·배추',1,'2021-10-15 12:26:42.723',NULL),(6,'오이·호박·고추',1,'2021-10-15 12:26:42.723',NULL),(7,'냉동·이색·간편채소',1,'2021-10-15 12:26:42.723',NULL),(8,'콩나물·버섯',1,'2021-10-15 12:26:42.723',NULL),(9,'친환경',2,'2021-10-15 12:26:42.723',NULL),(10,'제철과일',2,'2021-10-15 12:26:42.723',NULL),(11,'국산과일',2,'2021-10-15 12:26:42.723',NULL),(12,'수입과일',2,'2021-10-15 12:26:42.723',NULL),(13,'간편과일',2,'2021-10-15 12:26:42.723',NULL),(14,'냉동·건과일',2,'2021-10-15 12:26:42.723',NULL),(15,'견과류',2,'2021-10-15 12:26:42.723',NULL),(16,'쌀·잡곡',2,'2021-10-15 12:26:42.723',NULL),(17,'제철수산',3,'2021-10-15 12:26:42.723',NULL),(18,'생선류',3,'2021-10-15 12:26:42.723',NULL),(19,'굴비·반건류',3,'2021-10-15 12:26:42.723',NULL),(20,'오징어·낙지·문어',3,'2021-10-15 12:26:42.723',NULL),(21,'새우·게·랍스터',3,'2021-10-15 12:26:42.723',NULL),(22,'해산물·조개류',3,'2021-10-15 12:26:42.723',NULL),(23,'수산가공품',3,'2021-10-15 12:26:42.723',NULL),(24,'김·미역·해조류',3,'2021-10-15 12:26:48.692',NULL),(25,'건어물·다시팩',3,'2021-10-15 12:26:48.692',NULL),(26,'국내산 소고기',4,'2021-10-15 12:26:48.692',NULL),(27,'수입산 소고기',4,'2021-10-15 12:26:48.692',NULL),(28,'돼지고기',4,'2021-10-15 12:26:48.692',NULL),(29,'계란류',4,'2021-10-15 12:26:48.692',NULL),(30,'닭·오리고기',4,'2021-10-15 12:26:48.692',NULL),(31,'양념육·돈까스',4,'2021-10-15 12:26:48.692',NULL),(32,'양고기',4,'2021-10-15 12:26:48.692',NULL),(33,'국·탕·찌개',5,'2021-10-15 12:26:48.692',NULL),(34,'밀키트·메인요리',5,'2021-10-15 12:26:48.692',NULL),(35,'밑반찬',5,'2021-10-15 12:26:48.692',NULL),(36,'김치·젓갈·장류',5,'2021-10-15 12:26:48.692',NULL),(37,'두부·어묵·부침개',5,'2021-10-15 12:26:48.692',NULL),(38,'베이컨·햄·통조림',5,'2021-10-15 12:26:48.692',NULL),(39,'샐러드·닭가슴살',6,'2021-10-15 12:26:48.692',NULL),(40,'도시락·밥류',6,'2021-10-15 12:26:48.692',NULL),(41,'파스타·면류',6,'2021-10-15 12:26:48.692',NULL),(42,'떡볶이·튀김·순대',6,'2021-10-15 12:26:48.692',NULL),(43,'피자·핫도그·만두',6,'2021-10-15 12:26:48.692',NULL),(44,'폭립·떡갈비·안주',6,'2021-10-15 12:26:48.692',NULL),(45,'죽·스프·카레',6,'2021-10-15 12:26:48.692',NULL),(46,'선식·시리얼',6,'2021-10-15 12:26:48.692',NULL);
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `mandatory_policy_agreed` tinyint(1) NOT NULL,
  `personal_information_policy_agreed` tinyint(1) NOT NULL DEFAULT '0',
  `marketing_policy_agreed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_account_key` (`account`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'onecookie','onecookie@wecode.com','이원국','$2b$10$FLr.CHowLxQjebG8RSM1kuoNTeschHAkxEZO2ca0EmjCKmLGZOry2','010-1212-1212','원국시 샛별구 샛별동 22-1','남자','1990-01-02','2021-10-15 02:28:24.142',1,0,0),(2,'han0gu','han0gu@wecode.com','한승완','$2b$10$wFzCQJhvd8krMSwcy2Zch.lwl37uLS7ji/gs.GrXmK.si71fz1rC6','010-3434-3434','승완시 햇살구 햇살동 22-1','남자','1990-03-04','2021-10-15 02:28:24.142',1,1,1),(3,'jivenhan','jivenhan@wecode.com','한지훈','$2b$10$HKag.TNZQiLEY5q.dBc/p./YZgMSYsprXqv1NbGxZun42xL/Mv84.','010-5656-5656','지훈시 달빛구 달빛동 22-1','남자','1990-05-06','2021-10-15 02:28:24.142',1,0,1),(4,'jin0oon','jin0oon@wecode.com','김윤진','$2b$10$rJ2n7w6iCn18b1P1zWa0aORGdfDTdykWDNUGnzCiZFMFrBn7bfqSi','010-7878-7878','윤진시 볓별구 볓별동 22-1','여자','2000-07-08','2021-10-15 02:28:32.302',1,0,0),(5,'jsung1103','jsung1103@wecode.com','김진성','$2b$10$9fqQ75xkuWBmRrmQmwhza.u7Gs6gYT1x0kuu9EZ.YA4plWXYthz1K','010-9090-9090','진성시 윤슬구 윤슬동 22-1','남자','1992-09-10','2021-10-15 02:28:32.302',1,0,0),(6,'onecookie33','marketdooly@dooly.com','이원국','$2b$10$g0NvR4zsbtlNkHX1JWipWuZ34ZmGzEao0EpmIpp2.HE7Q9owjtt1m','01093838383','서울특별시','male','1990-11-08','2021-10-15 19:50:58.130',1,0,0),(8,'werweoi','wewe@wecode.com','김진성','$2b$10$HlmVFRU1xyObi7MUTEHllO3lFVEoDr55zxcoqoQEkIeiZBwjDwOPC','010-1234-5678','진성시 샛별구 샛별동 22-1','남자','1992-11-08','2021-10-19 11:29:25.225',1,0,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-22  0:29:48
