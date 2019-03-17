DROP DATABASE IF EXISTS ski_resort;

CREATE DATABASE ski_resort;

USE ski_resort;

CREATE TABLE lifts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  start_elevation int NOT NULL,
  end_elevation int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE runs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  terrain varchar(50) NOT NULL,
  status boolean NOT NULL default 0,
  is_favorite boolean NOT NULL default 0,
  to_complete boolean NOT NULL default 0,
  lift_id integer NOT NULL,
  FOREIGN KEY (lift_id) REFERENCES lifts(id),
  PRIMARY KEY (id)
);

CREATE TABLE places (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(200) NOT NULL,
  open_time TIME(3) NOT NULL,
  close_time TIME(3) NOT NULL,
  PRIMARY KEY (id)
);

-- Populates lifts

INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Lookout Express", 6130, 8120);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Backside Express", 8020, 8610);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Promised Land Express", 8000, 8420);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Comstock Express", 7400, 8620);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Rendezvous Express", 7700, 8550);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Vista Express", 6950, 7700);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Arrow Express", 6950, 7400);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Tahoe Zephyr Express", 6950, 7620);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Big Springs Gondola Express", 6330, 6950);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Village", 6330, 6950);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Bear Paw", 6950, 7220);

-- Populates runs

INSERT into runs (name, terrain, status, is_favorite, to_complete, lift_id) VALUES ("Martis", "Black Diamond: Most Difficult", 1, 0, 0, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, lift_id) VALUES ("Boca", "Black Diamond: Most Difficult", 1, 0, 0, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, lift_id) VALUES ("Gooseneck", "Black Diamond: Most Difficult", 1, 0, 0, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, lift_id) VALUES ("Stampede", "Black Diamond: Most Difficult", 1, 0, 0, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, lift_id) VALUES ("Prosser", "Black Diamond: Most Difficult", 1, 0, 0, 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/