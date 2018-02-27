SET SQL_SAFE_UPDATES = 0;

DROP DATABASE IF EXISTS bamazonDB;
-- Creates the "favorite_db" database --
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE inventory (
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  productName VARCHAR(30),
  price INTEGER(10),
  inStock INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Pokemon Cards", 5, 250);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Jordan II's", 500, 20);

INSERT INTO inventory (productName, price, inStock)
VALUES ("The Great Gatsby", 15, 200);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Suitcase", 50, 100);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Funky Socks", 10, 200);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Winter Coat", 150, 500);

INSERT INTO inventory (productName, price, inStock)
VALUES ("External Harddrive", 60, 40);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Flip Flops", 15, 1000);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Sweater", 50, 20);

INSERT INTO inventory (productName, price, inStock)
VALUES ("Holy Grail", 1000000, 1);

SELECT * FROM inventory