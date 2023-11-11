const express = require("express");
const mongoose = require("mongoose");
const mysql = require("mysql");

const app = express();

app.listen(3000, function(){
  console.log('연결 완료')
})

const connection = mysql.createConnection({
    host: 'dofaming-mysql.co4ylmymttoe.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    database: 'dofamingdb',
    password: 'Tkfrnrtn',
    port: 3306
});

// connection.connect((err) => {
//     if (err) {
//       console.error('MySQL 연결 오류:', err);
//       return;
//     }
//     console.log('MySQL database 연결 성공!!');
//   });