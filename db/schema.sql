DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id integer AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    primary key(id)
);