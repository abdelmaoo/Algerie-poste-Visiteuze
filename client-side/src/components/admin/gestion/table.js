import React, { useState, useEffect } from 'react';
import './table.css';
import Select from 'react-select';
import Axios from 'axios';
function Table() {

    const [name,setName] =  useState('');
    const [surname,setSurname] =  useState('');
    const [username,setUsername] =  useState('');
    const [password,setPassword]=useState('');
    const [role,setRole] =  useState([]);

    const  selectRole =(e) => {
        setRole(Array.isArray(e)?e.map(x =>x.label) : [])
       } 

       const roleoptions=[
        {
          value:'1',
          label:'Receptioniste'
        },
        {
          value:'2',
          label:'Administrateur'
        },
      ]

    const api2 = "http://localhost:3001/users";
    console.log(name,surname,username,password,role);

/*
    useEffect(() => {
        let modal = document.getElementById("my-modal");

        let btn = document.getElementById("open-btn");

        let frame = document.getElementById("frame");
        btn.onclick = function () {
            modal.style.display = "flex";
            frame.classList.add('blur');

        }
   

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                frame.classList.remove('blur')
            }
        }
    });

*/
    const addUser=()=>{ 
        Axios.post(api2,{
            name:name,
            surname:surname,
            username:username,
            password:password,
            role:role,
          }).then((response)=>{ 
            console.log(role)
            console.log(response);
         }).catch((err) => console.log(err));

      };

    return (
        <div >
            <div id='frame'>
                <button className="bg-blue-800 text-white rounded-md px-8 py-2 text-base font-medium" id="open-btn" >
                    Ajouter un utilisateur
                </button>
            </div>
            <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50  overflow-y-auto h-full  flex items-center justify-center" id="my-modal">
                <div className="relative p-5 border sm:mx-12 md:mx-8  mx-auto lg:w-1/2 w-full shadow-lg rounded-md bg-white p-12" >


                    <div className="mt-10 sm:mt-0">
                        <div className='px-8'>
                            
                            <div className="p-4 sm:px-0">
                                <h3 className="text-3xl font-medium leading-6 text-gray-900">Ajouter un utilisateur</h3>
                            </div>
                          
                            <div className="mt-5 md:mt-0">
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <form method='post' action='#'>
                                                <div className='py-4'>
                                                    <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                                        Nom
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        onChange={(e) =>setName(e.target.value)}
                                                        autoComplete="off"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-6 p-4"
                                                    />
                                                </div>

                                                <div className='py-4'>
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Prenom
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        onChange={(e) =>setSurname(e.target.value)}
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-6 p-4"
                                                    />
                                                </div>

                                                <div className='py-4'>
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Nom d'utilisateur
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email-address"
                                                        id="email-address"
                                                        onChange={(e) =>setUsername(e.target.value)}
                                                        autoComplete="email"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-6 p-4"
                                                    />
                                                </div>

                                                <div className='py-4'>
                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                        Mot de passe
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        onChange={(e) =>setPassword(e.target.value)}
                                                        autoComplete="address-level2"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-6 p-4"
                                                    />
                                                </div>
     
                                                {/* <div className='py-4'>
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Role
                                                    </label>
                                                    <select
                                                        id="role"
                                                        name="role"
                                                        isMulti
                                                        options={roleoptions}
                                                        onChange={selectRole}
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Receptioniste</option>
                                                        <option>Administrateur</option>
                                                    </select>
                                                </div> */}
                                     <Select isMulti options={roleoptions}  onChange={selectRole} id="role" placeholder='Selecter-niveau' required/>
                                            </form>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                onClick={addUser}
                                                className="inline-flex justify-center rounded-md  bg-indigo-600 py-2 px-4 text-sm font-medium text-white "
                                            >
                                                Enregister
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>            


);
}

export default Table;

