const mysql = require('mysql');
const bodyParser = require('body-parser');

const createUserTable = `
    CREATE TABLE IF NOT EXISTS users(
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL
    )
`;

const createDofarmingTable = `
    CREATE TABLE IF NOT EXISTS dofarming(
        dofarming_id INT AUTO_INCREMENT PRIMARY KEY,
        passion INT NOT NULL,
        perseverance INT NOT NULL,
        positivity INT NOT NULL,
        created_date DATETIME
    )
`;

const createToDoListTable = `
    CREATE TABLE IF NOT EXISTS todolist (
        todo_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        added_date DATETIME,
        description TEXT,
        completed BOOLEAN
    )
`;

const createQuestionTable = `
    CREATE TABLE IF NOT EXISTS todolist (
        question_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        Q1 TEXT, Q2 TEXT, Q3 TEXT,
        Q4 TEXT, Q5 TEXT, Q6 TEXT,
        Q7 TEXT, Q8 TEXT, Q9 TEXT, Q10 TEXT
    )
`;

const createScreenTimeTable = `
    CREATE TABLE IF NOT EXISTS screentime (
        screen_time_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        application_name VARCHAR(255),
        usage_time INT
    )
`;