DROP 
  TABLE IF EXISTS "public"."board_plan";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
DROP 
  TYPE IF EXISTS "public"."board_type";
CREATE TYPE "public"."board_type" AS ENUM (
  'room_only', 'bed_and_breakfast', 
  'half_board', 'full_board', 'all_included'
);
-- Table Definition
CREATE TABLE "public"."board_plan" (
  "id" int4 NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "description" text, 
  "price" numeric(5, 2), 
  "type" "public"."board_type", 
  "hotel_id" int4, 
  "created_at" timestamp DEFAULT '2024-06-12 13:49:34.182215' :: timestamp without time zone, 
  "modified_at" timestamp DEFAULT '2024-06-12 13:49:34.182215' :: timestamp without time zone, 
  CONSTRAINT "board_plan_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotel"("id"), 
  PRIMARY KEY ("id")
);
DROP 
  TABLE IF EXISTS "public"."booking";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."booking" (
  "id" int4 NOT NULL, 
  "check_in_date" date NOT NULL, 
  "check_out_date" date NOT NULL, 
  "customer_id" int4, 
  "board_plan_id" int4, 
  "room_id" int4, 
  "created_at" timestamp DEFAULT '2024-06-12 13:49:34.16754' :: timestamp without time zone, 
  CONSTRAINT "booking_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "public"."room"("id"), 
  CONSTRAINT "booking_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customer"("id"), 
  CONSTRAINT "booking_board_plan_id_fkey" FOREIGN KEY ("board_plan_id") REFERENCES "public"."board_plan"("id"), 
  PRIMARY KEY ("id")
);
-- Indices
CREATE INDEX booking_customer_id_idx ON public.booking USING btree (customer_id) CREATE INDEX booking_room_id_idx ON public.booking USING btree (room_id);
DROP 
  TABLE IF EXISTS "public"."customer";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."customer" (
  "id" int4 NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "first_surname" varchar(255), 
  "second_surname" varchar(255), 
  "email" varchar(255) NOT NULL, 
  "password" varchar(255) NOT NULL, 
  "date_of_birth" date NOT NULL, 
  "phone" varchar(15) NOT NULL, 
  "address" varchar(255), 
  "created_at" timestamp DEFAULT '2024-06-12 13:49:34.203' :: timestamp without time zone, 
  PRIMARY KEY ("id")
);
DROP 
  TABLE IF EXISTS "public"."hotel";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."hotel" (
  "id" int4 NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "address" varchar(255) NOT NULL, 
  "phone" varchar(15) NOT NULL, 
  "email" varchar(255) NOT NULL, 
  "stars" int4, 
  PRIMARY KEY ("id")
);
-- Indices
CREATE INDEX hotel_name_idx ON public.hotel USING btree (name) CREATE INDEX hotel_address_idx ON public.hotel USING btree (address) CREATE INDEX hotel_stars_idx ON public.hotel USING btree (stars);
DROP 
  TABLE IF EXISTS "public"."hotel_feature";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."hotel_feature" (
  "id" int4 NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "description" text, 
  PRIMARY KEY ("id")
);
-- Indices
CREATE UNIQUE INDEX hotel_feature_name_key ON public.hotel_feature USING btree (name);
DROP 
  TABLE IF EXISTS "public"."hotel_feature_mapping";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."hotel_feature_mapping" (
  "hotel_id" int4, 
  "feature_id" int4, 
  CONSTRAINT "hotel_feature_mapping_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotel"("id"), 
  CONSTRAINT "hotel_feature_mapping_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "public"."hotel_feature"("id")
);
DROP 
  TABLE IF EXISTS "public"."hotel_media";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."hotel_media" (
  "id" int4 NOT NULL, 
  "url" varchar(255), 
  "hotel_id" int4, 
  CONSTRAINT "hotel_media_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotel"("id"), 
  PRIMARY KEY ("id")
);
DROP 
  TABLE IF EXISTS "public"."payment";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."payment" (
  "id" int4 NOT NULL, 
  "amount" numeric(10, 2), 
  "payment_date" date, 
  "payment_method" varchar(255), 
  "booking_id" int4, 
  "created_at" timestamp DEFAULT '2024-06-12 13:49:34.22396' :: timestamp without time zone, 
  CONSTRAINT "payment_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "public"."booking"("id"), 
  PRIMARY KEY ("id")
);
DROP 
  TABLE IF EXISTS "public"."room";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."room" (
  "id" int4 NOT NULL, 
  "number" int4, 
  "hotel_id" int4, 
  "room_type_id" int4, 
  CONSTRAINT "room_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotel"("id"), 
  CONSTRAINT "room_room_type_id_fkey" FOREIGN KEY ("room_type_id") REFERENCES "public"."room_type"("id"), 
  PRIMARY KEY ("id")
);
DROP 
  TABLE IF EXISTS "public"."room_feature";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."room_feature" (
  "id" int4 NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "description" text, 
  PRIMARY KEY ("id")
);
-- Indices
CREATE UNIQUE INDEX room_feature_name_key ON public.room_feature USING btree (name);
DROP 
  TABLE IF EXISTS "public"."room_feature_mapping";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."room_feature_mapping" (
  "room_type_id" int4, 
  "room_feature_id" int4, 
  CONSTRAINT "room_feature_mapping_room_type_id_fkey" FOREIGN KEY ("room_type_id") REFERENCES "public"."room_type"("id"), 
  CONSTRAINT "room_feature_mapping_room_feature_id_fkey" FOREIGN KEY ("room_feature_id") REFERENCES "public"."room_feature"("id")
);
DROP 
  TABLE IF EXISTS "public"."room_media";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."room_media" (
  "id" int4 NOT NULL, 
  "url" varchar(255) NOT NULL, 
  "room_type_id" int4, 
  CONSTRAINT "room_media_room_type_id_fkey" FOREIGN KEY ("room_type_id") REFERENCES "public"."room_type"("id"), 
  PRIMARY KEY ("id")
);
-- Indices
CREATE UNIQUE INDEX room_media_url_key ON public.room_media USING btree (url);
DROP 
  TABLE IF EXISTS "public"."room_type";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.
-- Table Definition
CREATE TABLE "public"."room_type" (
  "id" int4 NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "description" text NOT NULL, 
  "capacity" int4 NOT NULL, 
  "base_price" numeric(5, 2) NOT NULL, 
  "hotel_id" int4, 
  PRIMARY KEY ("id")
);
INSERT INTO "public"."board_plan" (
  "id", "name", "description", "price", 
  "type", "hotel_id", "created_at", 
  "modified_at"
) 
VALUES 
  (
    1, 'Room Only', 'Room only plan for Hotel 1', 
    0.00, 'room_only', 1, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  );
INSERT INTO "public"."board_plan" (
  "id", "name", "description", "price", 
  "type", "hotel_id", "created_at", 
  "modified_at"
) 
VALUES 
  (
    2, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 1', 
    20.00, 'bed_and_breakfast', 1, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  );
INSERT INTO "public"."board_plan" (
  "id", "name", "description", "price", 
  "type", "hotel_id", "created_at", 
  "modified_at"
) 
VALUES 
  (
    3, 'Half Board', 'Half Board plan for Hotel 1', 
    40.00, 'half_board', 1, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  );
INSERT INTO "public"."board_plan" (
  "id", "name", "description", "price", 
  "type", "hotel_id", "created_at", 
  "modified_at"
) 
VALUES 
  (
    4, 'Full Board', 'Full Board plan for Hotel 1', 
    60.00, 'full_board', 1, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    5, 'All Included', 'All Included plan for Hotel 1', 
    80.00, 'all_included', 1, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    6, 'Room Only', 'Room only plan for Hotel 2', 
    0.00, 'room_only', 2, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    7, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 2', 
    22.00, 'bed_and_breakfast', 2, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    8, 'Half Board', 'Half Board plan for Hotel 2', 
    42.00, 'half_board', 2, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    9, 'Full Board', 'Full Board plan for Hotel 2', 
    62.00, 'full_board', 2, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    10, 'All Included', 'All Included plan for Hotel 2', 
    82.00, 'all_included', 2, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    11, 'Room Only', 'Room only plan for Hotel 3', 
    0.00, 'room_only', 3, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    12, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 3', 
    24.00, 'bed_and_breakfast', 3, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    13, 'Half Board', 'Half Board plan for Hotel 3', 
    44.00, 'half_board', 3, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    14, 'Full Board', 'Full Board plan for Hotel 3', 
    64.00, 'full_board', 3, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    15, 'All Included', 'All Included plan for Hotel 3', 
    84.00, 'all_included', 3, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    16, 'Room Only', 'Room only plan for Hotel 4', 
    0.00, 'room_only', 4, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    17, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 4', 
    26.00, 'bed_and_breakfast', 4, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    18, 'Half Board', 'Half Board plan for Hotel 4', 
    46.00, 'half_board', 4, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    19, 'Full Board', 'Full Board plan for Hotel 4', 
    66.00, 'full_board', 4, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    20, 'All Included', 'All Included plan for Hotel 4', 
    86.00, 'all_included', 4, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    21, 'Room Only', 'Room only plan for Hotel 5', 
    0.00, 'room_only', 5, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    22, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 5', 
    28.00, 'bed_and_breakfast', 5, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    23, 'Half Board', 'Half Board plan for Hotel 5', 
    48.00, 'half_board', 5, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    24, 'Full Board', 'Full Board plan for Hotel 5', 
    68.00, 'full_board', 5, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    25, 'All Included', 'All Included plan for Hotel 5', 
    88.00, 'all_included', 5, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    26, 'Room Only', 'Room only plan for Hotel 6', 
    0.00, 'room_only', 6, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    27, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 6', 
    30.00, 'bed_and_breakfast', 6, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    28, 'Half Board', 'Half Board plan for Hotel 6', 
    50.00, 'half_board', 6, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    29, 'Full Board', 'Full Board plan for Hotel 6', 
    70.00, 'full_board', 6, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    30, 'All Included', 'All Included plan for Hotel 6', 
    90.00, 'all_included', 6, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    31, 'Room Only', 'Room only plan for Hotel 7', 
    0.00, 'room_only', 7, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    32, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 7', 
    32.00, 'bed_and_breakfast', 7, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    33, 'Half Board', 'Half Board plan for Hotel 7', 
    52.00, 'half_board', 7, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    34, 'Full Board', 'Full Board plan for Hotel 7', 
    72.00, 'full_board', 7, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    35, 'All Included', 'All Included plan for Hotel 7', 
    92.00, 'all_included', 7, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    36, 'Room Only', 'Room only plan for Hotel 8', 
    0.00, 'room_only', 8, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    37, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 8', 
    34.00, 'bed_and_breakfast', 8, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    38, 'Half Board', 'Half Board plan for Hotel 8', 
    54.00, 'half_board', 8, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    39, 'Full Board', 'Full Board plan for Hotel 8', 
    74.00, 'full_board', 8, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    40, 'All Included', 'All Included plan for Hotel 8', 
    94.00, 'all_included', 8, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    41, 'Room Only', 'Room only plan for Hotel 9', 
    0.00, 'room_only', 9, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    42, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 9', 
    36.00, 'bed_and_breakfast', 9, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    43, 'Half Board', 'Half Board plan for Hotel 9', 
    56.00, 'half_board', 9, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    44, 'Full Board', 'Full Board plan for Hotel 9', 
    76.00, 'full_board', 9, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    45, 'All Included', 'All Included plan for Hotel 9', 
    96.00, 'all_included', 9, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    46, 'Room Only', 'Room only plan for Hotel 10', 
    0.00, 'room_only', 10, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    47, 'Bed and Breakfast', 'Bed and Breakfast plan for Hotel 10', 
    38.00, 'bed_and_breakfast', 10, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    48, 'Half Board', 'Half Board plan for Hotel 10', 
    58.00, 'half_board', 10, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    49, 'Full Board', 'Full Board plan for Hotel 10', 
    78.00, 'full_board', 10, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  ), 
  (
    50, 'All Included', 'All Included plan for Hotel 10', 
    98.00, 'all_included', 10, '2024-06-12 13:49:34.182215', 
    '2024-06-12 13:49:34.182215'
  );
INSERT INTO "public"."booking" (
  "id", "check_in_date", "check_out_date", 
  "customer_id", "board_plan_id", 
  "room_id", "created_at"
) 
VALUES 
  (
    1, '2024-08-01', '2024-08-07', 1, 1, 
    1, '2024-06-12 13:49:34.16754'
  );
INSERT INTO "public"."booking" (
  "id", "check_in_date", "check_out_date", 
  "customer_id", "board_plan_id", 
  "room_id", "created_at"
) 
VALUES 
  (
    2, '2024-08-03', '2024-08-10', 2, 2, 
    2, '2024-06-12 13:49:34.16754'
  );
INSERT INTO "public"."booking" (
  "id", "check_in_date", "check_out_date", 
  "customer_id", "board_plan_id", 
  "room_id", "created_at"
) 
VALUES 
  (
    3, '2024-08-05', '2024-08-12', 3, 6, 
    23, '2024-06-12 13:49:34.16754'
  );
INSERT INTO "public"."booking" (
  "id", "check_in_date", "check_out_date", 
  "customer_id", "board_plan_id", 
  "room_id", "created_at"
) 
VALUES 
  (
    4, '2024-08-07', '2024-08-14', 4, 7, 
    24, '2024-06-12 13:49:34.16754'
  ), 
  (
    5, '2024-08-09', '2024-08-16', 5, 11, 
    42, '2024-06-12 13:49:34.16754'
  ), 
  (
    6, '2024-08-11', '2024-08-18', 6, 2, 
    44, '2024-06-12 13:49:34.16754'
  ), 
  (
    7, '2024-08-13', '2024-08-20', 7, 18, 
    69, '2024-06-12 13:49:34.16754'
  ), 
  (
    8, '2024-08-15', '2024-08-22', 8, 19, 
    70, '2024-06-12 13:49:34.16754'
  ), 
  (
    9, '2024-08-17', '2024-08-24', 9, 21, 
    85, '2024-06-12 13:49:34.16754'
  ), 
  (
    10, '2024-08-19', '2024-08-26', 10, 
    22, 86, '2024-06-12 13:49:34.16754'
  ), 
  (
    11, '2024-08-21', '2024-08-28', 11, 
    26, 107, '2024-06-12 13:49:34.16754'
  ), 
  (
    12, '2024-08-23', '2024-08-30', 12, 
    27, 111, '2024-06-12 13:49:34.16754'
  ), 
  (
    13, '2024-08-25', '2024-09-01', 13, 
    31, 129, '2024-06-12 13:49:34.16754'
  ), 
  (
    14, '2024-08-27', '2024-09-03', 14, 
    32, 130, '2024-06-12 13:49:34.16754'
  ), 
  (
    15, '2024-08-29', '2024-09-05', 15, 
    36, 145, '2024-06-12 13:49:34.16754'
  ), 
  (
    16, '2024-08-31', '2024-09-07', 16, 
    37, 146, '2024-06-12 13:49:34.16754'
  ), 
  (
    17, '2024-09-02', '2024-09-09', 17, 
    42, 166, '2024-06-12 13:49:34.16754'
  ), 
  (
    18, '2024-09-04', '2024-09-11', 18, 
    43, 167, '2024-06-12 13:49:34.16754'
  ), 
  (
    20, '2024-09-08', '2024-09-15', 20, 
    50, 199, '2024-06-12 13:49:34.16754'
  ), 
  (
    19, '2024-09-06', '2024-09-13', 19, 
    47, 187, '2024-06-12 13:49:34.16754'
  );
INSERT INTO "public"."customer" (
  "id", "name", "first_surname", "second_surname", 
  "email", "password", "date_of_birth", 
  "phone", "address", "created_at"
) 
VALUES 
  (
    1, 'John', 'Doe', 'Smith', 'john.doe@example.com', 
    'password1', '1990-05-15', '+1234567890', 
    '123 Main St, City', '2024-06-12 13:49:34.203'
  );
INSERT INTO "public"."customer" (
  "id", "name", "first_surname", "second_surname", 
  "email", "password", "date_of_birth", 
  "phone", "address", "created_at"
) 
VALUES 
  (
    2, 'Jane', 'Smith', 'Doe', 'jane.smith@example.com', 
    'password2', '1985-08-20', '+1987654321', 
    '456 Elm St, Town', '2024-06-12 13:49:34.203'
  );
INSERT INTO "public"."customer" (
  "id", "name", "first_surname", "second_surname", 
  "email", "password", "date_of_birth", 
  "phone", "address", "created_at"
) 
VALUES 
  (
    3, 'David', 'Brown', 'Jones', 'david.brown@example.com', 
    'password3', '1988-12-10', '+1112223333', 
    '789 Oak St, Village', '2024-06-12 13:49:34.203'
  );
INSERT INTO "public"."customer" (
  "id", "name", "first_surname", "second_surname", 
  "email", "password", "date_of_birth", 
  "phone", "address", "created_at"
) 
VALUES 
  (
    4, 'Emily', 'Wilson', 'Taylor', 'emily.wilson@example.com', 
    'password4', '1992-03-25', '+4445556666', 
    '321 Maple Ave, County', '2024-06-12 13:49:34.203'
  ), 
  (
    5, 'Michael', 'Johnson', 'Anderson', 
    'michael.johnson@example.com', 
    'password5', '1980-07-03', '+7778889999', 
    '654 Pine Rd, State', '2024-06-12 13:49:34.203'
  ), 
  (
    6, 'Sarah', 'Williams', 'Martinez', 
    'sarah.williams@example.com', 'password6', 
    '1995-01-08', '+6667778888', '987 Birch Ln, Country', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    7, 'Christopher', 'Jones', 'Garcia', 
    'christopher.jones@example.com', 
    'password7', '1976-09-12', '+3334445555', 
    '246 Cedar Blvd, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    8, 'Jessica', 'Brown', 'Rodriguez', 
    'jessica.brown@example.com', 'password8', 
    '1982-11-18', '+9990001111', '135 Spruce Dr, City', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    9, 'Andrew', 'Lee', 'Lopez', 'andrew.lee@example.com', 
    'password9', '1991-04-30', '+2223334444', 
    '864 Walnut St, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    10, 'Michelle', 'Davis', 'Hernandez', 
    'michelle.davis@example.com', 'password10', 
    '1987-06-22', '+5556667777', '579 Oak Ave, County', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    11, 'Daniel', 'Garcia', 'Lewis', 'daniel.garcia@example.com', 
    'password11', '1983-10-07', '+7778889999', 
    '753 Maple Dr, State', '2024-06-12 13:49:34.203'
  ), 
  (
    12, 'Ashley', 'Martinez', 'Hill', 'ashley.martinez@example.com', 
    'password12', '1993-02-14', '+4445556666', 
    '246 Pine Ln, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    13, 'Matthew', 'Hernandez', 'Young', 
    'matthew.hernandez@example.com', 
    'password13', '1979-08-29', '+6667778888', 
    '987 Cedar Rd, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    14, 'Amanda', 'Lopez', 'Scott', 'amanda.lopez@example.com', 
    'password14', '1984-12-15', '+3334445555', 
    '753 Elm Blvd, City', '2024-06-12 13:49:34.203'
  ), 
  (
    15, 'James', 'Scott', 'King', 'james.scott@example.com', 
    'password15', '1990-06-01', '+9990001111', 
    '246 Maple St, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    16, 'Brittany', 'Young', 'White', 'brittany.young@example.com', 
    'password16', '1988-01-20', '+2223334444', 
    '579 Oak Dr, County', '2024-06-12 13:49:34.203'
  ), 
  (
    17, 'Andrew', 'King', 'Martin', 'andrew.king@example.com', 
    'password17', '1977-07-14', '+5556667777', 
    '753 Pine Ave, State', '2024-06-12 13:49:34.203'
  ), 
  (
    18, 'Stephanie', 'White', 'Walker', 
    'stephanie.white@example.com', 
    'password18', '1995-03-10', '+7778889999', 
    '987 Cedar Ln, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    19, 'Justin', 'Martin', 'Hall', 'justin.martin@example.com', 
    'password19', '1981-11-25', '+4445556666', 
    '246 Elm Rd, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    20, 'Lauren', 'Walker', 'Allen', 'lauren.walker@example.com', 
    'password20', '1986-05-05', '+6667778888', 
    '753 Maple Blvd, City', '2024-06-12 13:49:34.203'
  ), 
  (
    21, 'Brandon', 'Hall', 'Young', 'brandon.hall@example.com', 
    'password21', '1992-09-19', '+3334445555', 
    '246 Cedar Dr, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    22, 'Rachel', 'Allen', 'Lopez', 'rachel.allen@example.com', 
    'password22', '1978-02-09', '+9990001111', 
    '579 Oak Ave, County', '2024-06-12 13:49:34.203'
  ), 
  (
    23, 'Ryan', 'Young', 'Gonzalez', 'ryan.young@example.com', 
    'password23', '1983-04-18', '+2223334444', 
    '753 Pine Ln, State', '2024-06-12 13:49:34.203'
  ), 
  (
    24, 'Melissa', 'Lopez', 'Perez', 'melissa.lopez@example.com', 
    'password24', '1991-08-03', '+5556667777', 
    '987 Cedar Dr, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    25, 'Nicole', 'Perez', 'Hernandez', 
    'nicole.perez@example.com', 'password25', 
    '1987-12-26', '+7778889999', '246 Elm Ave, Town', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    26, 'Steven', 'Gonzalez', 'Lee', 'steven.gonzalez@example.com', 
    'password26', '1976-06-07', '+4445556666', 
    '753 Maple Rd, City', '2024-06-12 13:49:34.203'
  ), 
  (
    27, 'Kayla', 'Hernandez', 'Davis', 
    'kayla.hernandez@example.com', 
    'password27', '1993-01-31', '+6667778888', 
    '579 Oak Blvd, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    28, 'Taylor', 'Lee', 'Garcia', 'taylor.lee@example.com', 
    'password28', '1979-09-15', '+3334445555', 
    '753 Pine Dr, County', '2024-06-12 13:49:34.203'
  ), 
  (
    29, 'Kevin', 'Davis', 'Scott', 'kevin.davis@example.com', 
    'password29', '1985-03-21', '+9990001111', 
    '246 Cedar Ln, State', '2024-06-12 13:49:34.203'
  ), 
  (
    30, 'Christina', 'Scott', 'Martinez', 
    'christina.scott@example.com', 
    'password30', '1990-07-11', '+2223334444', 
    '579 Elm Ave, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    31, 'Ethan', 'Martinez', 'Hernandez', 
    'ethan.martinez@example.com', 'password31', 
    '1986-02-14', '+1234567890', '123 Main St, City', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    32, 'Olivia', 'Garcia', 'Wilson', 'olivia.garcia@example.com', 
    'password32', '1981-07-19', '+1987654321', 
    '456 Elm St, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    33, 'Jacob', 'Rodriguez', 'Davis', 
    'jacob.rodriguez@example.com', 
    'password33', '1994-10-30', '+1112223333', 
    '789 Oak St, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    34, 'Sophia', 'Lopez', 'Brown', 'sophia.lopez@example.com', 
    'password34', '1977-12-12', '+4445556666', 
    '321 Maple Ave, County', '2024-06-12 13:49:34.203'
  ), 
  (
    35, 'Mia', 'Hernandez', 'Wilson', 'mia.hernandez@example.com', 
    'password35', '1983-05-25', '+7778889999', 
    '654 Pine Rd, State', '2024-06-12 13:49:34.203'
  ), 
  (
    36, 'William', 'Scott', 'Young', 'william.scott@example.com', 
    'password36', '1992-01-08', '+6667778888', 
    '987 Birch Ln, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    37, 'Isabella', 'Lewis', 'Gonzalez', 
    'isabella.lewis@example.com', 'password37', 
    '1978-09-23', '+3334445555', '246 Cedar Blvd, Town', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    38, 'James', 'Gonzalez', 'Scott', 'james.gonzalez@example.com', 
    'password38', '1984-11-28', '+9990001111', 
    '135 Spruce Dr, City', '2024-06-12 13:49:34.203'
  ), 
  (
    39, 'Alexander', 'Young', 'Martinez', 
    'alexander.young@example.com', 
    'password39', '1990-04-10', '+2223334444', 
    '864 Walnut St, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    40, 'Charlotte', 'Perez', 'King', 'charlotte.perez@example.com', 
    'password40', '1987-06-22', '+5556667777', 
    '579 Oak Ave, County', '2024-06-12 13:49:34.203'
  ), 
  (
    41, 'Elijah', 'Allen', 'Perez', 'elijah.allen@example.com', 
    'password41', '1983-10-07', '+7778889999', 
    '753 Maple Dr, State', '2024-06-12 13:49:34.203'
  ), 
  (
    42, 'Avery', 'Taylor', 'Lee', 'avery.taylor@example.com', 
    'password42', '1993-02-14', '+4445556666', 
    '246 Pine Ln, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    43, 'Benjamin', 'King', 'Hill', 'benjamin.king@example.com', 
    'password43', '1979-08-29', '+6667778888', 
    '987 Cedar Rd, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    44, 'Evelyn', 'Hill', 'Young', 'evelyn.hill@example.com', 
    'password44', '1984-12-15', '+3334445555', 
    '753 Elm Blvd, City', '2024-06-12 13:49:34.203'
  ), 
  (
    45, 'Amelia', 'Walker', 'Martin', 'amelia.walker@example.com', 
    'password45', '1990-06-01', '+9990001111', 
    '246 Maple St, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    46, 'Samantha', 'Hall', 'White', 'samantha.hall@example.com', 
    'password46', '1988-01-20', '+2223334444', 
    '579 Oak Dr, County', '2024-06-12 13:49:34.203'
  ), 
  (
    47, 'Noah', 'Martin', 'Walker', 'noah.martin@example.com', 
    'password47', '1977-07-14', '+5556667777', 
    '753 Pine Ave, State', '2024-06-12 13:49:34.203'
  ), 
  (
    48, 'Chloe', 'White', 'Allen', 'chloe.white@example.com', 
    'password48', '1995-03-10', '+7778889999', 
    '987 Cedar Ln, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    49, 'Logan', 'Allen', 'Lopez', 'logan.allen@example.com', 
    'password49', '1981-11-25', '+4445556666', 
    '246 Elm Rd, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    50, 'Harper', 'Lopez', 'Garcia', 'harper.lopez@example.com', 
    'password50', '1986-05-05', '+6667778888', 
    '753 Maple Blvd, City', '2024-06-12 13:49:34.203'
  ), 
  (
    51, 'Mason', 'Garcia', 'Young', 'mason.garcia@example.com', 
    'password51', '1992-09-19', '+3334445555', 
    '246 Cedar Dr, Village', '2024-06-12 13:49:34.203'
  ), 
  (
    52, 'Ella', 'Young', 'Rodriguez', 'ella.young@example.com', 
    'password52', '1978-02-09', '+9990001111', 
    '579 Oak Ave, County', '2024-06-12 13:49:34.203'
  ), 
  (
    53, 'Aiden', 'Rodriguez', 'Perez', 
    'aiden.rodriguez@example.com', 
    'password53', '1983-04-18', '+2223334444', 
    '753 Pine Ln, State', '2024-06-12 13:49:34.203'
  ), 
  (
    54, 'Aria', 'Perez', 'Hernandez', 'aria.perez@example.com', 
    'password54', '1991-08-03', '+5556667777', 
    '987 Cedar Dr, Country', '2024-06-12 13:49:34.203'
  ), 
  (
    55, 'Grayson', 'Hernandez', 'Davis', 
    'grayson.hernandez@example.com', 
    'password55', '1987-12-26', '+7778889999', 
    '246 Elm Ave, Town', '2024-06-12 13:49:34.203'
  ), 
  (
    56, 'Liam', 'Davis', 'Lee', 'liam.davis@example.com', 
    'password56', '1976-06-07', '+4445556666', 
    '753 Maple Rd, City', '2024-06-12 13:49:34.203'
  ), 
  (
    57, 'Victoria', 'Lee', 'Gonzalez', 
    'victoria.lee@example.com', 'password57', 
    '1993-01-31', '+6667778888', '579 Oak Blvd, Village', 
    '2024-06-12 13:49:34.203'
  ), 
  (
    58, 'Madison', 'Gonzalez', 'Taylor', 
    'madison.gonzalez@example.com', 
    'password58', '1979-09-15', '+3334445555', 
    '753 Pine Dr, County', '2024-06-12 13:49:34.203'
  ), 
  (
    59, 'Gabriel', 'Taylor', 'Young', 'gabriel.taylor@example.com', 
    'password59', '1985-03-21', '+9990001111', 
    '246 Cedar Ln, State', '2024-06-12 13:49:34.203'
  ), 
  (
    60, 'Grace', 'Young', 'Martin', 'grace.young@example.com', 
    'password60', '1990-07-11', '+2223334444', 
    '579 Elm Ave, Country', '2024-06-12 13:49:34.203'
  );
INSERT INTO "public"."hotel" (
  "id", "name", "address", "phone", "email", 
  "stars"
) 
VALUES 
  (
    1, 'Hotel Sunshine', '123 Sun St', 
    '1234567890', 'sunshine@example.com', 
    4
  );
INSERT INTO "public"."hotel" (
  "id", "name", "address", "phone", "email", 
  "stars"
) 
VALUES 
  (
    2, 'Hotel Rainbow', '456 Rainbow Rd', 
    '1234567891', 'rainbow@example.com', 
    5
  );
INSERT INTO "public"."hotel" (
  "id", "name", "address", "phone", "email", 
  "stars"
) 
VALUES 
  (
    3, 'Hotel Moonlight', '789 Moonlight Ave', 
    '1234567892', 'moonlight@example.com', 
    3
  );
INSERT INTO "public"."hotel" (
  "id", "name", "address", "phone", "email", 
  "stars"
) 
VALUES 
  (
    4, 'Hotel Starlight', '101 Starlight Blvd', 
    '1234567893', 'starlight@example.com', 
    4
  ), 
  (
    5, 'Hotel Paradise', '202 Paradise Ln', 
    '1234567894', 'paradise@example.com', 
    5
  ), 
  (
    6, 'Hotel Harmony', '303 Harmony Pl', 
    '1234567895', 'harmony@example.com', 
    3
  ), 
  (
    7, 'Hotel Bliss', '404 Bliss St', 
    '1234567896', 'bliss@example.com', 
    4
  ), 
  (
    8, 'Hotel Serenity', '505 Serenity Dr', 
    '1234567897', 'serenity@example.com', 
    5
  ), 
  (
    9, 'Hotel Tranquility', '606 Tranquility Ct', 
    '1234567898', 'tranquility@example.com', 
    3
  ), 
  (
    10, 'Hotel Nirvana', '707 Nirvana Way', 
    '1234567899', 'nirvana@example.com', 
    4
  );
INSERT INTO "public"."hotel_feature" ("id", "name", "description") 
VALUES 
  (
    1, 'Swimming Pool', 'Enjoy our hotel refreshing swimming pool.'
  );
INSERT INTO "public"."hotel_feature" ("id", "name", "description") 
VALUES 
  (
    2, 'Spa', 'Relax and unwind at our luxurious spa.'
  );
INSERT INTO "public"."hotel_feature" ("id", "name", "description") 
VALUES 
  (
    3, 'Fitness Center', 'Stay fit during your stay with our state-of-the-art fitness center.'
  );
INSERT INTO "public"."hotel_feature" ("id", "name", "description") 
VALUES 
  (
    4, 'Restaurant', 'Indulge in delicious cuisine at our onsite restaurant.'
  ), 
  (
    5, 'Bar/Lounge', 'Sip on cocktails and socialize at our stylish bar/lounge.'
  ), 
  (
    6, 'Conference Facilities', 'Host successful meetings and events in our conference facilities.'
  ), 
  (
    7, '24-Hour Reception', 'Our friendly staff are available 24/7 to assist you.'
  ), 
  (
    8, 'Concierge Service', 'Let our concierge assist you with all your needs during your stay.'
  ), 
  (
    9, 'Airport Shuttle', 'Arrive and depart hassle-free with our convenient airport shuttle service.'
  ), 
  (
    10, 'Free Wi-Fi', 'Stay connected with complimentary Wi-Fi throughout the hotel.'
  );
INSERT INTO "public"."hotel_feature_mapping" ("hotel_id", "feature_id") 
VALUES 
  (1, 1);
INSERT INTO "public"."hotel_feature_mapping" ("hotel_id", "feature_id") 
VALUES 
  (1, 3);
INSERT INTO "public"."hotel_feature_mapping" ("hotel_id", "feature_id") 
VALUES 
  (1, 5);
INSERT INTO "public"."hotel_feature_mapping" ("hotel_id", "feature_id") 
VALUES 
  (1, 7), 
  (1, 9), 
  (2, 2), 
  (2, 4), 
  (2, 6), 
  (2, 8), 
  (2, 10), 
  (3, 1), 
  (3, 3), 
  (3, 5), 
  (3, 7), 
  (3, 9), 
  (4, 2), 
  (4, 4), 
  (4, 6), 
  (4, 8), 
  (4, 10), 
  (5, 1), 
  (5, 3), 
  (5, 5), 
  (5, 7), 
  (5, 9), 
  (6, 2), 
  (6, 4), 
  (6, 6), 
  (6, 8), 
  (6, 10), 
  (7, 1), 
  (7, 3), 
  (7, 5), 
  (7, 7), 
  (7, 9), 
  (8, 2), 
  (8, 4), 
  (8, 6), 
  (8, 8), 
  (8, 10), 
  (9, 1), 
  (9, 3), 
  (9, 5), 
  (9, 7), 
  (9, 9), 
  (10, 2), 
  (10, 4), 
  (10, 6), 
  (10, 8), 
  (10, 10);
INSERT INTO "public"."payment" (
  "id", "amount", "payment_date", "payment_method", 
  "booking_id", "created_at"
) 
VALUES 
  (
    1, 500.00, '2024-08-01', 'Credit Card', 
    1, '2024-06-12 13:49:34.22396'
  );
INSERT INTO "public"."payment" (
  "id", "amount", "payment_date", "payment_method", 
  "booking_id", "created_at"
) 
VALUES 
  (
    2, 700.00, '2024-08-03', 'PayPal', 
    2, '2024-06-12 13:49:34.22396'
  );
INSERT INTO "public"."payment" (
  "id", "amount", "payment_date", "payment_method", 
  "booking_id", "created_at"
) 
VALUES 
  (
    3, 800.00, '2024-08-05', 'Credit Card', 
    3, '2024-06-12 13:49:34.22396'
  );
INSERT INTO "public"."payment" (
  "id", "amount", "payment_date", "payment_method", 
  "booking_id", "created_at"
) 
VALUES 
  (
    4, 600.00, '2024-08-07', 'Cash', 4, 
    '2024-06-12 13:49:34.22396'
  ), 
  (
    5, 900.00, '2024-08-09', 'Credit Card', 
    5, '2024-06-12 13:49:34.22396'
  ), 
  (
    6, 750.00, '2024-08-11', 'PayPal', 
    6, '2024-06-12 13:49:34.22396'
  ), 
  (
    7, 850.00, '2024-08-13', 'Credit Card', 
    7, '2024-06-12 13:49:34.22396'
  ), 
  (
    8, 950.00, '2024-08-15', 'Credit Card', 
    8, '2024-06-12 13:49:34.22396'
  ), 
  (
    9, 720.00, '2024-08-17', 'PayPal', 
    9, '2024-06-12 13:49:34.22396'
  ), 
  (
    10, 830.00, '2024-08-19', 'Credit Card', 
    10, '2024-06-12 13:49:34.22396'
  ), 
  (
    11, 560.00, '2024-08-21', 'Cash', 11, 
    '2024-06-12 13:49:34.22396'
  ), 
  (
    12, 870.00, '2024-08-23', 'Credit Card', 
    12, '2024-06-12 13:49:34.22396'
  ), 
  (
    13, 920.00, '2024-08-25', 'Credit Card', 
    13, '2024-06-12 13:49:34.22396'
  ), 
  (
    14, 780.00, '2024-08-27', 'PayPal', 
    14, '2024-06-12 13:49:34.22396'
  ), 
  (
    15, 630.00, '2024-08-29', 'Credit Card', 
    15, '2024-06-12 13:49:34.22396'
  ), 
  (
    16, 890.00, '2024-08-31', 'Credit Card', 
    16, '2024-06-12 13:49:34.22396'
  ), 
  (
    17, 950.00, '2024-09-02', 'PayPal', 
    17, '2024-06-12 13:49:34.22396'
  ), 
  (
    18, 720.00, '2024-09-04', 'Credit Card', 
    18, '2024-06-12 13:49:34.22396'
  ), 
  (
    19, 830.00, '2024-09-06', 'Credit Card', 
    19, '2024-06-12 13:49:34.22396'
  ), 
  (
    20, 560.00, '2024-09-08', 'PayPal', 
    20, '2024-06-12 13:49:34.22396'
  );
INSERT INTO "public"."room" (
  "id", "number", "hotel_id", "room_type_id"
) 
VALUES 
  (1, 101, 1, 1);
INSERT INTO "public"."room" (
  "id", "number", "hotel_id", "room_type_id"
) 
VALUES 
  (2, 102, 1, 2);
INSERT INTO "public"."room" (
  "id", "number", "hotel_id", "room_type_id"
) 
VALUES 
  (3, 103, 1, 3);
INSERT INTO "public"."room" (
  "id", "number", "hotel_id", "room_type_id"
) 
VALUES 
  (4, 104, 1, 1), 
  (5, 105, 1, 2), 
  (6, 106, 1, 3), 
  (7, 107, 1, 1), 
  (8, 108, 1, 2), 
  (9, 109, 1, 3), 
  (10, 110, 1, 1), 
  (11, 111, 1, 2), 
  (12, 112, 1, 3), 
  (13, 113, 1, 1), 
  (14, 114, 1, 2), 
  (15, 115, 1, 3), 
  (16, 201, 2, 4), 
  (17, 202, 2, 1), 
  (18, 203, 2, 2), 
  (19, 204, 2, 3), 
  (20, 205, 2, 4), 
  (21, 206, 2, 1), 
  (22, 207, 2, 2), 
  (23, 208, 2, 3), 
  (24, 209, 2, 4), 
  (25, 210, 2, 1), 
  (26, 211, 2, 2), 
  (27, 212, 2, 3), 
  (28, 213, 2, 4), 
  (29, 214, 2, 1), 
  (30, 215, 2, 2), 
  (31, 216, 2, 3), 
  (32, 217, 2, 4), 
  (33, 218, 2, 1), 
  (34, 219, 2, 2), 
  (35, 220, 2, 3), 
  (36, 301, 3, 1), 
  (37, 302, 3, 2), 
  (38, 303, 3, 3), 
  (39, 304, 3, 4), 
  (40, 305, 3, 5), 
  (41, 306, 3, 1), 
  (42, 307, 3, 2), 
  (43, 308, 3, 3), 
  (44, 309, 3, 4), 
  (45, 310, 3, 5), 
  (46, 311, 3, 1), 
  (47, 312, 3, 2), 
  (48, 313, 3, 3), 
  (49, 314, 3, 4), 
  (50, 315, 3, 5), 
  (51, 316, 3, 1), 
  (52, 317, 3, 2), 
  (53, 318, 3, 3), 
  (54, 319, 3, 4), 
  (55, 320, 3, 5), 
  (56, 321, 3, 1), 
  (57, 322, 3, 2), 
  (58, 323, 3, 3), 
  (59, 324, 3, 4), 
  (60, 325, 3, 5), 
  (61, 401, 4, 1), 
  (62, 402, 4, 2), 
  (63, 403, 4, 3), 
  (64, 404, 4, 1), 
  (65, 405, 4, 2), 
  (66, 406, 4, 3), 
  (67, 407, 4, 1), 
  (68, 408, 4, 2), 
  (69, 409, 4, 3), 
  (70, 410, 4, 1), 
  (71, 411, 4, 2), 
  (72, 412, 4, 3), 
  (73, 413, 4, 1), 
  (74, 414, 4, 2), 
  (75, 415, 4, 3), 
  (76, 416, 4, 1), 
  (77, 417, 4, 2), 
  (78, 418, 4, 3), 
  (79, 419, 4, 1), 
  (80, 420, 4, 2), 
  (81, 501, 5, 1), 
  (82, 502, 5, 2), 
  (83, 503, 5, 3), 
  (84, 504, 5, 4);
INSERT INTO "public"."room" (
  "id", "number", "hotel_id", "room_type_id"
) 
VALUES 
  (85, 505, 5, 1), 
  (86, 506, 5, 2), 
  (87, 507, 5, 3), 
  (88, 508, 5, 4), 
  (89, 509, 5, 1), 
  (90, 510, 5, 2), 
  (91, 511, 5, 3), 
  (92, 512, 5, 4), 
  (93, 513, 5, 1), 
  (94, 514, 5, 2), 
  (95, 515, 5, 3), 
  (96, 516, 5, 4), 
  (97, 517, 5, 1), 
  (98, 518, 5, 2), 
  (99, 519, 5, 3), 
  (100, 520, 5, 4), 
  (101, 601, 6, 1), 
  (102, 602, 6, 2), 
  (103, 603, 6, 3), 
  (104, 604, 6, 4), 
  (105, 605, 6, 5), 
  (106, 606, 6, 1), 
  (107, 607, 6, 2), 
  (108, 608, 6, 3), 
  (109, 609, 6, 4), 
  (110, 610, 6, 5), 
  (111, 611, 6, 1), 
  (112, 612, 6, 2), 
  (113, 613, 6, 3), 
  (114, 614, 6, 4), 
  (115, 615, 6, 5), 
  (116, 616, 6, 1), 
  (117, 617, 6, 2), 
  (118, 618, 6, 3), 
  (119, 619, 6, 4), 
  (120, 620, 6, 5), 
  (121, 621, 6, 1), 
  (122, 622, 6, 2), 
  (123, 623, 6, 3), 
  (124, 624, 6, 4), 
  (125, 625, 6, 5), 
  (126, 701, 7, 1), 
  (127, 702, 7, 2), 
  (128, 703, 7, 3), 
  (129, 704, 7, 1), 
  (130, 705, 7, 2), 
  (131, 706, 7, 3), 
  (132, 707, 7, 1), 
  (133, 708, 7, 2), 
  (134, 709, 7, 3), 
  (135, 710, 7, 1), 
  (136, 711, 7, 2), 
  (137, 712, 7, 3), 
  (138, 713, 7, 1), 
  (139, 714, 7, 2), 
  (140, 715, 7, 3), 
  (141, 801, 8, 1), 
  (142, 802, 8, 2), 
  (143, 803, 8, 3), 
  (144, 804, 8, 4), 
  (145, 805, 8, 1), 
  (146, 806, 8, 2), 
  (147, 807, 8, 3), 
  (148, 808, 8, 4), 
  (149, 809, 8, 1), 
  (150, 810, 8, 2), 
  (151, 811, 8, 3), 
  (152, 812, 8, 4), 
  (153, 813, 8, 1), 
  (154, 814, 8, 2), 
  (155, 815, 8, 3), 
  (156, 816, 8, 4), 
  (157, 817, 8, 1), 
  (158, 818, 8, 2), 
  (159, 819, 8, 3), 
  (160, 820, 8, 4), 
  (161, 901, 9, 1), 
  (162, 902, 9, 2), 
  (163, 903, 9, 3), 
  (164, 904, 9, 4), 
  (165, 905, 9, 1), 
  (166, 906, 9, 2), 
  (167, 907, 9, 3), 
  (168, 908, 9, 4), 
  (169, 909, 9, 1), 
  (170, 910, 9, 2), 
  (171, 911, 9, 3), 
  (172, 912, 9, 4), 
  (173, 913, 9, 1), 
  (174, 914, 9, 2), 
  (175, 915, 9, 3), 
  (176, 916, 9, 4), 
  (177, 917, 9, 1), 
  (178, 918, 9, 2), 
  (179, 919, 9, 3), 
  (180, 920, 9, 4), 
  (181, 1001, 10, 1), 
  (182, 1002, 10, 2), 
  (183, 1003, 10, 3), 
  (184, 1004, 10, 4), 
  (185, 1005, 10, 5), 
  (186, 1006, 10, 1), 
  (187, 1007, 10, 2), 
  (188, 1008, 10, 3), 
  (189, 1009, 10, 4), 
  (190, 1010, 10, 5), 
  (191, 1011, 10, 1), 
  (192, 1012, 10, 2), 
  (193, 1013, 10, 3), 
  (194, 1014, 10, 4), 
  (195, 1015, 10, 5), 
  (196, 1016, 10, 1), 
  (197, 1017, 10, 2), 
  (198, 1018, 10, 3), 
  (199, 1019, 10, 3);
INSERT INTO "public"."room_feature" ("id", "name", "description") 
VALUES 
  (
    1, 'Air Conditioning', 'Stay cool and comfortable with air conditioning in your room.'
  );
INSERT INTO "public"."room_feature" ("id", "name", "description") 
VALUES 
  (
    2, 'Flat Screen TV', 'Watch your favorite shows and movies on our flat screen TV.'
  );
INSERT INTO "public"."room_feature" ("id", "name", "description") 
VALUES 
  (
    3, 'Mini Fridge', 'Keep your drinks and snacks chilled with our in-room mini fridge.'
  );
INSERT INTO "public"."room_feature" ("id", "name", "description") 
VALUES 
  (
    4, 'Ensuite Bathroom', 'Enjoy the convenience and privacy of an ensuite bathroom.'
  ), 
  (
    5, 'Balcony', 'Relax and take in the views from your private balcony.'
  ), 
  (
    6, 'Room Service', 'Indulge in delicious meals and snacks with our convenient room service.'
  ), 
  (
    7, 'Work Desk', 'Stay productive with a dedicated work desk in your room.'
  ), 
  (
    8, 'Iron/Ironing Board', 'Look your best with our iron and ironing board.'
  ), 
  (
    9, 'Hair Dryer', 'Dry your hair quickly and easily with our in-room hair dryer.'
  ), 
  (
    10, 'Safety Deposit Box', 'Keep your valuables secure with our in-room safety deposit box.'
  );
INSERT INTO "public"."room_feature_mapping" (
  "room_type_id", "room_feature_id"
) 
VALUES 
  (1, 1);
INSERT INTO "public"."room_feature_mapping" (
  "room_type_id", "room_feature_id"
) 
VALUES 
  (1, 3);
INSERT INTO "public"."room_feature_mapping" (
  "room_type_id", "room_feature_id"
) 
VALUES 
  (1, 5);
INSERT INTO "public"."room_feature_mapping" (
  "room_type_id", "room_feature_id"
) 
VALUES 
  (1, 7), 
  (1, 9), 
  (2, 2), 
  (2, 4), 
  (2, 6), 
  (2, 8), 
  (2, 10), 
  (3, 1), 
  (3, 3), 
  (3, 5), 
  (3, 7), 
  (3, 9), 
  (4, 2), 
  (4, 4), 
  (4, 6), 
  (4, 8), 
  (4, 10), 
  (5, 1), 
  (5, 3), 
  (5, 5), 
  (5, 7), 
  (5, 9), 
  (6, 2), 
  (6, 4), 
  (6, 6), 
  (6, 8), 
  (6, 10), 
  (7, 1), 
  (7, 3), 
  (7, 5), 
  (7, 7), 
  (7, 9), 
  (8, 2), 
  (8, 4), 
  (8, 6), 
  (8, 8), 
  (8, 10), 
  (9, 1), 
  (9, 3), 
  (9, 5), 
  (9, 7), 
  (9, 9), 
  (10, 2), 
  (10, 4), 
  (10, 6), 
  (10, 8), 
  (10, 10), 
  (11, 1), 
  (11, 3), 
  (11, 5), 
  (11, 7), 
  (11, 9), 
  (12, 2), 
  (12, 4), 
  (12, 6), 
  (12, 8), 
  (12, 10), 
  (13, 1), 
  (13, 3), 
  (13, 5), 
  (13, 7), 
  (13, 9), 
  (14, 2), 
  (14, 4), 
  (14, 6), 
  (14, 8), 
  (14, 10), 
  (15, 1), 
  (15, 3), 
  (15, 5), 
  (15, 7), 
  (15, 9), 
  (16, 2), 
  (16, 4), 
  (16, 6), 
  (16, 8), 
  (16, 10), 
  (17, 1), 
  (17, 3), 
  (17, 5), 
  (17, 7), 
  (17, 9), 
  (18, 2), 
  (18, 4), 
  (18, 6), 
  (18, 8), 
  (18, 10), 
  (19, 1), 
  (19, 3), 
  (19, 5), 
  (19, 7), 
  (19, 9), 
  (20, 2), 
  (20, 4), 
  (20, 6), 
  (20, 8), 
  (20, 10), 
  (21, 1), 
  (21, 3), 
  (21, 5), 
  (21, 7), 
  (21, 9), 
  (22, 2), 
  (22, 4), 
  (22, 6), 
  (22, 8), 
  (22, 10), 
  (23, 1), 
  (23, 3), 
  (23, 5), 
  (23, 7), 
  (23, 9), 
  (24, 2), 
  (24, 4), 
  (24, 6), 
  (24, 8), 
  (24, 10), 
  (25, 1), 
  (25, 3), 
  (25, 5), 
  (25, 7), 
  (25, 9), 
  (26, 2), 
  (26, 4), 
  (26, 6), 
  (26, 8), 
  (26, 10), 
  (27, 1), 
  (27, 3), 
  (27, 5), 
  (27, 7), 
  (27, 9), 
  (28, 2), 
  (28, 4), 
  (28, 6), 
  (28, 8), 
  (28, 10), 
  (29, 1), 
  (29, 3), 
  (29, 5), 
  (29, 7), 
  (29, 9), 
  (30, 2), 
  (30, 4), 
  (30, 6), 
  (30, 8), 
  (30, 10), 
  (31, 1), 
  (31, 3), 
  (31, 5), 
  (31, 7), 
  (31, 9), 
  (32, 2), 
  (32, 4), 
  (32, 6), 
  (32, 8), 
  (32, 10), 
  (33, 1), 
  (33, 3), 
  (33, 5), 
  (33, 7), 
  (33, 9), 
  (34, 2), 
  (34, 4), 
  (34, 6), 
  (34, 8), 
  (34, 10), 
  (35, 1), 
  (35, 3), 
  (35, 5), 
  (35, 7), 
  (35, 9), 
  (36, 2), 
  (36, 4), 
  (36, 6), 
  (36, 8), 
  (36, 10), 
  (37, 1), 
  (37, 3), 
  (37, 5), 
  (37, 7), 
  (37, 9), 
  (38, 2), 
  (38, 4), 
  (38, 6), 
  (38, 8), 
  (38, 10), 
  (39, 1), 
  (39, 3), 
  (39, 5), 
  (39, 7), 
  (39, 9), 
  (40, 2), 
  (40, 4), 
  (40, 6), 
  (40, 8), 
  (40, 10), 
  (33, 1), 
  (33, 3), 
  (33, 5), 
  (33, 7), 
  (33, 9), 
  (34, 2), 
  (34, 4), 
  (34, 6), 
  (34, 8), 
  (34, 10), 
  (35, 1), 
  (35, 3), 
  (35, 5), 
  (35, 7), 
  (35, 9), 
  (36, 2), 
  (36, 4), 
  (36, 6), 
  (36, 8);
INSERT INTO "public"."room_feature_mapping" (
  "room_type_id", "room_feature_id"
) 
VALUES 
  (36, 10), 
  (37, 1), 
  (37, 3), 
  (37, 5), 
  (37, 7), 
  (37, 9), 
  (38, 2), 
  (38, 4), 
  (38, 6), 
  (38, 8), 
  (38, 10), 
  (39, 1), 
  (39, 3), 
  (39, 5), 
  (39, 7), 
  (39, 9), 
  (40, 2), 
  (40, 4), 
  (40, 6), 
  (40, 8), 
  (40, 10);
INSERT INTO "public"."room_type" (
  "id", "name", "description", "capacity", 
  "base_price", "hotel_id"
) 
VALUES 
  (
    1, 'Room Type 1 Hotel 1', 'Description for Room Type 1 Hotel 1', 
    2, 60.00, 1
  );
INSERT INTO "public"."room_type" (
  "id", "name", "description", "capacity", 
  "base_price", "hotel_id"
) 
VALUES 
  (
    2, 'Room Type 2 Hotel 1', 'Description for Room Type 2 Hotel 1', 
    4, 70.00, 1
  );
INSERT INTO "public"."room_type" (
  "id", "name", "description", "capacity", 
  "base_price", "hotel_id"
) 
VALUES 
  (
    3, 'Room Type 3 Hotel 1', 'Description for Room Type 3 Hotel 1', 
    6, 80.00, 1
  );
INSERT INTO "public"."room_type" (
  "id", "name", "description", "capacity", 
  "base_price", "hotel_id"
) 
VALUES 
  (
    4, 'Room Type 1 Hotel 2', 'Description for Room Type 1 Hotel 2', 
    2, 60.00, 2
  ), 
  (
    5, 'Room Type 2 Hotel 2', 'Description for Room Type 2 Hotel 2', 
    4, 70.00, 2
  ), 
  (
    6, 'Room Type 3 Hotel 2', 'Description for Room Type 3 Hotel 2', 
    6, 80.00, 2
  ), 
  (
    7, 'Room Type 4 Hotel 2', 'Description for Room Type 4 Hotel 2', 
    8, 90.00, 2
  ), 
  (
    8, 'Room Type 1 Hotel 3', 'Description for Room Type 1 Hotel 3', 
    2, 60.00, 3
  ), 
  (
    9, 'Room Type 2 Hotel 3', 'Description for Room Type 2 Hotel 3', 
    4, 70.00, 3
  ), 
  (
    10, 'Room Type 3 Hotel 3', 'Description for Room Type 3 Hotel 3', 
    6, 80.00, 3
  ), 
  (
    11, 'Room Type 4 Hotel 3', 'Description for Room Type 4 Hotel 3', 
    8, 90.00, 3
  ), 
  (
    12, 'Room Type 5 Hotel 3', 'Description for Room Type 5 Hotel 3', 
    10, 100.00, 3
  ), 
  (
    13, 'Room Type 1 Hotel 4', 'Description for Room Type 1 Hotel 4', 
    2, 60.00, 4
  ), 
  (
    14, 'Room Type 2 Hotel 4', 'Description for Room Type 2 Hotel 4', 
    4, 70.00, 4
  ), 
  (
    15, 'Room Type 3 Hotel 4', 'Description for Room Type 3 Hotel 4', 
    6, 80.00, 4
  ), 
  (
    16, 'Room Type 1 Hotel 5', 'Description for Room Type 1 Hotel 5', 
    2, 60.00, 5
  ), 
  (
    17, 'Room Type 2 Hotel 5', 'Description for Room Type 2 Hotel 5', 
    4, 70.00, 5
  ), 
  (
    18, 'Room Type 3 Hotel 5', 'Description for Room Type 3 Hotel 5', 
    6, 80.00, 5
  ), 
  (
    19, 'Room Type 4 Hotel 5', 'Description for Room Type 4 Hotel 5', 
    8, 90.00, 5
  ), 
  (
    20, 'Room Type 1 Hotel 6', 'Description for Room Type 1 Hotel 6', 
    2, 60.00, 6
  ), 
  (
    21, 'Room Type 2 Hotel 6', 'Description for Room Type 2 Hotel 6', 
    4, 70.00, 6
  ), 
  (
    22, 'Room Type 3 Hotel 6', 'Description for Room Type 3 Hotel 6', 
    6, 80.00, 6
  ), 
  (
    23, 'Room Type 4 Hotel 6', 'Description for Room Type 4 Hotel 6', 
    8, 90.00, 6
  ), 
  (
    24, 'Room Type 5 Hotel 6', 'Description for Room Type 5 Hotel 6', 
    10, 100.00, 6
  ), 
  (
    25, 'Room Type 1 Hotel 7', 'Description for Room Type 1 Hotel 7', 
    2, 60.00, 7
  ), 
  (
    26, 'Room Type 2 Hotel 7', 'Description for Room Type 2 Hotel 7', 
    4, 70.00, 7
  ), 
  (
    27, 'Room Type 3 Hotel 7', 'Description for Room Type 3 Hotel 7', 
    6, 80.00, 7
  ), 
  (
    28, 'Room Type 1 Hotel 8', 'Description for Room Type 1 Hotel 8', 
    2, 60.00, 8
  ), 
  (
    29, 'Room Type 2 Hotel 8', 'Description for Room Type 2 Hotel 8', 
    4, 70.00, 8
  ), 
  (
    30, 'Room Type 3 Hotel 8', 'Description for Room Type 3 Hotel 8', 
    6, 80.00, 8
  ), 
  (
    31, 'Room Type 4 Hotel 8', 'Description for Room Type 4 Hotel 8', 
    8, 90.00, 8
  ), 
  (
    32, 'Room Type 1 Hotel 9', 'Description for Room Type 1 Hotel 9', 
    2, 60.00, 9
  ), 
  (
    33, 'Room Type 2 Hotel 9', 'Description for Room Type 2 Hotel 9', 
    4, 70.00, 9
  ), 
  (
    34, 'Room Type 3 Hotel 9', 'Description for Room Type 3 Hotel 9', 
    6, 80.00, 9
  ), 
  (
    35, 'Room Type 4 Hotel 9', 'Description for Room Type 4 Hotel 9', 
    8, 90.00, 9
  ), 
  (
    36, 'Room Type 1 Hotel 10', 'Description for Room Type 1 Hotel 10', 
    2, 60.00, 10
  ), 
  (
    37, 'Room Type 2 Hotel 10', 'Description for Room Type 2 Hotel 10', 
    4, 70.00, 10
  ), 
  (
    38, 'Room Type 3 Hotel 10', 'Description for Room Type 3 Hotel 10', 
    6, 80.00, 10
  ), 
  (
    39, 'Room Type 4 Hotel 10', 'Description for Room Type 4 Hotel 10', 
    8, 90.00, 10
  ), 
  (
    40, 'Room Type 5 Hotel 10', 'Description for Room Type 5 Hotel 10', 
    10, 100.00, 10
  );
