import React, {useEffect, useState, useRef } from 'react';
import './login.css'
import Img1 from "./images/logImg.png";
import Img2 from "./images/poste.png";
import { Link, Redirect,useHistory, useLocation, BrowserRouter } from "react-router-dom";
import Axios from "axios"; 
import axios from "axios"; 
import {useNavigate, useRoutes} from 'react-router-dom'; 


const Login = () => {


  Axios.defaults.withCredentials = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  let history = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || '{}');


//   function haya() {
//     if(user){
//       if (user.role==="administrateur"){
//         history("/rdv")
//         console.log(user)
//         console.log(user.role)
//       }else if(user.role==="receptioniste"){
//         history("/rdv")
//         console.log(user.role)
  
//       }
//     }else{
//       console.log("something went wrong", role)
//       history("/");
//     }
// }


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    console.log(user);
    if(user){
      console.log("first if")
      if (user.role==="administrateur"){
        console.log("admin",user)
        history('/table')
        console.log(user.role)
      }else if(user.role==="Receptioniste"){
        console.log("recep",user.role)
        history('/rdv')
      }
    }else{
      console.log("something went wrong", role)
      history('/');
    }
  },[role])
  
  const login = () => {
      Axios.post("http://localhost:3001/l", {
        username: username,
        password: password,
      }).then((response) => {
        console.log(response);
        localStorage.setItem('user',JSON.stringify(response.data[0])) ;
        setRole(response.data[0].role);             
      })
    }

      return (
         
          <div className="split-screen">
              <div className="left font-poste">
                 <div className="Img1">
                  <img src={Img1} alt="poste" width="620" height = "620" text-align="center"></img>
                 </div> 
              </div>

              <div className="right font-poste">
                  <form>
                  <div className="copy">
                        <div className="Img2">
                      <img src={Img2} alt="poste" width = "350" height = "350" ></img>
                      </div>
                  </div>
                      <label>Nom d'utilisateur</label>
                      <div className="input-container name">
                          <input placeholder="Entrez votre nom d'utilisateur" onChange={(e) => {
                            setUsername(e.target.value);}} name="nom d'utilisateur" className='input' type="text"/>
                      </div>

                      <div className="input-container name">
                          <label>Mot de passe</label>
                          <input placeholder="Entrez votre mot de passe" id="password"  onChange={(e) => {
                            setPassword(e.target.value);}} name="password" className='input' type="password" />
                            
                          <i className="far fa-eye-slash"></i>
                      </div>
                      <div>
              
              </div>
                      <button  className="login-btn" onClick={()=>{
                login()
                }} type="button">Se connecter</button>
                  </form>
              </div>
          </div>
      )
      }

export default Login;
