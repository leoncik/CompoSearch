-- CREATE TABLES
create TABLE COMPOSERS (
	id SERIAL PRIMARY KEY,
	last_name VARCHAR(50),
	first_name VARCHAR(50),
	avatar_file_name VARCHAR(300) DEFAULT '/avatars/default-avatar.png'
);

CREATE TABLE COMPOSER_DETAIL (
    id INT,
    composer_id INT,
    birthdate DATE,
    nationality VARCHAR(100),
    biography TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (composer_id) REFERENCES COMPOSERS(id) ON DELETE CASCADE 
	-- ON DELETE CASCADE: if a composer is deleted from the "COMPOSERS" table, the related rows in the "COMPOSER_DETAIL" table will be automatically deleted as well.
);

-- POPULATE COMPOSERS
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (1, 'Bach', 'Johann Sebastian');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (2, 'Mozart', 'Wolfgang Amadeus');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (3, 'Beethoven', 'Ludwig van');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (4, 'Chopin', 'Frédéric');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (5, 'Debussy', 'Claude');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (6, 'Handel', 'George Frideric');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (7, 'Haydn', 'Joseph');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (8, 'Schubert', 'Franz');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (9, 'Tchaikovsky', 'Pyotr Ilyich');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (10, 'Vivaldi', 'Antonio');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (11, 'Brahms', 'Johannes');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (12, 'Schumann', 'Robert');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (13, 'Mendelssohn', 'Felix');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (14, 'Strauss', 'Johann II');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (15, 'Wagner', 'Richard');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (16, 'Pachelbel', 'Johann');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (17, 'Grieg', 'Edvard');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (18, 'Monteverdi', 'Claudio');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (19, 'Liszt', 'Franz');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (20, 'Puccini', 'Giacomo');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (21, 'Bizet', 'Georges');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (22, 'Purcell', 'Henry');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (23, 'Gershwin', 'George');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (24, 'Verdi', 'Giuseppe');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (25, 'Dvorak', 'Antonin');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (26, 'Rachmaninoff', 'Sergei');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (27, 'Saint-Saëns', 'Camille');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (28, 'Orff', 'Carl');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (29, 'Mahler', 'Gustav');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (30, 'Sibelius', 'Jean');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (31, 'Grieg', 'Edvard');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (32, 'Elgar', 'Edward');
INSERT INTO COMPOSERS (id, last_name, first_name) VALUES (33, 'Ravel', 'Maurice');


-- POPULATE COMPOSER DETAIL
INSERT INTO COMPOSER_DETAIL (id, composer_id, birthdate, nationality, biography)
VALUES
    (1, 1, '1685-03-21', 'German', 'Johann Sebastian Bach was a German composer and musician of the Baroque period...'),
    (2, 2, '1756-01-27', 'Austrian', 'Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical era...'),
    (3, 3, '1770-12-17', 'German', 'Ludwig van Beethoven was a German composer and pianist whose music bridged the Classical and Romantic eras...'),
    (4, 4, '1810-03-01', 'Polish', 'Frédéric Chopin was a Polish composer and virtuoso pianist of the Romantic era...'),
    (5, 5, '1862-08-22', 'French', 'Claude Debussy was a French composer who developed a unique style of musical impressionism...'),
    (6, 6, '1685-02-23', 'German', 'George Frideric Handel was a German, later British, Baroque composer known for his operas, oratorios, and instrumental compositions...'),
    (7, 7, '1732-03-31', 'Austrian', 'Joseph Haydn was an Austrian composer of the Classical period and played a pivotal role in the development of the symphony and string quartet...'),
    (8, 8, '1797-01-31', 'Austrian', 'Franz Schubert was an Austrian composer known for his songs (lieder) and symphonic works...'),
    (9, 9, '1840-05-07', 'Russian', 'Pyotr Ilyich Tchaikovsky was a Russian composer known for his ballets, symphonies, and operas...'),
    (10, 10, '1678-03-04', 'Italian', 'Antonio Vivaldi was an Italian Baroque composer known for his instrumental concertos, especially "The Four Seasons"...'),
    (11, 11, '1833-05-07', 'German', 'Johannes Brahms was a German composer and pianist known for his symphonies, chamber music, and choral compositions...'),
    (12, 12, '1810-06-08', 'German', 'Robert Schumann was a German composer and influential music critic. He is known for his piano music, lieder, and symphonies...'),
    (13, 13, '1809-02-03', 'German', 'Felix Mendelssohn was a German composer, conductor, and pianist known for his romantic-style music and his revival of interest in J.S. Bach...'),
    (14, 14, '1825-10-25', 'Austrian', 'Johann Strauss II was an Austrian composer known for his waltzes, polkas, and operettas, often referred to as the "Waltz King"...'),
    (15, 15, '1813-05-22', 'German', 'Richard Wagner was a German composer known for his innovative and monumental operas, including "Tristan and Isolde" and "The Ring Cycle"...'),
    (16, 16, '1653-09-01', 'German', 'Johann Pachelbel was a German composer and organist known for his contributions to the Baroque era, particularly his famous "Canon in D"...'),
    (17, 17, '1843-06-15', 'Norwegian', 'Edvard Grieg was a Norwegian composer known for his nationalistic works, including the famous "Peer Gynt" suite and piano concerto...'),
    (18, 18, '1567-05-15', 'Italian', 'Claudio Monteverdi was an Italian composer and a pioneer in the transition from the Renaissance to the Baroque periods of music...'),
    (19, 19, '1811-10-22', 'Hungarian', 'Franz Liszt was a Hungarian composer and pianist known for his virtuosic piano compositions and his contributions to the symphonic poem genre...'),
    (20, 20, '1858-12-22', 'Italian', 'Giacomo Puccini was an Italian composer known for his operas, including "La Bohème," "Tosca," and "Madama Butterfly"...'),
    (21, 21, '1838-10-25', 'French', 'Georges Bizet was a French composer known for his opera "Carmen" and his contributions to the operatic and orchestral repertoire...'),
    (22, 22, '1659-09-10', 'English', 'Henry Purcell was an English composer known for his works for the stage, including the semi-operas "Dido and Aeneas" and "The Fairy-Queen"...'),
    (23, 23, '1898-09-26', 'American', 'George Gershwin was an American composer known for blending classical and jazz elements, famous for works like "Rhapsody in Blue" and "Porgy and Bess"...'),
    (24, 24, '1813-10-09', 'Italian', 'Giuseppe Verdi was an Italian composer known for his operas, which include "Aida," "La Traviata," and "Rigoletto," among others...'),
    (25, 25, '1841-09-08', 'Czech', 'Antonín Dvořák was a Czech composer known for his symphonies, chamber music, and folk-inspired compositions, including his "New World Symphony"...'),
    (26, 26, '1873-04-01', 'Russian', 'Sergei Rachmaninoff was a Russian composer and pianist known for his lush melodies and virtuosic piano compositions, such as his piano concertos and "Rhapsody on a Theme of Paganini"...'),
    (27, 27, '1835-10-09', 'French', 'Camille Saint-Saëns was a French composer known for his diverse body of work, including symphonies, concertos, and the popular orchestral work "Carnival of the Animals"...'),
    (28, 28, '1895-07-10', 'German', 'Carl Orff was a German composer known for his choral and stage works, most notably "Carmina Burana," which remains one of his most popular compositions...'),
    (29, 29, '1860-07-07', 'Austrian', 'Gustav Mahler was an Austrian composer and conductor known for his emotionally charged symphonies and his contributions to the late Romantic era...'),
    (30, 30, '1865-12-08', 'Finnish', 'Jean Sibelius was a Finnish composer known for his nationalist and symphonic works, with his tone poem "Finlandia" being one of his most famous compositions...'),
    (31, 31, '1843-06-15', 'Norwegian', 'Edvard Grieg was a Norwegian composer known for his nationalistic works, including the famous "Peer Gynt" suite and piano concerto...'),
    (32, 32, '1857-06-02', 'English', 'Edward Elgar was an English composer known for his "Pomp and Circumstance" marches, orchestral works, and the Enigma Variations...'),
    (33, 33, '1875-03-07', 'French', 'Maurice Ravel was a French composer known for his impressionistic and neoclassical compositions, including "Boléro," "Daphnis et Chloé," and "Pavane for a Dead Princess"...');
    ;

