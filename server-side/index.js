const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT"],
      credentials: true,}));
  app.use(express.json());

  const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "",
    database: "gestion des visiteurs",
    port: 3325
  });
  
  
  
  
  db.connect((err) => {
      if (!err)
          console.log('DB connection succeded.');
      else
          console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
  });
  
  app.listen(3001, () => {
      console.log("running server");
  });