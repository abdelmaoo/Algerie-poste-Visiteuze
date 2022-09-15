import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Axios from 'axios';
function RendezVous() {

    const [name, setName] = useState('');
    const [direction, setDirection] = useState([]);
    const [date, setDate] = useState('');
    const [number, setNumber] = useState('');
    const [heure_entree, setHeure_entree] = useState('');
    const [heure_sortie, setHeure_sortie] = useState('');
    const [title, setTitle] = useState('');
    const [motif, setMotif] = useState('');
    const [validation, setValidation] = useState('');

    const selectDirection = (e) => {
        setDirection(Array.isArray(e) ? e.map(x => x.label) : [])
    }

    const directionoptions = [
        {
            value: '1',
            label: 'DG'
        },
       
        {
            value: '2',
            label: 'DCM'
        },
        {
            value: '3',
            label: 'DRHF'
        },
        {
            value: '4',
            label: 'DCF'
        },
        {
            value: '5',
            label: 'DPMG'
        },
        {
            value: '6',
            label: 'DFC'
        },
        {
            value: '7',
            label: 'DDCC'
        },
        {
            value: '8',
            label: 'DDMSFP'
        },
       
        {
            value: '9',
            label: 'DDR'
        },
        {
            value: '10',
            label: 'DISR'
        },
         {
            value: '11',
            label: 'DC'
        },
        {
            value: '12',
            label: 'DDIC'
        },
        {
            value: '13',
            label: 'DAJRI'
        },
        {
            value: '14',
            label: 'DNQ'
        },
       
        {
            value: '15',
            label: 'DINSP'
        },
        {
            value: '16',
            label: 'DSI-SIE'
        },
        {
            value: '17',
            label: 'DSOCG'
        },
        {
            value: '18',
            label: 'DACI'
        },
        {
            value: '19',
            label: 'DIPB'
        },
        {
            value: '20',
            label: 'DCPLCBC-FT'
        },
    ]

    const api2 = "http://localhost:3001/users";
    console.log(name, direction, number,date,heure_entree,heure_sortie,title, motif, validation);
    
    const addRVn = () => {
        Axios.post(api2, {
            name: name,
            direction: direction,
            number: number,
            date: date,
            heure_entree: heure_entree,
            heure_sortie: heure_sortie,
            title: title,
            motif: motif,
            validation: validation,
        }).then((response) => {
            
            console.log(response);
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
                    Ajouter rendez-vous
                </button>
            </div>

            <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50  overflow-y-auto h-full items-center justify-center" id="my-modal">
                <div className="relative p-5 sm:mx-12 md:mx-8  mx-auto lg:w-1/2 w-full shadow-lg rounded-md bg-gris p-12" >
                    <div className="mt-10 sm:mt-0 px-8">
                        <div className="p-4 mb-2 sm:px-0 bg-jaune rounded-full mx-24">
                            <h3 className="text-3xl font-poste font-bold text-bleu">Ajouter rendez-vous</h3>
                        </div>

                        <div className="mt-5 md:mt-0">
                            <div className="overflow-hidden border border-gray-700 sm:rounded-md ">
                                <div className=" px-4 py-5 sm:p-6">
                                    <form method='post' action='#'>
                                        <div className='py-4'>
                                            <label htmlFor="name" className="block text-lg font-bold text-gray-700">
                                                Nom et prenom
                                            </label>
                                            <input
                                                placeholder='entrez le nom et prenom'
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <Select options={directionoptions} onChange={selectDirection} id="direction" placeholder='Direction' required />
                                         
                                        <div className='py-4'>
                                            <label htmlFor="number" className="block text-lg font-bold text-gray-700">
                                               Numero de la piece
                                            </label>
                                            <input
                                                placeholder='entrez le numero de la piece'
                                                type="text"
                                                name="number"
                                                id="number"
                                                required
                                                onChange={(e) => setNumber(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>
                                          
                                        <div className='py-4'>
                                            <label htmlFor="date" className="block text-lg font-bold text-gray-700">
                                                Date
                                            </label>
                                            <input
                                                placeholder='entrez la date'
                                                type="date"
                                                name="date"
                                                id="date"
                                                required
                                                onChange={(e) => setDate(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="heure_entree" className="block text-lg font-bold text-gray-700">
                                               Heure d'entree
                                            </label>
                                            <input
                                                placeholder='entrez heure entree'
                                                type="time"
                                                name="heure_entree"
                                                id="heure_entree"
                                                required
                                                onChange={(e) => setHeure_entree(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="heure_entree" className="block text-lg font-bold text-gray-700">
                                               Heure de sortie
                                            </label>
                                            <input
                                                placeholder='entrez heure sortie'
                                                type="time"
                                                name="heure_sortie"
                                                id="heure_sortie"
                                                required
                                                onChange={(e) => setHeure_sortie(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="title" className="block text-lg font-bold text-gray-700">
                                                Titre
                                            </label>
                                            <input
                                                placeholder='entrez le titre'
                                                type="text"
                                                name="title"
                                                id="title"
                                                required
                                                onChange={(e) => setTitle(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 block w-full rounded-md border border-gray-300 h-8 p-4"
                                            />
                                        </div>

                                        <div className='py-4'>
                                            <label htmlFor="motif" className="block text-lg font-bold text-gray-700">
                                                Motif
                                            </label>
                                            <textarea
                                                
                                                name="motif"
                                                id="motif"
                                                required
                                                onChange={(e) => setMotif(e.target.value)}
                                                autoComplete="off"
                                                className="mt-1 overflow-hidden block w-full rounded-md border border-gray-300  p-2">
                                            </textarea>
                                        </div>
                                        

                                       
                                      
                                    </form>
                                </div>
                                <div className="bg-gris px-4 py-3 text-right sm:px-6">
                                    <button
                                        onClick={addRVn}
                                        className="inline-flex justify-center rounded-md bg-bleu py-2 px-4 text-lg font-bold text-white "
                                    >
                                        Ajouter
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
export default RendezVous;