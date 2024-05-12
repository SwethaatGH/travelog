CREATE DATABASE  IF NOT EXISTS `travelapp`;
USE `travelapp`;
-- Host: localhost    Database: travelapp

DROP TABLE IF EXISTS `triplist`;
CREATE TABLE `triplist` (
  `tripid` int NOT NULL AUTO_INCREMENT,
  `tripname` varchar(45) DEFAULT NULL,
  `origin` varchar(45) DEFAULT NULL,
  `destn` varchar(45) DEFAULT NULL,
  `fromdate` datetime DEFAULT NULL,
  `todate` datetime DEFAULT NULL,
  PRIMARY KEY (`tripid`),
  UNIQUE KEY `tripid_UNIQUE` (`tripid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--
-- Dumping data for table `triplist`
--

LOCK TABLES `triplist` WRITE;
/*!40000 ALTER TABLE `triplist` DISABLE KEYS */;
INSERT INTO `triplist` VALUES (3,NULL,'coimbatore','singapore','2024-03-25 12:07:00','2024-03-28 12:07:00'),(4,NULL,'cbe','bangalore','2024-03-29 16:01:00','2024-03-31 16:01:00');
/*!40000 ALTER TABLE `triplist` ENABLE KEYS */;
UNLOCK TABLES;
