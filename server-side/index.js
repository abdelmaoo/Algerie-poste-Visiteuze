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
            console.log("baaaack", username)
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

// add RVN
app.post("/rdv",(req,res) =>{
  const name =req.body.name;
  const direction = req.body.direction;
  const number = req.body.number;
  const date = req.body.date;
  const heure_entree = req.body.heure_entree;
  const heure_sortie = req.body.heure_sortie;
  const title = req.body.title;
  const motif = req.body.motif;
  const validation = 0;
  const type_rendezvous = req.body.type_rendezvous;
  const auteur = req.body.auteur;
  const typee = req.body.typee;
  if (heure_entree > heure_sortie) {
    console.log(heure_entree > heure_sortie)
  }else{
  const insert_grp = "INSERT INTO rendezvous (nom,numero_carte,direction,date,heure_entree,heure_sortie,titre,motif,validation,type_rendezvous,auteur) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
  db.query(insert_grp,[name,number,direction,date,heure_entree,heure_sortie,title,motif,validation,type_rendezvous,auteur],(error,result)=>{
    res.send(result);
    console.log("baaaaaack",name,number,direction,date,heure_entree,heure_sortie,title,motif,validation,type_rendezvous,auteur)
    console.log(heure_entree > heure_sortie)
});}
})