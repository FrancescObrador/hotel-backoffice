-- Insert a hotel
INSERT INTO hotel (name, address, phone, email, stars) VALUES
('Hotel Sunshine', '123 Sun St', '1234567890', 'sunshine@example.com', 4),
('Hotel Rainbow', '456 Rainbow Rd', '1234567891', 'rainbow@example.com', 5),
('Hotel Moonlight', '789 Moonlight Ave', '1234567892', 'moonlight@example.com', 3),
('Hotel Starlight', '101 Starlight Blvd', '1234567893', 'starlight@example.com', 4),
('Hotel Paradise', '202 Paradise Ln', '1234567894', 'paradise@example.com', 5),
('Hotel Harmony', '303 Harmony Pl', '1234567895', 'harmony@example.com', 3),
('Hotel Bliss', '404 Bliss St', '1234567896', 'bliss@example.com', 4),
('Hotel Serenity', '505 Serenity Dr', '1234567897', 'serenity@example.com', 5),
('Hotel Tranquility', '606 Tranquility Ct', '1234567898', 'tranquility@example.com', 3),
('Hotel Nirvana', '707 Nirvana Way', '1234567899', 'nirvana@example.com', 4);

-- Seed data for room types
-- Hotel 1
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 1', 'Description for Room Type 1 Hotel 1', 2, 60.00, 1),
('Room Type 2 Hotel 1', 'Description for Room Type 2 Hotel 1', 4, 70.00, 1),
('Room Type 3 Hotel 1', 'Description for Room Type 3 Hotel 1', 6, 80.00, 1);

-- Hotel 2
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 2', 'Description for Room Type 1 Hotel 2', 2, 60.00, 2),
('Room Type 2 Hotel 2', 'Description for Room Type 2 Hotel 2', 4, 70.00, 2),
('Room Type 3 Hotel 2', 'Description for Room Type 3 Hotel 2', 6, 80.00, 2),
('Room Type 4 Hotel 2', 'Description for Room Type 4 Hotel 2', 8, 90.00, 2);

-- Hotel 3
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 3', 'Description for Room Type 1 Hotel 3', 2, 60.00, 3),
('Room Type 2 Hotel 3', 'Description for Room Type 2 Hotel 3', 4, 70.00, 3),
('Room Type 3 Hotel 3', 'Description for Room Type 3 Hotel 3', 6, 80.00, 3),
('Room Type 4 Hotel 3', 'Description for Room Type 4 Hotel 3', 8, 90.00, 3),
('Room Type 5 Hotel 3', 'Description for Room Type 5 Hotel 3', 10, 100.00, 3);

-- Hotel 4
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 4', 'Description for Room Type 1 Hotel 4', 2, 60.00, 4),
('Room Type 2 Hotel 4', 'Description for Room Type 2 Hotel 4', 4, 70.00, 4),
('Room Type 3 Hotel 4', 'Description for Room Type 3 Hotel 4', 6, 80.00, 4);

-- Hotel 5
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 5', 'Description for Room Type 1 Hotel 5', 2, 60.00, 5),
('Room Type 2 Hotel 5', 'Description for Room Type 2 Hotel 5', 4, 70.00, 5),
('Room Type 3 Hotel 5', 'Description for Room Type 3 Hotel 5', 6, 80.00, 5),
('Room Type 4 Hotel 5', 'Description for Room Type 4 Hotel 5', 8, 90.00, 5);

-- Hotel 6
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 6', 'Description for Room Type 1 Hotel 6', 2, 60.00, 6),
('Room Type 2 Hotel 6', 'Description for Room Type 2 Hotel 6', 4, 70.00, 6),
('Room Type 3 Hotel 6', 'Description for Room Type 3 Hotel 6', 6, 80.00, 6),
('Room Type 4 Hotel 6', 'Description for Room Type 4 Hotel 6', 8, 90.00, 6),
('Room Type 5 Hotel 6', 'Description for Room Type 5 Hotel 6', 10, 100.00, 6);

-- Hotel 7
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 7', 'Description for Room Type 1 Hotel 7', 2, 60.00, 7),
('Room Type 2 Hotel 7', 'Description for Room Type 2 Hotel 7', 4, 70.00, 7),
('Room Type 3 Hotel 7', 'Description for Room Type 3 Hotel 7', 6, 80.00, 7);

-- Hotel 8
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 8', 'Description for Room Type 1 Hotel 8', 2, 60.00, 8),
('Room Type 2 Hotel 8', 'Description for Room Type 2 Hotel 8', 4, 70.00, 8),
('Room Type 3 Hotel 8', 'Description for Room Type 3 Hotel 8', 6, 80.00, 8),
('Room Type 4 Hotel 8', 'Description for Room Type 4 Hotel 8', 8, 90.00, 8);

-- Hotel 9
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 9', 'Description for Room Type 1 Hotel 9', 2, 60.00, 9),
('Room Type 2 Hotel 9', 'Description for Room Type 2 Hotel 9', 4, 70.00, 9),
('Room Type 3 Hotel 9', 'Description for Room Type 3 Hotel 9', 6, 80.00, 9),
('Room Type 4 Hotel 9', 'Description for Room Type 4 Hotel 9', 8, 90.00, 9);

-- Hotel 10
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Room Type 1 Hotel 10', 'Description for Room Type 1 Hotel 10', 2, 60.00, 10),
('Room Type 2 Hotel 10', 'Description for Room Type 2 Hotel 10', 4, 70.00, 10),
('Room Type 3 Hotel 10', 'Description for Room Type 3 Hotel 10', 6, 80.00, 10),
('Room Type 4 Hotel 10', 'Description for Room Type 4 Hotel 10', 8, 90.00, 10),
('Room Type 5 Hotel 10', 'Description for Room Type 5 Hotel 10', 10, 100.00, 10);

-- Seed data for rooms
-- Hotel 1
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(101, 1, 1), (102, 1, 2), (103, 1, 3), (104, 1, 1), (105, 1, 2), 
(106, 1, 3), (107, 1, 1), (108, 1, 2), (109, 1, 3), (110, 1, 1),
(111, 1, 2), (112, 1, 3), (113, 1, 1), (114, 1, 2), (115, 1, 3);

-- Hotel 2
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(201, 2, 4), (202, 2, 1), (203, 2, 2), (204, 2, 3), (205, 2, 4), 
(206, 2, 1), (207, 2, 2), (208, 2, 3), (209, 2, 4), (210, 2, 1),
(211, 2, 2), (212, 2, 3), (213, 2, 4), (214, 2, 1), (215, 2, 2),
(216, 2, 3), (217, 2, 4), (218, 2, 1), (219, 2, 2), (220, 2, 3);

-- Hotel 3
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(301, 3, 1), (302, 3, 2), (303, 3, 3), (304, 3, 4), (305, 3, 5), 
(306, 3, 1), (307, 3, 2), (308, 3, 3), (309, 3, 4), (310, 3, 5),
(311, 3, 1), (312, 3, 2), (313, 3, 3), (314, 3, 4), (315, 3, 5),
(316, 3, 1), (317, 3, 2), (318, 3, 3), (319, 3, 4), (320, 3, 5),
(321, 3, 1), (322, 3, 2), (323, 3, 3), (324, 3, 4), (325, 3, 5);

-- Hotel 4
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(401, 4, 1), (402, 4, 2), (403, 4, 3), (404, 4, 1), (405, 4, 2), 
(406, 4, 3), (407, 4, 1), (408, 4, 2), (409, 4, 3), (410, 4, 1),
(411, 4, 2), (412, 4, 3), (413, 4, 1), (414, 4, 2), (415, 4, 3),
(416, 4, 1), (417, 4, 2), (418, 4, 3), (419, 4, 1), (420, 4, 2);

-- Hotel 5
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(501, 5, 1), (502, 5, 2), (503, 5, 3), (504, 5, 4), (505, 5, 1), 
(506, 5, 2), (507, 5, 3), (508, 5, 4), (509, 5, 1), (510, 5, 2),
(511, 5, 3), (512, 5, 4), (513, 5, 1), (514, 5, 2), (515, 5, 3),
(516, 5, 4), (517, 5, 1), (518, 5, 2), (519, 5, 3), (520, 5, 4);

-- Hotel 6
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(601, 6, 1), (602, 6, 2), (603, 6, 3), (604, 6, 4), (605, 6, 5), 
(606, 6, 1), (607, 6, 2), (608, 6, 3), (609, 6, 4), (610, 6, 5),
(611, 6, 1), (612, 6, 2), (613, 6, 3), (614, 6, 4), (615, 6, 5),
(616, 6, 1), (617, 6, 2), (618, 6, 3), (619, 6, 4), (620, 6, 5),
(621, 6, 1), (622, 6, 2), (623, 6, 3), (624, 6, 4), (625, 6, 5);

-- Hotel 7
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(701, 7, 1), (702, 7, 2), (703, 7, 3), (704, 7, 1), (705, 7, 2), 
(706, 7, 3), (707, 7, 1), (708, 7, 2), (709, 7, 3), (710, 7, 1),
(711, 7, 2), (712, 7, 3), (713, 7, 1), (714, 7, 2), (715, 7, 3);

-- Hotel 8
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(801, 8, 1), (802, 8, 2), (803, 8, 3), (804, 8, 4), (805, 8, 1), 
(806, 8, 2), (807, 8, 3), (808, 8, 4), (809, 8, 1), (810, 8, 2),
(811, 8, 3), (812, 8, 4), (813, 8, 1), (814, 8, 2), (815, 8, 3),
(816, 8, 4), (817, 8, 1), (818, 8, 2), (819, 8, 3), (820, 8, 4);

-- Hotel 9
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(901, 9, 1), (902, 9, 2), (903, 9, 3), (904, 9, 4), (905, 9, 1), 
(906, 9, 2), (907, 9, 3), (908, 9, 4), (909, 9, 1), (910, 9, 2),
(911, 9, 3), (912, 9, 4), (913, 9, 1), (914, 9, 2), (915, 9, 3),
(916, 9, 4), (917, 9, 1), (918, 9, 2), (919, 9, 3), (920, 9, 4);

-- Hotel 10
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(1001, 10, 1), (1002, 10, 2), (1003, 10, 3), (1004, 10, 4), (1005, 10, 5), 
(1006, 10, 1), (1007, 10, 2), (1008, 10, 3), (1009, 10, 4), (1010, 10, 5),
(1011, 10, 1), (1012, 10, 2), (1013, 10, 3), (1014, 10, 4), (1015, 10, 5),
(1016, 10, 1), (1017, 10, 2), (1018, 10, 3), (1019, 10, 3)

-- Seed data for board plans
-- Hotel 1
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 1', 0.00, 'room_only', 1),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 1', 20.00, 'bed_and_breakfast', 1),
('Half Board', 'Half Board plan for Hotel 1', 40.00, 'half_board', 1),
('Full Board', 'Full Board plan for Hotel 1', 60.00, 'full_board', 1),
('All Included', 'All Included plan for Hotel 1', 80.00, 'all_included', 1);

-- Hotel 2
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 2', 0.00, 'room_only', 2),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 2', 22.00, 'bed_and_breakfast', 2),
('Half Board', 'Half Board plan for Hotel 2', 42.00, 'half_board', 2),
('Full Board', 'Full Board plan for Hotel 2', 62.00, 'full_board', 2),
('All Included', 'All Included plan for Hotel 2', 82.00, 'all_included', 2);

-- Hotel 3
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 3', 0.00, 'room_only', 3),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 3', 24.00, 'bed_and_breakfast', 3),
('Half Board', 'Half Board plan for Hotel 3', 44.00, 'half_board', 3),
('Full Board', 'Full Board plan for Hotel 3', 64.00, 'full_board', 3),
('All Included', 'All Included plan for Hotel 3', 84.00, 'all_included', 3);

-- Hotel 4
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 4', 0.00, 'room_only', 4),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 4', 26.00, 'bed_and_breakfast', 4),
('Half Board', 'Half Board plan for Hotel 4', 46.00, 'half_board', 4),
('Full Board', 'Full Board plan for Hotel 4', 66.00, 'full_board', 4),
('All Included', 'All Included plan for Hotel 4', 86.00, 'all_included', 4);

-- Hotel 5
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 5', 0.00, 'room_only', 5),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 5', 28.00, 'bed_and_breakfast', 5),
('Half Board', 'Half Board plan for Hotel 5', 48.00, 'half_board', 5),
('Full Board', 'Full Board plan for Hotel 5', 68.00, 'full_board', 5),
('All Included', 'All Included plan for Hotel 5', 88.00, 'all_included', 5);

-- Hotel 6
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 6', 0.00, 'room_only', 6),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 6', 30.00, 'bed_and_breakfast', 6),
('Half Board', 'Half Board plan for Hotel 6', 50.00, 'half_board', 6),
('Full Board', 'Full Board plan for Hotel 6', 70.00, 'full_board', 6),
('All Included', 'All Included plan for Hotel 6', 90.00, 'all_included', 6);

-- Hotel 7
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 7', 0.00, 'room_only', 7),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 7', 32.00, 'bed_and_breakfast', 7),
('Half Board', 'Half Board plan for Hotel 7', 52.00, 'half_board', 7),
('Full Board', 'Full Board plan for Hotel 7', 72.00, 'full_board', 7),
('All Included', 'All Included plan for Hotel 7', 92.00, 'all_included', 7);

-- Hotel 8
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 8', 0.00, 'room_only', 8),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 8', 34.00, 'bed_and_breakfast', 8),
('Half Board', 'Half Board plan for Hotel 8', 54.00, 'half_board', 8),
('Full Board', 'Full Board plan for Hotel 8', 74.00, 'full_board', 8),
('All Included', 'All Included plan for Hotel 8', 94.00, 'all_included', 8);

-- Hotel 9
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 9', 0.00, 'room_only', 9),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 9', 36.00, 'bed_and_breakfast', 9),
('Half Board', 'Half Board plan for Hotel 9', 56.00, 'half_board', 9),
('Full Board', 'Full Board plan for Hotel 9', 76.00, 'full_board', 9),
('All Included', 'All Included plan for Hotel 9', 96.00, 'all_included', 9);

-- Hotel 10
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only plan for Hotel 10', 0.00, 'room_only', 10),
('Bed and Breakfast', 'Bed and Breakfast plan for Hotel 10', 38.00, 'bed_and_breakfast', 10),
('Half Board', 'Half Board plan for Hotel 10', 58.00, 'half_board', 10),
('Full Board', 'Full Board plan for Hotel 10', 78.00, 'full_board', 10),
('All Included', 'All Included plan for Hotel 10', 98.00, 'all_included', 10);

-- Seed data for customers
INSERT INTO customer (name, first_surname, second_surname, email, password, date_of_birth, phone, address) VALUES
('John', 'Doe', 'Smith', 'john.doe@example.com', 'password1', '1990-05-15', '+1234567890', '123 Main St, City'),
('Jane', 'Smith', 'Doe', 'jane.smith@example.com', 'password2', '1985-08-20', '+1987654321', '456 Elm St, Town'),
('David', 'Brown', 'Jones', 'david.brown@example.com', 'password3', '1988-12-10', '+1112223333', '789 Oak St, Village'),
('Emily', 'Wilson', 'Taylor', 'emily.wilson@example.com', 'password4', '1992-03-25', '+4445556666', '321 Maple Ave, County'),
('Michael', 'Johnson', 'Anderson', 'michael.johnson@example.com', 'password5', '1980-07-03', '+7778889999', '654 Pine Rd, State'),
('Sarah', 'Williams', 'Martinez', 'sarah.williams@example.com', 'password6', '1995-01-08', '+6667778888', '987 Birch Ln, Country'),
('Christopher', 'Jones', 'Garcia', 'christopher.jones@example.com', 'password7', '1976-09-12', '+3334445555', '246 Cedar Blvd, Town'),
('Jessica', 'Brown', 'Rodriguez', 'jessica.brown@example.com', 'password8', '1982-11-18', '+9990001111', '135 Spruce Dr, City'),
('Andrew', 'Lee', 'Lopez', 'andrew.lee@example.com', 'password9', '1991-04-30', '+2223334444', '864 Walnut St, Village'),
('Michelle', 'Davis', 'Hernandez', 'michelle.davis@example.com', 'password10', '1987-06-22', '+5556667777', '579 Oak Ave, County'),
('Daniel', 'Garcia', 'Lewis', 'daniel.garcia@example.com', 'password11', '1983-10-07', '+7778889999', '753 Maple Dr, State'),
('Ashley', 'Martinez', 'Hill', 'ashley.martinez@example.com', 'password12', '1993-02-14', '+4445556666', '246 Pine Ln, Country'),
('Matthew', 'Hernandez', 'Young', 'matthew.hernandez@example.com', 'password13', '1979-08-29', '+6667778888', '987 Cedar Rd, Town'),
('Amanda', 'Lopez', 'Scott', 'amanda.lopez@example.com', 'password14', '1984-12-15', '+3334445555', '753 Elm Blvd, City'),
('James', 'Scott', 'King', 'james.scott@example.com', 'password15', '1990-06-01', '+9990001111', '246 Maple St, Village'),
('Brittany', 'Young', 'White', 'brittany.young@example.com', 'password16', '1988-01-20', '+2223334444', '579 Oak Dr, County'),
('Andrew', 'King', 'Martin', 'andrew.king@example.com', 'password17', '1977-07-14', '+5556667777', '753 Pine Ave, State'),
('Stephanie', 'White', 'Walker', 'stephanie.white@example.com', 'password18', '1995-03-10', '+7778889999', '987 Cedar Ln, Country'),
('Justin', 'Martin', 'Hall', 'justin.martin@example.com', 'password19', '1981-11-25', '+4445556666', '246 Elm Rd, Town'),
('Lauren', 'Walker', 'Allen', 'lauren.walker@example.com', 'password20', '1986-05-05', '+6667778888', '753 Maple Blvd, City'),
('Brandon', 'Hall', 'Young', 'brandon.hall@example.com', 'password21', '1992-09-19', '+3334445555', '246 Cedar Dr, Village'),
('Rachel', 'Allen', 'Lopez', 'rachel.allen@example.com', 'password22', '1978-02-09', '+9990001111', '579 Oak Ave, County'),
('Ryan', 'Young', 'Gonzalez', 'ryan.young@example.com', 'password23', '1983-04-18', '+2223334444', '753 Pine Ln, State'),
('Melissa', 'Lopez', 'Perez', 'melissa.lopez@example.com', 'password24', '1991-08-03', '+5556667777', '987 Cedar Dr, Country'),
('Nicole', 'Perez', 'Hernandez', 'nicole.perez@example.com', 'password25', '1987-12-26', '+7778889999', '246 Elm Ave, Town'),
('Steven', 'Gonzalez', 'Lee', 'steven.gonzalez@example.com', 'password26', '1976-06-07', '+4445556666', '753 Maple Rd, City'),
('Kayla', 'Hernandez', 'Davis', 'kayla.hernandez@example.com', 'password27', '1993-01-31', '+6667778888', '579 Oak Blvd, Village'),
('Taylor', 'Lee', 'Garcia', 'taylor.lee@example.com', 'password28', '1979-09-15', '+3334445555', '753 Pine Dr, County'),
('Kevin', 'Davis', 'Scott', 'kevin.davis@example.com', 'password29', '1985-03-21', '+9990001111', '246 Cedar Ln, State'),
('Christina', 'Scott', 'Martinez', 'christina.scott@example.com', 'password30', '1990-07-11', '+2223334444', '579 Elm Ave, Country');
-- Seed data for additional customers (continued)
INSERT INTO customer (name, first_surname, second_surname, email, password, date_of_birth, phone, address) VALUES
('Ethan', 'Martinez', 'Hernandez', 'ethan.martinez@example.com', 'password31', '1986-02-14', '+1234567890', '123 Main St, City'),
('Olivia', 'Garcia', 'Wilson', 'olivia.garcia@example.com', 'password32', '1981-07-19', '+1987654321', '456 Elm St, Town'),
('Jacob', 'Rodriguez', 'Davis', 'jacob.rodriguez@example.com', 'password33', '1994-10-30', '+1112223333', '789 Oak St, Village'),
('Sophia', 'Lopez', 'Brown', 'sophia.lopez@example.com', 'password34', '1977-12-12', '+4445556666', '321 Maple Ave, County'),
('Mia', 'Hernandez', 'Wilson', 'mia.hernandez@example.com', 'password35', '1983-05-25', '+7778889999', '654 Pine Rd, State'),
('William', 'Scott', 'Young', 'william.scott@example.com', 'password36', '1992-01-08', '+6667778888', '987 Birch Ln, Country'),
('Isabella', 'Lewis', 'Gonzalez', 'isabella.lewis@example.com', 'password37', '1978-09-23', '+3334445555', '246 Cedar Blvd, Town'),
('James', 'Gonzalez', 'Scott', 'james.gonzalez@example.com', 'password38', '1984-11-28', '+9990001111', '135 Spruce Dr, City'),
('Alexander', 'Young', 'Martinez', 'alexander.young@example.com', 'password39', '1990-04-10', '+2223334444', '864 Walnut St, Village'),
('Charlotte', 'Perez', 'King', 'charlotte.perez@example.com', 'password40', '1987-06-22', '+5556667777', '579 Oak Ave, County'),
('Elijah', 'Allen', 'Perez', 'elijah.allen@example.com', 'password41', '1983-10-07', '+7778889999', '753 Maple Dr, State'),
('Avery', 'Taylor', 'Lee', 'avery.taylor@example.com', 'password42', '1993-02-14', '+4445556666', '246 Pine Ln, Country'),
('Benjamin', 'King', 'Hill', 'benjamin.king@example.com', 'password43', '1979-08-29', '+6667778888', '987 Cedar Rd, Town'),
('Evelyn', 'Hill', 'Young', 'evelyn.hill@example.com', 'password44', '1984-12-15', '+3334445555', '753 Elm Blvd, City'),
('Amelia', 'Walker', 'Martin', 'amelia.walker@example.com', 'password45', '1990-06-01', '+9990001111', '246 Maple St, Village'),
('Samantha', 'Hall', 'White', 'samantha.hall@example.com', 'password46', '1988-01-20', '+2223334444', '579 Oak Dr, County'),
('Noah', 'Martin', 'Walker', 'noah.martin@example.com', 'password47', '1977-07-14', '+5556667777', '753 Pine Ave, State'),
('Chloe', 'White', 'Allen', 'chloe.white@example.com', 'password48', '1995-03-10', '+7778889999', '987 Cedar Ln, Country'),
('Logan', 'Allen', 'Lopez', 'logan.allen@example.com', 'password49', '1981-11-25', '+4445556666', '246 Elm Rd, Town'),
('Harper', 'Lopez', 'Garcia', 'harper.lopez@example.com', 'password50', '1986-05-05', '+6667778888', '753 Maple Blvd, City'),
('Mason', 'Garcia', 'Young', 'mason.garcia@example.com', 'password51', '1992-09-19', '+3334445555', '246 Cedar Dr, Village'),
('Ella', 'Young', 'Rodriguez', 'ella.young@example.com', 'password52', '1978-02-09', '+9990001111', '579 Oak Ave, County'),
('Aiden', 'Rodriguez', 'Perez', 'aiden.rodriguez@example.com', 'password53', '1983-04-18', '+2223334444', '753 Pine Ln, State'),
('Aria', 'Perez', 'Hernandez', 'aria.perez@example.com', 'password54', '1991-08-03', '+5556667777', '987 Cedar Dr, Country'),
('Grayson', 'Hernandez', 'Davis', 'grayson.hernandez@example.com', 'password55', '1987-12-26', '+7778889999', '246 Elm Ave, Town'),
('Liam', 'Davis', 'Lee', 'liam.davis@example.com', 'password56', '1976-06-07', '+4445556666', '753 Maple Rd, City'),
('Victoria', 'Lee', 'Gonzalez', 'victoria.lee@example.com', 'password57', '1993-01-31', '+6667778888', '579 Oak Blvd, Village'),
('Madison', 'Gonzalez', 'Taylor', 'madison.gonzalez@example.com', 'password58', '1979-09-15', '+3334445555', '753 Pine Dr, County'),
('Gabriel', 'Taylor', 'Young', 'gabriel.taylor@example.com', 'password59', '1985-03-21', '+9990001111', '246 Cedar Ln, State'),
('Grace', 'Young', 'Martin', 'grace.young@example.com', 'password60', '1990-07-11', '+2223334444', '579 Elm Ave, Country');

-- Seed data for hotel features
INSERT INTO hotel_feature (name, description) VALUES
('Swimming Pool', 'Enjoy our hotel refreshing swimming pool.'),
('Spa', 'Relax and unwind at our luxurious spa.'),
('Fitness Center', 'Stay fit during your stay with our state-of-the-art fitness center.'),
('Restaurant', 'Indulge in delicious cuisine at our onsite restaurant.'),
('Bar/Lounge', 'Sip on cocktails and socialize at our stylish bar/lounge.'),
('Conference Facilities', 'Host successful meetings and events in our conference facilities.'),
('24-Hour Reception', 'Our friendly staff are available 24/7 to assist you.'),
('Concierge Service', 'Let our concierge assist you with all your needs during your stay.'),
('Airport Shuttle', 'Arrive and depart hassle-free with our convenient airport shuttle service.'),
('Free Wi-Fi', 'Stay connected with complimentary Wi-Fi throughout the hotel.');

-- Seed data for room features
INSERT INTO room_feature (name, description) VALUES
('Air Conditioning', 'Stay cool and comfortable with air conditioning in your room.'),
('Flat Screen TV', 'Watch your favorite shows and movies on our flat screen TV.'),
('Mini Fridge', 'Keep your drinks and snacks chilled with our in-room mini fridge.'),
('Ensuite Bathroom', 'Enjoy the convenience and privacy of an ensuite bathroom.'),
('Balcony', 'Relax and take in the views from your private balcony.'),
('Room Service', 'Indulge in delicious meals and snacks with our convenient room service.'),
('Work Desk', 'Stay productive with a dedicated work desk in your room.'),
('Iron/Ironing Board', 'Look your best with our iron and ironing board.'),
('Hair Dryer', 'Dry your hair quickly and easily with our in-room hair dryer.'),
('Safety Deposit Box', 'Keep your valuables secure with our in-room safety deposit box.');

-- Seed data for hotel feature mappings
-- Hotel 1
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(1, 1), (1, 3), (1, 5), (1, 7), (1, 9);

-- Hotel 2
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(2, 2), (2, 4), (2, 6), (2, 8), (2, 10);

-- Hotel 3
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(3, 1), (3, 3), (3, 5), (3, 7), (3, 9);

-- Hotel 4
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(4, 2), (4, 4), (4, 6), (4, 8), (4, 10);

-- Hotel 5
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(5, 1), (5, 3), (5, 5), (5, 7), (5, 9);

-- Hotel 6
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(6, 2), (6, 4), (6, 6), (6, 8), (6, 10);

-- Hotel 7
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(7, 1), (7, 3), (7, 5), (7, 7), (7, 9);

-- Hotel 8
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(8, 2), (8, 4), (8, 6), (8, 8), (8, 10);

-- Hotel 9
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(9, 1), (9, 3), (9, 5), (9, 7), (9, 9);

-- Hotel 10
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(10, 2), (10, 4), (10, 6), (10, 8), (10, 10);

-- Seed data for room feature mappings
-- Room Type 1 (Hotel 1)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(1, 1), (1, 3), (1, 5), (1, 7), (1, 9);

-- Room Type 2 (Hotel 1)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(2, 2), (2, 4), (2, 6), (2, 8), (2, 10);

-- Room Type 3 (Hotel 1)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(3, 1), (3, 3), (3, 5), (3, 7), (3, 9);

-- Room Type 4 (Hotel 1)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(4, 2), (4, 4), (4, 6), (4, 8), (4, 10);

-- Room Type 5 (Hotel 2)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(5, 1), (5, 3), (5, 5), (5, 7), (5, 9);

-- Room Type 6 (Hotel 2)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(6, 2), (6, 4), (6, 6), (6, 8), (6, 10);

-- Room Type 7 (Hotel 2)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(7, 1), (7, 3), (7, 5), (7, 7), (7, 9);

-- Room Type 8 (Hotel 2)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(8, 2), (8, 4), (8, 6), (8, 8), (8, 10);

-- Continue seed data for room feature mappings (continued)
-- Room Type 9 (Hotel 3)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(9, 1), (9, 3), (9, 5), (9, 7), (9, 9);

-- Room Type 10 (Hotel 3)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(10, 2), (10, 4), (10, 6), (10, 8), (10, 10);

-- Room Type 11 (Hotel 3)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(11, 1), (11, 3), (11, 5), (11, 7), (11, 9);

-- Room Type 12 (Hotel 3)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(12, 2), (12, 4), (12, 6), (12, 8), (12, 10);

-- Room Type 13 (Hotel 4)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(13, 1), (13, 3), (13, 5), (13, 7), (13, 9);

-- Room Type 14 (Hotel 4)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(14, 2), (14, 4), (14, 6), (14, 8), (14, 10);

-- Room Type 15 (Hotel 4)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(15, 1), (15, 3), (15, 5), (15, 7), (15, 9);

-- Room Type 16 (Hotel 4)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(16, 2), (16, 4), (16, 6), (16, 8), (16, 10);

-- Continue seed data for room feature mappings (continued)
-- Room Type 17 (Hotel 5)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(17, 1), (17, 3), (17, 5), (17, 7), (17, 9);

-- Room Type 18 (Hotel 5)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(18, 2), (18, 4), (18, 6), (18, 8), (18, 10);

-- Room Type 19 (Hotel 5)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(19, 1), (19, 3), (19, 5), (19, 7), (19, 9);

-- Room Type 20 (Hotel 5)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(20, 2), (20, 4), (20, 6), (20, 8), (20, 10);

-- Room Type 21 (Hotel 6)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(21, 1), (21, 3), (21, 5), (21, 7), (21, 9);

-- Room Type 22 (Hotel 6)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(22, 2), (22, 4), (22, 6), (22, 8), (22, 10);

-- Room Type 23 (Hotel 6)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(23, 1), (23, 3), (23, 5), (23, 7), (23, 9);

-- Room Type 24 (Hotel 6)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(24, 2), (24, 4), (24, 6), (24, 8), (24, 10);

-- Continue seed data for room feature mappings (continued)
-- Room Type 25 (Hotel 7)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(25, 1), (25, 3), (25, 5), (25, 7), (25, 9);

-- Room Type 26 (Hotel 7)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(26, 2), (26, 4), (26, 6), (26, 8), (26, 10);

-- Room Type 27 (Hotel 7)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(27, 1), (27, 3), (27, 5), (27, 7), (27, 9);

-- Room Type 28 (Hotel 7)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(28, 2), (28, 4), (28, 6), (28, 8), (28, 10);

-- Room Type 29 (Hotel 8)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(29, 1), (29, 3), (29, 5), (29, 7), (29, 9);

-- Room Type 30 (Hotel 8)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(30, 2), (30, 4), (30, 6), (30, 8), (30, 10);

-- Room Type 31 (Hotel 8)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(31, 1), (31, 3), (31, 5), (31, 7), (31, 9);

-- Room Type 32 (Hotel 8)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(32, 2), (32, 4), (32, 6), (32, 8), (32, 10);


-- Continue seed data for room feature mappings (continued)
-- Room Type 33 (Hotel 9)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(33, 1), (33, 3), (33, 5), (33, 7), (33, 9);

-- Room Type 34 (Hotel 9)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(34, 2), (34, 4), (34, 6), (34, 8), (34, 10);

-- Room Type 35 (Hotel 9)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(35, 1), (35, 3), (35, 5), (35, 7), (35, 9);

-- Room Type 36 (Hotel 9)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(36, 2), (36, 4), (36, 6), (36, 8), (36, 10);

-- Room Type 37 (Hotel 10)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(37, 1), (37, 3), (37, 5), (37, 7), (37, 9);

-- Room Type 38 (Hotel 10)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(38, 2), (38, 4), (38, 6), (38, 8), (38, 10);

-- Room Type 39 (Hotel 10)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(39, 1), (39, 3), (39, 5), (39, 7), (39, 9);

-- Room Type 40 (Hotel 10)
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(40, 2), (40, 4), (40, 6), (40, 8), (40, 10);

-- Seed data for bookings
INSERT INTO booking (check_in_date, check_out_date, customer_id, board_plan_id, room_id)
VALUES
('2024-08-01', '2024-08-07', 1, 1, 1),
('2024-08-03', '2024-08-10', 2, 2, 2),
('2024-08-05', '2024-08-12', 3, 3, 3),
('2024-08-07', '2024-08-14', 4, 4, 4),
('2024-08-09', '2024-08-16', 5, 5, 5),
('2024-08-11', '2024-08-18', 6, 1, 6),
('2024-08-13', '2024-08-20', 7, 2, 7),
('2024-08-15', '2024-08-22', 8, 3, 8),
('2024-08-17', '2024-08-24', 9, 4, 9),
('2024-08-19', '2024-08-26', 10, 5, 10),
('2024-08-21', '2024-08-28', 11, 1, 11),
('2024-08-23', '2024-08-30', 12, 2, 12),
('2024-08-25', '2024-09-01', 13, 3, 13),
('2024-08-27', '2024-09-03', 14, 4, 14),
('2024-08-29', '2024-09-05', 15, 5, 15),
('2024-08-31', '2024-09-07', 16, 1, 16),
('2024-09-02', '2024-09-09', 17, 2, 17),
('2024-09-04', '2024-09-11', 18, 3, 18),
('2024-09-06', '2024-09-13', 19, 4, 19),
('2024-09-08', '2024-09-15', 20, 5, 20);

-- Seed data for payments
INSERT INTO payment (amount, payment_date, payment_method, booking_id)
VALUES
(500.00, '2024-08-01', 'Credit Card', 1),
(700.00, '2024-08-03', 'PayPal', 2),
(800.00, '2024-08-05', 'Credit Card', 3),
(600.00, '2024-08-07', 'Cash', 4),
(900.00, '2024-08-09', 'Credit Card', 5),
(750.00, '2024-08-11', 'PayPal', 6),
(850.00, '2024-08-13', 'Credit Card', 7),
(950.00, '2024-08-15', 'Credit Card', 8),
(720.00, '2024-08-17', 'PayPal', 9),
(830.00, '2024-08-19', 'Credit Card', 10),
(560.00, '2024-08-21', 'Cash', 11),
(870.00, '2024-08-23', 'Credit Card', 12),
(920.00, '2024-08-25', 'Credit Card', 13),
(780.00, '2024-08-27', 'PayPal', 14),
(630.00, '2024-08-29', 'Credit Card', 15),
(890.00, '2024-08-31', 'Credit Card', 16),
(950.00, '2024-09-02', 'PayPal', 17),
(720.00, '2024-09-04', 'Credit Card', 18),
(830.00, '2024-09-06', 'Credit Card', 19),
(560.00, '2024-09-08', 'PayPal', 20);
