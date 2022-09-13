import React, {useEffect, useState, useRef } from 'react';
import './login.css'
import Img1 from "./images/logImg.png";
import Img2 from "./images/poste.png";
import { Link, Redirect,useHistory } from "react-router-dom";
import axios from "axios"; 
import {useNavigate, useRoutes} from 'react-router-dom'; 




const Login = () => {
    axios.defaults.withCredentials = true;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [role, setRole] = useState("");
    const api1 = 'http://localhost:3001/l';
/*
    const navigate = useNavigate();   
    console.log('kjfrkjfeko')

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        if(user){
        if (user.role==="administrateur"){
          navigate('/admin', { replace: true })
        }else if(user.role==="receptioniste"){
          navigate('/receptioniste', { replace: true })
        }
      }else{
        
        navigate('/', { replace: true });
      }
      },[role])

      */
    const login = () => {
        axios.post(api1, {
            params: {
                username: username,
                password: password,
            }
        }).then(function(response) {
          console.log(response);
          console.log(username)
          localStorage.setItem('user',JSON.stringify(response.data[0])) ;
          //setRole(response.data[0].role);             
        }).catch(function (error) {
            console.log(error);
        });


  }; 
      

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
                      <button  className="login-btn" onClick={login} type="button">Se connecter</button>
                  </form>
              </div>
          </div>
      )
      }



export default Login;