-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 24 oct. 2024 à 14:06
-- Version du serveur :  5.7.28
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `entities`
--

DROP TABLE IF EXISTS `entities`;
CREATE TABLE IF NOT EXISTS `entities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` longtext,
  `siret` varchar(20) DEFAULT NULL,
  `KeyLicence` varchar(250) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entities`
--

INSERT INTO `entities` (`id`, `name`, `description`, `siret`, `KeyLicence`, `website`, `createdAt`) VALUES
(1, 'ruddy', 'ruddy1234', 'siret ruddy', NULL, 'website ruddy', '2024-10-24 12:41:31'),
(2, 'chose', 'chose description', 'siret chose', NULL, 'website chose', '2024-10-24 13:51:20');

-- --------------------------------------------------------

--
-- Structure de la table `userentities`
--

DROP TABLE IF EXISTS `userentities`;
CREATE TABLE IF NOT EXISTS `userentities` (
  `userId` int(11) NOT NULL,
  `entityId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`entityId`),
  UNIQUE KEY `userEntities_entityId_userId_unique` (`userId`,`entityId`),
  KEY `entityId` (`entityId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `userentities`
--

INSERT INTO `userentities` (`userId`, `entityId`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `firstName`, `language`, `email`, `password`, `lastLogin`, `createdAt`) VALUES
(1, 'tortueNinja', 'donatello', NULL, 'angelo@gmail.com', 'gelo1234', '2024-10-24 12:40:59', '2024-10-24 12:40:59');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `userentities`
--
ALTER TABLE `userentities`
  ADD CONSTRAINT `userentities_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userentities_ibfk_2` FOREIGN KEY (`entityId`) REFERENCES `entities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
