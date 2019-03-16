DROP DATABASE IF EXISTS ski;

CREATE DATABASE ski;

USE ski;

CREATE TABLE lifts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  start_elevation int NOT NULL,
  end_elevation int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE runs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  terrain varchar(50) NOT NULL,
  length integer NOT NULL,
  open boolean NOT NULL,
  FOREIGN KEY (lift_id) REFERENCES lift(id),
  PRIMARY KEY (ID)
);

CREATE TABLE places (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(200) NOT NULL,
  open_time TIME(3) NOT NULL,
  close_time TIME(3) NOT NULL,
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/