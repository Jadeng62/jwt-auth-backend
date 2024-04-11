-- db/seed.sql
\c service_ownership_app_db;

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
('johndoe','$2b$10$HSS0967leEwmjztsyN5Z1ecxZ5hED1Up9JNinYe57D8U9WBOV25gC' ,'john.doe@example.com', NOW(), NOW()),
('janedoe','$2b$10$HSS0967leEwmjztsyN5Z1ecxZ5hED1Up9JNinYe57D8U9WBOV25gC','jane.doe@example.com',  NOW(), NOW()),
('samsmith','$2b$10$HSS0967leEwmjztsyN5Z1ecxZ5hED1Up9JNinYe57D8U9WBOV25gC','sam.smith@example.com',  NOW(), NOW());


INSERT INTO vehicles (user_id, make, model, year, vin)
VALUES
(2, 'Tesla', 'Model S', 2020, '5YJSA1E26LF168886'),
(3, 'Mercedes', 'C300', 2019, 'WDDWF8EB9LR542110'),
(4, 'Porsche', '911 GT3 RS', 2024, 'WP0AA2A98MS206781'),
(4, 'Porsche', '911 S/T', 2022, 'AQDA2A98MS286781'),
(1, 'BMW', 'M5 Competition', 2021, '5UXCR6C01M9B78654'),
(1, 'Audi', 'Q7', 2022, 'WA1LAAF77HD034591'),
(2, 'Jaguar', 'F-PACE', 2020, 'SADCM2FV4LA624178'),
(3, 'Land Rover', 'Range Rover', 2019, 'SALGS2SV1JA500401'),
(4, 'Porsche', 'Cayenne', 2023, 'WP1AA2AYXMDA36097');


INSERT INTO service_records (vehicle_id, service_date, service_type, description, cost) 
VALUES
(1, '2022-07-15', 'Oil Change', 'Full synthetic oil change', 120.00),
(1, '2023-01-10', 'Tire Rotation', 'Tire rotation and balance', 75.00),
(2, '2023-03-22', 'Brake Inspection', 'Comprehensive brake system check', 90.00),
(3, '2023-04-05', 'Battery Replacement', 'Battery replacement and disposal of old battery', 200.00),
(1, '2023-04-10', 'Engine Tune-up', 'Complete engine diagnostics and tune-up', 300.00),
(1, '2023-04-15', 'Brake Service', 'Brake pads and discs replacement', 450.00),
(2, '2023-03-20', 'Oil Change', 'Full synthetic oil change', 120.00),
(2, '2023-04-01', 'AC Repair', 'Air conditioning system repair', 250.00),
(3, '2023-03-25', 'Suspension Overhaul', 'Full suspension system check and overhaul', 600.00),
(3, '2023-04-05', 'Tire Change', 'All tires replaced with new all-season tires', 800.00),
(4, '2023-04-02', 'Battery Replacement', 'Hybrid battery replacement and system check', 1200.00),
(4, '2023-04-08', 'Detailing', 'Full interior and exterior detailing', 200.00),
(5, '2023-04-12', 'Transmission Service', 'Transmission inspection and fluid change', 500.00),
(5, '2023-04-17', 'Windshield Replacement', 'Front windshield replacement due to crack', 400.00);
