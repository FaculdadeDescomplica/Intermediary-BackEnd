DROP TABLE public."Courses" CASCADE;

DROP TABLE public."Evaluations" CASCADE;

DROP TABLE public."Teachers" CASCADE;

DROP TABLE public."Users" CASCADE;


CREATE TABLE "users" (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR ( 50 ) NOT NULL,
	last_name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) NOT NULL,
	gender VARCHAR(55) NOT NULL
);

create table "Courses" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

create table "Teachers" (
	id SERIAL PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	course_id INTEGER NOT null,
	CONSTRAINT fk_courses
      FOREIGN KEY(course_id) 
	  REFERENCES "Courses"(id)
);


create table "Evaluations" (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	concept VARCHAR (50) NOT null,
	course_id INTEGER NOT null,
	CONSTRAINT fk_courses
      FOREIGN KEY(course_id) 
	  REFERENCES "Courses"(id),
	CONSTRAINT fk_users
      FOREIGN KEY(user_id) 
	  REFERENCES "Users"(id)
);

select * from "Users";
select * from "Teachers";
select * from "Evaluations";
select * from "Courses";