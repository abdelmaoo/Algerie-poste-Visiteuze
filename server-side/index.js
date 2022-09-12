const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var bp = require('body-parser')

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT"],
      credentials: true,}));
  app.use(express.json());
  app.use(bp.urlencoded({ extended: false }))
  app.use(bp.json())


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



  //authentification
app.post("/l", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    console.log(username)
    console.log("baack")
    db.query(
      "SELECT * FROM auth WHERE username = ? AND password = ?",
      [username,password],
      (err, result) => {
        if(err){
        res.send({err:err})}
  
         if (result) {
            res.send(result);
            console.log(result)
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
            }
    );
          })

// add user
          app.post("/users",(req,res) =>{
            const nom =req.body.name;
            const prenom = req.body.surname;
            const username = req.body.username;
            const password = req.body.password;
            const role = req.body.role;
            const insert_grp = "INSERT INTO auth (username,password,nom,prenom,role) VALUES (?,?,?,?,?)"
            db.query(insert_grp,[username,password,nom,prenom,role],(error,result)=>{
              res.send(result);
              console.log("baaaaaack", nom)
          });
          })