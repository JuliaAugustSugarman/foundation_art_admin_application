CREATE TABLE "artwork" (
    "id" SERIAL PRIMARY KEY,
    "image" VARCHAR(1000) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "size" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
	"description" VARCHAR(250)
    );

CREATE TABLE "color_table" (
    "id" SERIAL PRIMARY KEY,
    "color" VARCHAR(100) NOT NULL
    
);

CREATE TABLE "style" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR(100) NOT NULL   
);

 CREATE TABLE "artist" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL   
);

CREATE TABLE "client" (
    "id" SERIAL PRIMARY KEY,
    "company" VARCHAR (120) NOT NULL,
    "location" VARCHAR (240),
    "address" VARCHAR (240),
    "contact_name" VARCHAR (120) NOT NULL,
    "contact_title" VARCHAR (120),
    "contact_email" VARCHAR (120) NOT NULL,
    "contact_phone" VARCHAR (120) NOT NULL,
    "notes" VARCHAR (400)
);
    
CREATE TABLE "junction" (
    "id" SERIAL PRIMARY KEY,
    "artwork_id" INT REFERENCES "artwork",
    "color_id" INT REFERENCES "color_table" ,
    "style_id" INT REFERENCES "style",
    "artist_id" INT REFERENCES "artist"   
);


CREATE TABLE "login" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL  
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);