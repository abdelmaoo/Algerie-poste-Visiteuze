import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Axios from 'axios';

function Table() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState([]);

    const selectRole = (e) => {
        setRole(Array.isArray(e) ? e.map(x => x.label) : [])
    }

    const roleoptions = [
        {
            value: '1',
            label: 'Receptioniste'
        },
        {
            value: '2',
            label: 'Administrateur'
        },
    ]

    const api2 = "http://localhost:3001/users";
    console.log(name, surname, username, password, role);
    
    const addUser = () => {
        Axios.post(api2, {
            name: name,
            surname: surname,
            username: username,
            password: password,
            role: role,
        }).then((response) => {
            console.log(role)
            console.log(response);
            <script>
            
            function myFunction() {
                alert("Ajouté avec succés !")
            }
            </script>
        }).catch((err) => console.log(err));

    };

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

    return (
        <div className='font-poste mt-10'>
            <div id='frame'>
                <button className="bg-bleu text-white rounded-md px-8 py-2 font-poste" id="open-btn" >
                    Ajouter un utilisateur
                </button>
            </div>

            <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50  overflow-y-auto h-full items-center justify-center" id="my-modal">
                <div className="relative p-5 sm:mx-12 md:mx-8  mx-auto lg:w-1/2 w-full shadow-lg rounded-md bg-gris p-12" >
                    <div className="mt-10 sm:mt-0 px-8">
                        <div className="p-4 mb-2 sm:px-0 bg-jaune rounded-full mx-24">
                            <h3 className="text-3xl font-poste font-bold text-bleu">Ajouter un utilisateur</h3>
                        </div>

                        <div className="mt-5 md:mt-0">
                            <div className="overflow-hidden border border-gray-700 sm:rounded-md ">
                                <div className=" px-4 py-5 sm:p-6">
                                    <form method='post' action='#'>
                                        <div className='py-4'>
                                            <label htmlFor="name" className="block text-lg font-bold text-gray-700">
                                                Nom
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="surname" className="block text-lg font-bold text-gray-700">
                                                Prenom
                                            </label>
                                            <input
                                                type="text"
                                                name="surname"
                                                id="surname"
                                                required
                                                onChange={(e) => setSurname(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="username" className="block text-lg font-bold text-gray-700">
                                                Nom d'utilisateur
                                            </label>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                required
                                                onChange={(e) => setUsername(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="password" className="block text-lg font-bold text-gray-700">
                                                Mot de passe
                                            </label>
                                            <input
                                                type="text"
                                                name="password"
                                                id="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>
                                        

                                        <div className='py-4'>
                                                    <label htmlFor="role" className="block text-lg font-bold text-gray-700">
                                                        Role
                                                    </label>
                                                    {/* <select
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
                                                    </select> */}
                                                    <Select isMulti options={roleoptions} onChange={selectRole} id="role" placeholder='Role' required />
                                                </div>
                                    </form>
                                </div>
                                <div className="bg-gris px-4 py-3 text-right sm:px-6">
                                    <button
                                        onClick={addUser}
                                        className="inline-flex justify-center rounded-md bg-bleu py-2 px-4 text-lg font-bold text-white "
                                    >
                                        Enregister
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div >


    );
}

export default Table;

