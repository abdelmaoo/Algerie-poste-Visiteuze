import React from "react";
import "./rdvnp.css";
function RendezVous (){
    return(
        <form className="body">
            
                      <div className="name">
                          <input placeholder="entrez votre nom " name="nom" type="text"/>
                      </div>
                      <div className="direction">
                          <input placeholder="entrez la direction" name="direction" type="text" />
                      </div>
                      <div className="heure ">
                      
                      <input placeholder="entrez l'heure d'entree" name="entree" type="text" />
              </div>
              <div className="heure ">
                      <input placeholder="entrez l'heure de sortie" name="sortie" type="text" />
              </div>
              <div>
              <input placeholder="entrez le titre" name="titre" type="text" />
              </div>
              <div>
              <input placeholder="entrez le motif" name="motif" type="text" />
              </div>

                      <button  className="login-btn" type="button">Ajouter Rendez-Vous</button>
                  </form>
    )
}
export default RendezVous;