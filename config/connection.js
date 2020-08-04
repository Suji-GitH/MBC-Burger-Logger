//Require npm dotenv
const dotevn = require("dotenv").config();
//Require npm my sql
const mysql = require("mysql");

//Connection config for DB
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

//Connect to DB
connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(`Connection Id: ${connection.threadId}`);
});

//Export connection for our ORM to use.
module.exports = connection;