CREATE DATABASE Registro;

create table Registro(
	id serial,
	usuario varchar(20),
	email varchar(50),
	password varchar(50) NOT NULL
);

INSERT INTO Registro (usuario, email, password) VALUES ('1234', 'federico@gmail.com', 'federico');


CREATE TABLE user(
  usuario varchar (20),
  password varchar (50)
);

INSERT INTO user (usuario, password) VALUES ('1234', '$2a$12$0soPQ.Ms.w61bXbH5m1ixeAe7RnUmhO7YOvM/fx6C1na2kQayIhXO')

