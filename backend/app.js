const express = require("express");
const mongoose = require("mongoose");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: 'dofaming-mysql.co4ylmymttoe.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    password: 'Tkfrnrtn',
    database: 'dofamingdb'
});

connection.connect((err) => {
    if (err) {
      console.error('MySQL 연결 오류:', err);
      return;
    }
    console.log('MySQL database 연결 성공!!');
  });

  connection.end((err) => {
    if (err) {
      console.error('MySQL 연결 해제 오류:', err);
      return;
    }
    console.log('MySQL database 연결 해제 성공!!');
  });