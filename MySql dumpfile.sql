-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: webcams
-- ------------------------------------------------------
-- Server version       8.0.18


--
-- Current Database: `webcams`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `webcams` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `webcams`;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `webcam` varchar(255) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id` (`region_id`),
  CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (2,'Cheia Nord','1530301468',45.4898,25.9753,1),(3,'Constanța','1280053687',44.1743,28.658,2),(6,'loca1','3412512',34.55,32.45,4),(8,'Ploiești','1557661175',44.9429,26.0174,1),(9,'2434','fggf',33,56,NULL),(10,'Cheia Est','1545673769',45.458,25.9407,1),(11,'Neptun','1548944873',43.8713,28.6017,2);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `regioncode` varchar(255) DEFAULT NULL,
  `details` text,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
INSERT INTO `regions` VALUES (1,'Prahova','RO.30','suprafață = 4716 km^2\n763 0000 loc.','ro.wikipedia.org/wiki/Jude%C8%9Bul_Prahova'),(2,'Constanța','RO.14','suprafață = 7071 km^2\n684 0000 loc.','ro.wikipedia.org/wiki/Jude%C8%9Bul_Constan%C8%9Ba'),(4,'Argeș','RO.03','suprafață = 6862 km^2\n591 0000 loc.','ro.wikipedia.org/wiki/Jude%C8%9Bul_Arge%C8%99'),(8,'Brașov','RO.09','suprafață = 5360 km^2\n549 0000 loc.','ro.wikipedia.org/wiki/Jude%C8%9Bul_Bra%C8%99ov'),(12,'Iași','RO.23','suprafață = 5476 km^2\n772 0000 loc.','ro.wikipedia.org/wiki/Jude%C8%9Bul_Ia%C8%99i');
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK TABLES;
