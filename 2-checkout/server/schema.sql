DROP DATABASE checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE address (
  id INT NOT NULL AUTO_INCREMENT,
  -- user_id INT NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE payment (
  id INT NOT NULL AUTO_INCREMENT,
  -- user_id INT NOT NULL,
  cc VARCHAR(255) NOT NULL,
  exp INT NOT NULL,
  cvv INT NOT NULL,
  bill_zip INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (user_id) REFERENCES user(id)
);

-- CREATE TABLE cart (
--   id INT NOT NULL AUTO_INCREMENT,
--   user_id INT NOT NULL,
--   cart VARCHAR(255) NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- );

/* mysql -u root < server/schema.sql */