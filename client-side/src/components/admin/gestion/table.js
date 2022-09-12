import React, { useState, useEffect } from 'react';
import './table.css';
import Select from 'react-select';

function Table() {
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
        <div className='font-poste'>
            <div id='frame'>
                <button className="bg-bleu text-white rounded-md px-8 py-2 font-poste" id="open-btn" >
                    Ajouter un utilisateur
                </button>
            </div>

            <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50  overflow-y-auto h-full items-center justify-center" id="my-modal">
                <div className="relative p-5 sm:mx-12 md:mx-8  mx-auto lg:w-1/2 w-full shadow-lg rounded-md bg-gris p-12" >
                    <div className="mt-10 sm:mt-0 px-8">
                        <div className="p-4 mb-2 sm:px-0">
                            <h3 className="text-3xl font-poste font-bold">Ajouter un utilisateur</h3>
                        </div>
                        
                        <div className="mt-5 md:mt-0">
                            <div className="overflow-hidden border border-gray-700 sm:rounded-md ">
                                <div className=" px-4 py-5 sm:p-6">
                                        <div className='py-4'>
                                            <label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
                                                Nom
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="last-name" className="block text-lg font-bold text-gray-700">
                                                Prenom
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="email-address" className="block text-lg font-bold text-gray-700">
                                                Nom d'utilisateur
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="city" className="block text-lg font-bold text-gray-700">
                                                Mot de passe
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="role" className="block text-lg font-bold text-gray-700">
                                                Role
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-5"
                                            >
                                                <option>Receptionniste</option>
                                                <option>Administrateur</option>
                                            </select>
                                        </div>
     
                                </div>
                                <div className="px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
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
        </div>            


);
}

export default Table;

