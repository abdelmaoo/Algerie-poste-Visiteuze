import React, {useEffect, useState, useRef } from 'react';
import './login.css'
import Img1 from "./images/logImg.png";
import Img2 from "./images/poste.png";
import { Link, Redirect,useHistory } from "react-router-dom";
import Axios from "axios"; 
import axios from "axios"; 
import {useNavigate, useRoutes} from 'react-router-dom'; 


const Login = () => {


  Axios.defaults.withCredentials = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    console.log(user);
    if(user){
    if (user.role==="administrateur"){
      navigate('/rendezvous')
      console.log(user)
      console.log(user.role)
    }else if(user.role==="receptioniste"){
      navigate('/table')
      console.log(user.role)

    }
  }else{
    console.log("something went wrong", role)
    navigate('/');
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
                          <input placeholder="entrez votre nom d'utilisateur" onChange={(e) => {
                            setUsername(e.target.value);}} name="nom d'utilisateur" className='input' type="text"/>
                      </div>
                    
                      <div className="input-container name">
                          
                          <input placeholder="entrez votre mot de passe" id="password"  onChange={(e) => {
                            setPassword(e.target.value);}} name="password" className='input' type="password" />
                            
                          <i class="far fa-eye-slash"></i>
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
