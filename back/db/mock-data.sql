-- Insert hotels
INSERT INTO hotel (name, address, phone, email, stars) VALUES
('Hotel A', '123 Main St, City A', '123-456-7890', 'contact@hotela.com', 4),
('Hotel B', '456 Maple Ave, City B', '234-567-8901', 'contact@hotelb.com', 5),
('Hotel C', '789 Oak Dr, City C', '345-678-9012', 'contact@hotelc.com', 3),
('Hotel D', '101 Pine Ln, City D', '456-789-0123', 'contact@hoteld.com', 4),
('Hotel E', '202 Cedar St, City E', '567-890-1234', 'contact@hotele.com', 2);

-- Insert hotel media
INSERT INTO hotel_media (url, hotel_id) VALUES
('http://localhost:3000/images/hotel-1.jpeg', 1),
('http://localhost:3000/images/hotel-2.jpeg', 2),
('http://localhost:3000/images/hotel-3.jpeg', 3),
('http://localhost:3000/images/hotel-4.jpeg', 4),
('http://localhost:3000/images/hotel-5.jpeg', 5);

-- Insert hotel features
INSERT INTO hotel_feature (name, description) VALUES
('Free WiFi', 'High-speed internet access available in all areas.'),
('Parking', 'Free parking available for all guests.'),
('Swimming Pool', 'Outdoor swimming pool available for guests.'),
('Fitness Center', 'Fully equipped fitness center open 24/7.'),
('Restaurant', 'On-site restaurant serving breakfast, lunch, and dinner.'),
('Spa', 'Full-service spa offering massages and treatments.'),
('Bar', 'Lounge bar serving a variety of drinks and snacks.'),
('Conference Room', 'Meeting and conference facilities available.'),
('Laundry Service', 'Laundry and dry cleaning services available.'),
('Airport Shuttle', 'Free airport shuttle service for guests.');

-- Map hotel features to hotels
INSERT INTO hotel_feature_mapping (hotel_id, feature_id) VALUES
(1, 1), (1, 2), (1, 3), (2, 1), (2, 4), (2, 5), (3, 1), (3, 6), (3, 7),
(4, 1), (4, 8), (4, 9), (5, 1), (5, 2), (5, 10);

-- Insert room types for each hotel
INSERT INTO room_type (name, description, capacity, base_price, hotel_id) VALUES
('Single Room', 'A single room with one bed.', 1, 100.00, 1),
('Double Room', 'A double room with two beds.', 2, 150.00, 1),
('Suite', 'A luxurious suite with separate living area.', 4, 300.00, 1),
('Single Room', 'A single room with one bed.', 1, 100.00, 2),
('Double Room', 'A double room with two beds.', 2, 150.00, 2),
('Suite', 'A luxurious suite with separate living area.', 4, 300.00, 2),
('Single Room', 'A single room with one bed.', 1, 100.00, 3),
('Double Room', 'A double room with two beds.', 2, 150.00, 3),
('Suite', 'A luxurious suite with separate living area.', 4, 300.00, 3),
('Single Room', 'A single room with one bed.', 1, 100.00, 4),
('Double Room', 'A double room with two beds.', 2, 150.00, 4),
('Suite', 'A luxurious suite with separate living area.', 4, 300.00, 4),
('Single Room', 'A single room with one bed.', 1, 100.00, 5),
('Double Room', 'A double room with two beds.', 2, 150.00, 5),
('Suite', 'A luxurious suite with separate living area.', 4, 300.00, 5);

-- Insert rooms for each hotel
INSERT INTO room (number, hotel_id, room_type_id) VALUES
(101, 1, 1), (102, 1, 2), (103, 1, 3), (104, 1, 1), (105, 1, 2),
(201, 2, 4), (202, 2, 5), (203, 2, 6), (204, 2, 4), (205, 2, 5),
(301, 3, 7), (302, 3, 8), (303, 3, 9), (304, 3, 7), (305, 3, 8),
(401, 4, 10), (402, 4, 11), (403, 4, 12), (404, 4, 10), (405, 4, 11),
(501, 5, 13), (502, 5, 14), (503, 5, 15), (504, 5, 13), (505, 5, 14);

-- Insert room features
INSERT INTO room_feature (name, description) VALUES
('Air Conditioning', 'Room equipped with air conditioning.'),
('Mini Bar', 'Room equipped with a mini bar.'),
('Room Service', '24-hour room service available.'),
('Balcony', 'Room with a private balcony.'),
('Sea View', 'Room with a view of the sea.'),
('Flat Screen TV', 'Room equipped with a flat screen TV.'),
('Coffee Maker', 'Room equipped with a coffee maker.'),
('Safe', 'Room equipped with a safe.'),
('Free Toiletries', 'Complimentary toiletries provided.'),
('Hair Dryer', 'Room equipped with a hair dryer.');

-- Map room features to room types
INSERT INTO room_feature_mapping (room_type_id, room_feature_id) VALUES
(1, 1), (1, 2), (1, 3), (2, 1), (2, 4), (2, 5), (3, 1), (3, 6), (3, 7),
(4, 1), (4, 8), (4, 9), (5, 1), (5, 10), (5, 3), (6, 1), (6, 2), (6, 4),
(7, 1), (7, 5), (7, 6), (8, 1), (8, 7), (8, 8), (9, 1), (9, 9), (9, 10),
(10, 1), (10, 3), (10, 4), (11, 1), (11, 5), (11, 6), (12, 1), (12, 7), (12, 8),
(13, 1), (13, 9), (13, 10), (14, 1), (14, 2), (14, 3), (15, 1), (15, 4), (15, 5);

-- Insert room media
INSERT INTO room_media (url, room_type_id) VALUES
('http://localhost:3000/images/room-1.jpeg', 1),
('http://localhost:3000/images/room-2.jpeg', 2),
('http://localhost:3000/images/room-3.jpeg', 3);

-- Insert board plans for each hotel
INSERT INTO board_plan (name, description, price, type, hotel_id) VALUES
('Room Only', 'Room only, no meals included.', 0.00, 'room_only', 1),
('Bed and Breakfast', 'Room and breakfast included.', 20.00, 'bed_and_breakfast', 1),
('Half Board', 'Room, breakfast, and dinner included.', 50.00, 'half_board', 1),
('Full Board', 'Room and all meals included.', 80.00, 'full_board', 1),
('All Included', 'All meals and drinks included.', 100.00, 'all_included', 1),
('Room Only', 'Room only, no meals included.', 0.00, 'room_only', 2),
('Bed and Breakfast', 'Room and breakfast included.', 20.00, 'bed_and_breakfast', 2),
('Half Board', 'Room, breakfast, and dinner included.', 50.00, 'half_board', 2),
('Full Board', 'Room and all meals included.', 80.00, 'full_board', 2),
('All Included', 'All meals and drinks included.', 100.00, 'all_included', 2),
('Room Only', 'Room only, no meals included.', 0.00, 'room_only', 3),
('Bed and Breakfast', 'Room and breakfast included.', 20.00, 'bed_and_breakfast', 3),
('Half Board', 'Room, breakfast, and dinner included.', 50.00, 'half_board', 3),
('Full Board', 'Room and all meals included.', 80.00, 'full_board', 3),
('All Included', 'All meals and drinks included.', 100.00, 'all_included', 3),
('Room Only', 'Room only, no meals included.', 0.00, 'room_only', 4),
('Bed and Breakfast', 'Room and breakfast included.', 20.00, 'bed_and_breakfast', 4),
('Half Board', 'Room, breakfast, and dinner included.', 50.00, 'half_board', 4),
('Full Board', 'Room and all meals included.', 80.00, 'full_board', 4),
('All Included', 'All meals and drinks included.', 100.00, 'all_included', 4),
('Room Only', 'Room only, no meals included.', 0.00, 'room_only', 5),
('Bed and Breakfast', 'Room and breakfast included.', 20.00, 'bed_and_breakfast', 5),
('Half Board', 'Room, breakfast, and dinner included.', 50.00, 'half_board', 5),
('Full Board', 'Room and all meals included.', 80.00, 'full_board', 5),
('All Included', 'All meals and drinks included.', 100.00, 'all_included', 5);

-- Insert customers
INSERT INTO customer (name, first_surname, second_surname, email, password, date_of_birth, phone, address) VALUES
('John', 'Doe', 'Smith', 'john.doe@example.com', 'password123', '1985-02-15', '123-456-7890', '456 Elm St, City A'),
('Jane', 'Doe', '', 'jane.doe@example.com', 'password123', '1990-05-20', '234-567-8901', '789 Maple Ave, City B'),
('Alice', 'Johnson', '', 'alice.johnson@example.com', 'password123', '1988-07-25', '345-678-9012', '101 Oak Dr, City C'),
('Bob', 'Brown', '', 'bob.brown@example.com', 'password123', '1975-11-30', '456-789-0123', '202 Pine Ln, City D'),
('Eve', 'Davis', '', 'eve.davis@example.com', 'password123', '1995-01-10', '567-890-1234', '303 Cedar St, City E'),
('Charlie', 'Wilson', '', 'charlie.wilson@example.com', 'password123', '1983-03-12', '678-901-2345', '404 Elm St, City A'),
('Dana', 'Martinez', '', 'dana.martinez@example.com', 'password123', '1987-09-19', '789-012-3456', '505 Maple Ave, City B'),
('Ethan', 'Garcia', '', 'ethan.garcia@example.com', 'password123', '1992-06-21', '890-123-4567', '606 Oak Dr, City C'),
('Grace', 'Rodriguez', '', 'grace.rodriguez@example.com', 'password123', '1981-10-11', '901-234-5678', '707 Pine Ln, City D'),
('Frank', 'Martinez', '', 'frank.martinez@example.com', 'password123', '1978-04-03', '012-345-6789', '808 Cedar St, City E');

-- Insert bookings
INSERT INTO booking (check_in_date, check_out_date, customer_id, board_plan_id) VALUES
('2024-08-01', '2024-08-07', 1, 1),
('2024-08-05', '2024-08-10', 2, 2),
('2024-08-10', '2024-08-15', 3, 3),
('2024-08-15', '2024-08-20', 4, 4),
('2024-08-20', '2024-08-25', 5, 5),
('2024-08-01', '2024-08-10', 6, 6),
('2024-08-10', '2024-08-15', 7, 7),
('2024-08-15', '2024-08-20', 8, 8),
('2024-08-20', '2024-08-25', 9, 9),
('2024-08-01', '2024-08-07', 10, 10);

-- Insert booking room mappings
INSERT INTO booking_room_mapping (booking_id, room_id) VALUES
(1, 101), (1, 102), (1, 103),
(2, 201), (2, 202), (2, 203),
(3, 301), (3, 302), (3, 303),
(4, 401), (4, 402), (4, 403),
(5, 501), (5, 502), (5, 503),
(6, 101), (6, 104), (6, 105),
(7, 201), (7, 204), (7, 205),
(8, 301), (8, 304), (8, 305),
(9, 401), (9, 404), (9, 405),
(10, 501), (10, 504), (10, 505);

-- Insert payments
INSERT INTO payment (amount, payment_date, payment_method, booking_id) VALUES
(700.00, '2024-07-31', 'Credit Card', 1),
(1400.00, '2024-07-31', 'Debit Card', 2),
(2100.00, '2024-07-31', 'PayPal', 3),
(3200.00, '2024-07-31', 'Credit Card', 4),
(4000.00, '2024-07-31', 'Debit Card', 5),
(700.00, '2024-07-31', 'Credit Card', 6),
(1400.00, '2024-07-31', 'Debit Card', 7),
(2100.00, '2024-07-31', 'PayPal', 8),
(3200.00, '2024-07-31', 'Credit Card', 9),
(700.00, '2024-07-31', 'Debit Card', 10);
