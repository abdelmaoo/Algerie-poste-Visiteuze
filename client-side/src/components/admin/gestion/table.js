import React, { useState,useEffect } from 'react';
import './table.css';
import Select from 'react-select';

function Table() {
    return (
            <div className="col-1">
                <div id='form'>
                <div id='inpgrp1'>
                    <label>Nom</label>
                    <input type="text"  placeholder='Enter Nom' id='nomgrp' required />
                    </div>
                    <div id='inpgrp2'>
                        <label>Matricule</label>
                        <input type="number"  placeholder='Entrer Matricule' id='matriculegrp' required />
                    </div>
                    <Select isMulti  id="niveaugrp" placeholder='Selecter-Niveau' required/>
                    <Select  isMulti id="sectiongrp" placeholder='Selecter-Section' required/>
                    <button className='btngrp'>Ajouter</button>
                </div>
    
            </div>
    );
}

export default Table;

