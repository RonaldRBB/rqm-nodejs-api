-- -----------------------------------------------------------------------------
--
-- Estructura de tabla para la tabla `ronaldrbb_rqm_quotes`
--
DROP TABLE IF EXISTS `ronaldrbb_rqm_quotes`;
CREATE TABLE `ronaldrbb_rqm_quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(400) NOT NULL,
  `author` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `quote` (`quote`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
