-- Create the database
CREATE DATABASE IF NOT EXISTS luxury_rentals;
USE luxury_rentals;

-- Create users table
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create vehicles table
CREATE TABLE IF NOT EXISTS vehicle (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type ENUM('car', 'bike') NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    vehicle_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (vehicle_id) REFERENCES vehicle(id)
);

-- Insert sample vehicles
INSERT INTO vehicle (name, type, description, price, image_url) VALUES
('Lamborghini Huracan', 'car', 'Luxury sports car with incredible performance', 500.00, '/static/images/cars/lamborghini.jpg'),
('Ferrari 488', 'car', 'Italian supercar with stunning design', 450.00, '/static/images/cars/ferrari.jpg'),
('Ducati Panigale V4', 'bike', 'High-performance Italian motorcycle', 200.00, '/static/images/bikes/ducati.jpg'),
('Harley Davidson Street Bob', 'bike', 'Classic American cruiser motorcycle', 150.00, '/static/images/bikes/harley.jpg'); 