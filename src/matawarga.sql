-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: matawarga
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kejadians`
--

DROP TABLE IF EXISTS `kejadians`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kejadians` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `judul` varchar(45) DEFAULT NULL,
  `deskripsi` varchar(45) DEFAULT NULL,
  `gambar` varchar(45) DEFAULT NULL,
  `tujuan_instansi` varchar(45) DEFAULT NULL,
  `tanggal` datetime DEFAULT current_timestamp(),
  `like` int(11) DEFAULT NULL,
  `dislike` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_kejadians_users_idx` (`iduser`),
  CONSTRAINT `fk_kejadians_users` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kejadians`
--

LOCK TABLES `kejadians` WRITE;
/*!40000 ALTER TABLE `kejadians` DISABLE KEYS */;
INSERT INTO `kejadians` VALUES (1,1,'Pohon Tumbang','Pohon tumbang di jalan raya','https://picsum.photos/200','Pemkot','2024-07-01 08:00:00',15,2),(2,2,'Kebakaran','Kebakaran rumah di gang sempit','assets/img/kebakaran.jpg','Polisi','2024-07-02 14:30:00',30,1),(3,4,'Banjir','Banjir setelah hujan deras','assets/img/banjir.jpg','PDAM','2024-07-03 06:45:00',25,5),(4,3,'Lampu Lalu Lintas Rusak','Lampu lalu lintas mati','assets/img/lampu.jpg','PLN','2024-07-04 17:20:00',10,0),(5,2,'Jalan Berlubang','Jalan berlubang di jalan utama','assets/img/jalan.jpg','Pemkot','2024-07-05 09:10:00',20,3),(6,2,'Pencurian','Pencurian motor di parkiran','assets/img/pencurian.jpg','Polisi','2024-07-06 21:00:00',5,10),(7,4,'Pipa Bocor','Pipa air PDAM bocor','assets/img/pipa.jpg','PDAM','2024-07-07 11:15:00',12,1),(8,3,'Kebisingan Malam Hari','Keributan di jalan malam hari','assets/img/bising.jpg','Polisi','2024-07-08 23:45:00',8,6),(9,1,'Sampah Menumpuk','Sampah tidak diangkut','assets/img/sampah.jpg','Tidak tahu','2024-07-09 07:30:00',18,4),(10,3,'Kabel Listrik Terbakar','Kabel listrik terbakar','assets/img/kabel.jpg','PLN','2024-07-10 15:25:00',22,3),(11,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,1,'dafagee','egwgwg','https://picsum.photos/200','PLN','2024-07-10 13:01:00',NULL,NULL),(14,1,'Tanpa export post','tanpa export post cobaxova','assets/img/pohon.jpg','Tidak tahu','2024-07-09 13:02:00',NULL,NULL),(15,1,'Dengan extract Post','extracccccccccccccc','assets/img/jalan.jpg',NULL,'2024-07-08 10:00:00',NULL,NULL),(16,1,'dexi lagi','eaoihrnoh','https://picsum.photos/200',NULL,'2024-07-02 13:01:00',NULL,NULL),(17,1,'dexi lagi','eaoihrnoh','https://picsum.photos/200',NULL,'2024-07-02 13:01:00',NULL,NULL),(18,1,'dexi lagi','eaoihrnoh','https://picsum.photos/200',NULL,'2024-07-02 13:01:00',NULL,NULL),(19,1,'dexi lagi','eaoihrnoh','https://picsum.photos/200',NULL,'2024-07-02 13:01:00',NULL,NULL),(20,1,'drgdsr','ttmdmtt','https://picsum.photos/200',NULL,'2024-07-02 13:01:00',NULL,NULL),(21,1,'trial1','aeab','https://picsum.photos/200',NULL,'2024-07-08 12:01:00',NULL,NULL),(22,1,'trial1','aeab','https://picsum.photos/200',NULL,'2024-07-08 12:01:00',NULL,NULL),(23,1,'trial1','aeab','https://picsum.photos/200',NULL,'2024-07-08 12:01:00',NULL,NULL),(24,1,'trial1','aeab','https://picsum.photos/200',NULL,'2024-07-08 12:01:00',NULL,NULL),(25,1,'aerh','aerh','https://picsum.photos/200',NULL,'2024-07-11 00:00:00',NULL,NULL),(26,5,'direct newz','wijoij','https://picsum.photos/200',NULL,'2024-07-11 12:01:00',NULL,NULL),(27,5,'methodbaru','nwoiegoewhgohoih','https://picsum.photos/200','PLN','2024-07-01 13:01:00',NULL,NULL),(28,1,'DexiUjian','Deskerispi','https://picsum.photos/200','Pemkot','2024-07-11 12:01:00',NULL,NULL);
/*!40000 ALTER TABLE `kejadians` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `komentars`
--

DROP TABLE IF EXISTS `komentars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `komentars` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idkejadian` int(11) NOT NULL,
  `komentar` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`,`idkejadian`,`id`),
  KEY `fk_users_has_kejadians_kejadians1_idx` (`idkejadian`),
  KEY `fk_users_has_kejadians_users1_idx` (`iduser`),
  CONSTRAINT `fk_users_has_kejadians_kejadians1` FOREIGN KEY (`idkejadian`) REFERENCES `kejadians` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_kejadians_users1` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `komentars`
--

LOCK TABLES `komentars` WRITE;
/*!40000 ALTER TABLE `komentars` DISABLE KEYS */;
INSERT INTO `komentars` VALUES (1,1,1,'Harap segera dibersihkan'),(2,1,2,'Sudah ada bantuan dari pemadam kebakaran'),(3,1,3,'Mohon segera membersihkan sungai terdekat'),(4,1,5,'Jalan sangat berbahaya'),(5,1,7,'Mohon segera diperbaiki, saluran air ke rumah'),(6,1,8,'Keributan antar geng motor'),(7,1,10,'Api kabel sudah dipadamkan'),(0,1,25,'lagi'),(8,2,1,'Lalu lintas macet akibat pohon tumbang'),(9,2,4,'Mohon segera diperbaiki'),(10,2,6,'Apakah tidak ada CCTV di lokasi?'),(11,2,8,'Keributan berlangsung lama'),(12,2,10,'Perlu pemeriksaan lebih lanjut'),(13,3,2,'Apinya cukup besar'),(14,3,4,'Banyak kendaraan yang melanggar karena lampu '),(15,3,6,'Apakah pencuri sudah tertangkap?'),(16,3,9,'Harap segera dibersihkan sampahnya'),(17,4,3,'Sudah mulai surut'),(18,4,5,'Sudah ada tanda peringatan'),(19,4,7,'Perbaikan sedang dilakukan'),(20,4,8,'Polisi baru datang'),(21,4,9,'Bau tumpukan sampahnya sangat menyengat'),(22,5,10,'Coba komen'),(0,5,21,'komen lag'),(23,5,21,'hellow'),(24,5,25,'try'),(25,5,26,'');
/*!40000 ALTER TABLE `komentars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `foto_profil` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dan','Daniel Hermawan','ok',''),(2,'andi','Andi Wijaya','123',''),(3,'budi','Budi Santoso','456',''),(4,'citra','Citra Dewi','789',''),(5,'newz','New User Hehe','new','https://picsum.photos/200');
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

-- Dump completed on 2024-07-11 11:43:00
