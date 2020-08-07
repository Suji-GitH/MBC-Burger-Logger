DROP DATABASE IF EXISTS Burger_Logger_db;

CREATE DATABASE Burger_Logger_db;

USE Burger_Logger_db;

CREATE TABLE burgers (
id INT auto_increment not null,
burger_name VARCHAR(100) not null,
devoured BOOLEAN default false,
primary key(id)
);
