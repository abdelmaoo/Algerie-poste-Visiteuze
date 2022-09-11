import React from "react";
import './login.css'
import Img1 from "./images/logImg.png";
import Img2 from "./images/poste.png";
import { Link, Redirect,useHistory } from "react-router-dom";
 function Login(){
      return (
         
          <div className="split-screen">
              <div className="left">
                
                <div className="Img1">
                <img src={Img1} alt="poste" width = "500" height = "500"></img>
              </div>
                 
              </div>
              <div className="right">
                  <form>
                      
                        <div className="Img2">
                      <img src={Img2} alt="poste" width = "350" height = "350" ></img>
                      </div>
                      <section className="copy">
                      <h2>Authentification</h2>
                      </section>
                      <div className="input-container name">
                          <input placeholder="entrez votre nom d'utilisateur" name="nom d'utilisateur" type="text"/>
                      </div>
                      <div>
                
              </div>
                      <div className="input-container name">
                          
                          <input placeholder="entrez votre mot de passe" id="password" name="password" type="password" />
                          <i class="far fa-eye-slash"></i>
                      </div>
                      <div>
              
              </div>
                      <button  className="login-btn" type="button">Se connecter</button>
                  </form>
              </div>
          </div>
      )
      }
   
  



export default Login;