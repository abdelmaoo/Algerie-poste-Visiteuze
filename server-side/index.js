const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var bp = require('body-parser')
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');

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
    database: "poste",
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
  const validation = req.body.validation;
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

// Get RDVs
app.get("/get_rdv", async (req, res) => {
  datab = await db.query("SELECT * FROM rendezvous", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log("ACCEPTmodddddddddd");
      res.send(result);
    }
  }); });

  //"SELECT id,nom,direction,date,heure_entree,heure_sortie,tite,motif,validation,type_rendevous,auteur FROM rendezvous"
// Get accounts
app.get("/get_account",(req, res) => {
  db.query("SELECT * FROM auth", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log("kidayrinnn");
      res.send(result);
    }
  }); });

  // add RVP
app.post("/rdvp",(req,res) =>{
  const name =req.body.name;
  const direction = req.body.direction;
  const number = null;
  const date = req.body.date;
  const heure_entree = req.body.heure_entree;
  const heure_sortie = null;
  const title = req.body.title;
  const motif = req.body.motif;
  const validation = 0;
  const type_rendezvous = req.body.type_rendezvous;
  const auteur = req.body.auteur;
  const typee = req.body.typee;
  const insert_grp = "INSERT INTO rendezvous (nom,numero_carte,direction,date,heure_entree,heure_sortie,titre,motif,validation,type_rendezvous,auteur) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
  db.query(insert_grp,[name,number,direction,date,heure_entree,heure_sortie,title,motif,validation,type_rendezvous,auteur],(error,result)=>{
    res.send(result);
    console.log(error)
    console.log("baaaaaack rvp",name,number,direction,date,heure_entree,heure_sortie,title,motif,validation,type_rendezvous,auteur)
  });
})


app.get('/document.pdf', async (req, res) => {

  // db.query("SELECT * FROM rendezvous WHERE id= 1", (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //     console.log("kidayrinnn");
  //     let name = result.nom;
  //     console.log(nom)
  //   }
  // });
  const name =req.body.name;
  const direction = req.body.direction;
  const number = 15;
  const date = req.body.date;
  const heure_entree = req.body.heure_entree;
  const title = req.body.title;
  const motif = req.body.motif;
  const type_rendevous = req.body.type_rendevous;
  const doc = new PDFDocument();
  //let name = "anoir"
  
  // vv The following line is the one you're looking for
  doc.pipe(res);

  doc.image('C:/Users/user/Desktop/poste/client-side/src/components/images/poste.png', 0, 10, {width: 300})
    .moveDown()
    .moveDown()
    .moveDown()
    .moveDown()
     .font('Helvetica-Bold').text('\n Bon de visite \n', {
      align: 'center',
     })
     .moveDown()
     .moveDown()
     .moveDown()
     .moveDown()
    .text(`Nom: ${name}`, {
  width: 410,
  align: 'left'
}
) 
.moveDown()
.moveDown()
.moveDown()
.text(`Numero de carte: ${number}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text(`Direction: ${direction}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text(`Type de rendez vous: ${type_rendevous}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text(`Date: ${date}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text(`Heure d\'entree: ${heure_entree}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text('Heure de sortie:', {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text(`Titre: ${title}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
.text(`Motif: ${motif}`, {
  width: 410,
  align: 'left'
}
).moveDown()
.moveDown()
.moveDown()
    .font('Times-Roman', 13);

  doc.end();

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
  });
});
