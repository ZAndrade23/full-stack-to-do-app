CREATE TABLE "characters" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250) NOT NULL,
	"anime" VARCHAR (100) NOT NULL
);
INSERT INTO "characters"
("name", "anime")
VALUES
('Son Goku','Dragonball Z'),
('Naruto Uzamaki','Naruto Shippuden'),
('Yuji Itadori','Jujutsu Kaisen'),
('Meliodas','Seven Deadly Sins'),
('Ken Kaneki','Tokyo Ghoul'),
('Eren Yeager','Attack On Titan'),
('Izuku Midoriya','My Hero Acadamia'),
('Takemichi Hanagaki', 'Tokyo Revengers'),
('Lelouch Lamperouge', 'Code Geass'),
('Ichigo Kurosaki', 'Bleach');

SELECT * FROM "characters";