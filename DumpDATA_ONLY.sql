-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: hairb2b
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `trn_busy_date`
--

LOCK TABLES `trn_busy_date` WRITE;
/*!40000 ALTER TABLE `trn_busy_date` DISABLE KEYS */;
INSERT INTO `trn_busy_date` VALUES (1,1,1,'BOOKING','2017-12-29'),(2,1,2,'BOOKING','2017-12-29'),(3,1,1,'BOOKING','2018-01-02'),(4,1,1,'BOOKING','2018-01-04'),(5,1,2,'BOOKING','2018-01-04'),(6,1,1,'BOOKING','2018-01-09'),(7,1,1,'BOOKING','2018-01-15'),(8,1,2,'BOOKING','2018-01-15'),(9,1,1,'BOOKING','2018-01-18'),(10,1,2,'BOOKING','2018-01-03'),(11,1,1,'BOOKING','2018-01-19'),(12,2,1,'BOOKING','2017-12-30'),(13,2,2,'BOOKING','2017-12-30'),(14,2,1,'BOOKING','2018-01-01'),(15,2,1,'BOOKING','2018-01-02'),(16,2,2,'BOOKING','2018-01-02'),(17,2,1,'BOOKING','2018-01-10'),(18,2,1,'BOOKING','2018-01-12'),(19,2,2,'BOOKING','2018-01-12'),(20,3,1,'BOOKING','2017-12-28'),(21,3,1,'BOOKING','2017-12-31'),(22,3,2,'BOOKING','2017-12-31'),(23,3,1,'BOOKING','2018-01-02'),(24,3,1,'BOOKING','2018-01-05'),(25,3,2,'BOOKING','2018-01-06'),(26,3,1,'BOOKING','2018-01-12'),(27,3,2,'BOOKING','2018-01-12');
/*!40000 ALTER TABLE `trn_busy_date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_charge_per_slot`
--

LOCK TABLES `trn_charge_per_slot` WRITE;
/*!40000 ALTER TABLE `trn_charge_per_slot` DISABLE KEYS */;
INSERT INTO `trn_charge_per_slot` VALUES (1,1,10.00,'AUD'),(1,2,15.00,'AUD'),(2,1,30.00,'AUD'),(2,2,35.00,'AUD'),(3,1,12.00,'AUD'),(3,2,15.00,'AUD');
/*!40000 ALTER TABLE `trn_charge_per_slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_gallery`
--

LOCK TABLES `trn_gallery` WRITE;
/*!40000 ALTER TABLE `trn_gallery` DISABLE KEYS */;
INSERT INTO `trn_gallery` VALUES (1,'./public/images/margit.jpg',1),(2,'./public/images/taunya.jpg',2),(3,'./public/images/krystina.jpg',3),(4,'./public/images/margit/g1.jpg',1),(5,'./public/images/margit/g2.jpg',1),(6,'./public/images/margit/g3.jpg',1),(7,'./public/images/margit/g4.jpg',1),(8,'./public/images/margit/g5.jpg',1),(9,'./public/images/margit/g6.jpg',1),(10,'./public/images/taunya/g1.jpg',2),(11,'./public/images/taunya/g2.jpg',2),(12,'./public/images/taunya/g3.jpg',2),(13,'./public/images/taunya/g4.jpg',2),(14,'./public/images/taunya/g5.jpg',2),(15,'./public/images/taunya/g6.jpg',2),(16,'./public/images/krystina/g1.jpg',3),(17,'./public/images/krystina/g2.jpg',3),(18,'./public/images/krystina/g3.jpg',3),(19,'./public/images/krystina/g4.jpg',3),(20,'./public/images/krystina/g5.jpg',3),(21,'./public/images/krystina/g6.jpg',3);
/*!40000 ALTER TABLE `trn_gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_job_role`
--

LOCK TABLES `trn_job_role` WRITE;
/*!40000 ALTER TABLE `trn_job_role` DISABLE KEYS */;
INSERT INTO `trn_job_role` VALUES (1,'Educator'),(2,'Stylist'),(3,'Assistant');
/*!40000 ALTER TABLE `trn_job_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_location`
--

LOCK TABLES `trn_location` WRITE;
/*!40000 ALTER TABLE `trn_location` DISABLE KEYS */;
INSERT INTO `trn_location` VALUES (1,'Sydney','New South Wales'),(2,'Melbourne','Victoria'),(3,'Brisbane','Queensland'),(4,'Perth','Western Australia'),(5,'Adelaide','South Australia'),(6,'Bendigo','Victoria'),(7,'Darwin','Northern Territory'),(8,'Toowoomba','Queensland');
/*!40000 ALTER TABLE `trn_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_preferred_location`
--

LOCK TABLES `trn_preferred_location` WRITE;
/*!40000 ALTER TABLE `trn_preferred_location` DISABLE KEYS */;
INSERT INTO `trn_preferred_location` VALUES (1,1),(3,1),(1,2),(2,2),(3,2),(2,3),(3,3),(2,4),(1,5),(1,6),(3,6),(1,7),(3,7),(3,8);
/*!40000 ALTER TABLE `trn_preferred_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_profile`
--

LOCK TABLES `trn_profile` WRITE;
/*!40000 ALTER TABLE `trn_profile` DISABLE KEYS */;
INSERT INTO `trn_profile` VALUES (1,1,1,1,'2017-12-20 07:16:18',1,3),(2,2,1,1,'2017-12-20 07:16:18',2,4),(3,3,1,1,'2017-12-20 07:16:18',3,5);
/*!40000 ALTER TABLE `trn_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_profile_type`
--

LOCK TABLES `trn_profile_type` WRITE;
/*!40000 ALTER TABLE `trn_profile_type` DISABLE KEYS */;
INSERT INTO `trn_profile_type` VALUES (1,'Stylist'),(2,'Salon');
/*!40000 ALTER TABLE `trn_profile_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_salon`
--

LOCK TABLES `trn_salon` WRITE;
/*!40000 ALTER TABLE `trn_salon` DISABLE KEYS */;
/*!40000 ALTER TABLE `trn_salon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_skill`
--

LOCK TABLES `trn_skill` WRITE;
/*!40000 ALTER TABLE `trn_skill` DISABLE KEYS */;
INSERT INTO `trn_skill` VALUES (1,0,'Bridal'),(2,0,'Curling'),(3,0,'Rebonding'),(4,0,'Hair Coloring'),(5,0,'Hair Cutting');
/*!40000 ALTER TABLE `trn_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_stylist`
--

LOCK TABLES `trn_stylist` WRITE;
/*!40000 ALTER TABLE `trn_stylist` DISABLE KEYS */;
INSERT INTO `trn_stylist` VALUES (1,1,1,0,'Margit','Redford','U 235','201-203 BROADWAY AVE','WEST BEACH','SA',5024,'Australia',711225455,'I have been passionately involved in my industry for 25 years. Doing pretty much everything from winning competitions, educating, doing shows, photo shoots, writing articles and building businesses. I love sharing my knowledge and working with other passionate hairdressers. ','non'),(2,2,1,0,'Taunya','Spada','U 235','201-203 BROADWAY AVE','WEST BEACH','SA',5024,'Australia',711225455,'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland, one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.','non'),(3,3,2,0,'Krystina','Lish','U 235','201-203 BROADWAY AVE','WEST BEACH','SA',5024,'Australia',711225455,'Complimented by Sassoon on my Haircutting , have cut the Rolling Stones ,Santana etc etc featured in Vogue ,Harpers ,Cleo , Instyle ,Follow me ,Stiletto etc etc. Did a Haircutting video for Sassoon Japanese television ,was a finelist on Hairbrained on my cutting video Hair Dance and Voi eight haircuts , have done haircutting video for Jaguar scissors Mizutani scissors and Sharpline scissors. Hair Expo with InStyle.','non');
/*!40000 ALTER TABLE `trn_stylist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_stylist_skill`
--

LOCK TABLES `trn_stylist_skill` WRITE;
/*!40000 ALTER TABLE `trn_stylist_skill` DISABLE KEYS */;
INSERT INTO `trn_stylist_skill` VALUES (1,1),(2,1),(1,2),(3,2),(1,3),(2,3),(3,3),(1,4),(2,4),(3,4),(1,5),(3,5);
/*!40000 ALTER TABLE `trn_stylist_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_time_slot`
--

LOCK TABLES `trn_time_slot` WRITE;
/*!40000 ALTER TABLE `trn_time_slot` DISABLE KEYS */;
INSERT INTO `trn_time_slot` VALUES (1,'8AM - 12PM'),(2,'12PM - 5PM');
/*!40000 ALTER TABLE `trn_time_slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trn_user_account`
--

LOCK TABLES `trn_user_account` WRITE;
/*!40000 ALTER TABLE `trn_user_account` DISABLE KEYS */;
INSERT INTO `trn_user_account` VALUES (1,'shinobidnuka@gmail.com','*E6CC90B878B948C35E92B003C792C46C58C4AF40',1,'Dinuka',1,'2017-12-20 04:23:15','2017-12-20 04:23:15','2017-12-20 04:23:15'),(2,'dinuka.nadeeshan@gmail.com','*E6CC90B878B948C35E92B003C792C46C58C4AF40',1,'Nadeeshan',1,'2017-12-20 04:25:32','2017-12-20 04:25:32','2017-12-20 04:25:32'),(3,'dinuka.n@eyepax.com','*E6CC90B878B948C35E92B003C792C46C58C4AF40',1,'Dinukan',1,'2017-12-20 04:27:04','2017-12-20 04:27:04','2017-12-20 04:27:04');
/*!40000 ALTER TABLE `trn_user_account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-26 17:14:23
