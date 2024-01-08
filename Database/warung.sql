-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 08, 2024 at 02:05 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warung`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kategori` enum('makanan','minuman','lain-lain') DEFAULT NULL,
  `harga` int(11) NOT NULL,
  `stok` enum('tersedia','habis') DEFAULT 'habis',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `nama`, `kategori`, `harga`, `stok`, `createdAt`, `updatedAt`) VALUES
(41, 'Nasi goreng', 'makanan', 12000, 'tersedia', '2024-01-08 13:54:44', '2024-01-08 13:55:05'),
(42, 'Mie ayam bakso', 'makanan', 15000, 'tersedia', '2024-01-08 13:55:25', '2024-01-08 13:55:25'),
(43, 'Ayam geprek', 'makanan', 10000, 'tersedia', '2024-01-08 13:55:52', '2024-01-08 13:55:52'),
(44, 'Es kelapa muda', 'minuman', 8000, 'tersedia', '2024-01-08 13:56:17', '2024-01-08 13:56:17'),
(45, 'Es teh manis', 'minuman', 5000, 'tersedia', '2024-01-08 13:57:00', '2024-01-08 13:57:00'),
(46, 'Kopi hitam', 'minuman', 3500, 'tersedia', '2024-01-08 13:57:25', '2024-01-08 13:57:25'),
(47, 'Rokok', 'lain-lain', 20000, 'tersedia', '2024-01-08 13:57:53', '2024-01-08 13:57:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
