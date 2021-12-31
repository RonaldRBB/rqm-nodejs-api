-- --------------------------------------------------------
--
-- Base de datos: `ronaldrbb_rqm`
--
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `rqm_quotes_categories`
--
DROP TABLE IF EXISTS `rqm_quotes_categories`;

CREATE TABLE `rqm_quotes_categories` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) UNIQUE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `rqm_quotes_authors`
--
DROP TABLE IF EXISTS `rqm_quotes_authors`;

CREATE TABLE `rqm_quotes_authors` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) UNIQUE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `rqm_quotes`
--
DROP TABLE IF EXISTS `rqm_quotes`;

CREATE TABLE `rqm_quotes` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `quote` varchar(400) UNIQUE NOT NULL,
  `author_id` int NOT NULL,
  `category_id` int NOT NULL,
  CONSTRAINT `rqm_quotes_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `rqm_quotes_authors` (`id`),
  CONSTRAINT `rqm_quotes_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `rqm_quotes_categories` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Create view for quotes with author and category
CREATE VIEW `rqm_quotes_view` AS
SELECT
  `rqm_quotes`.`id` AS `id`,
  `rqm_quotes`.`quote` AS `quote`,
  `rqm_quotes_authors`.`name` AS `author`,
  `rqm_quotes_categories`.`name` AS `category`
FROM
  `rqm_quotes`
  INNER JOIN `rqm_quotes_authors` ON (
    `rqm_quotes`.`author_id` = `rqm_quotes_authors`.`id`
  )
  INNER JOIN `rqm_quotes_categories` ON (
    `rqm_quotes`.`category_id` = `rqm_quotes_categories`.`id`
  );
