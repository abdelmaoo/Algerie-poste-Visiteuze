import NavBar from "../navbar";
import AddRdvp from "./add_rdvp";
import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import axios from "axios";
import { Await } from 'react-router';
import Axios from 'axios';
import Select from 'react-select';
const fetch = require('node-fetch');


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ListRdv() {
  let [todos2, setTodos2] = useState([{}]);

  useEffect(() => {
    const getTodos2 = async () => {
      try {
        const response = await fetch('http://localhost:3001/get_rdv')
        const rdvp = await response.json();
        if (response.ok) {
          setTodos2(rdvp)
          // console.log("response", response);
        }
      } catch (err) {
        // console.error(err.message);
        // console.log("something went wrong");
      }
    }
    getTodos2();
  }, []);

  const [name, setName] = useState('');
  const [direction, setDirection] = useState([]);
  const [date, setDate] = useState('');
  const [heure_entree, setHeure_entree] = useState('');
  const [title, setTitle] = useState('');
  const [motif, setMotif] = useState('');
  const [validation, setValidation] = useState('');

  const user = JSON.parse(localStorage.getItem("user") || '{}');
  const auteur = user.username;
  const role = user.role;

  const selectDirection = (e) => {
    setDirection(Array.isArray(e) ? e.map(x => x.label) : [])
  }

  let typee = 0;
  let type_rendezvous = "";

  const directionoptions = [
    { value: '1', label: 'DG' },
    { value: '2', label: 'DCM' },
    { value: '3', label: 'DRHF' },
    { value: '4', label: 'DCF' },
    { value: '5', label: 'DPMG' },
    { value: '6', label: 'DFC' },
    { value: '7', label: 'DDCC' },
    { value: '8', label: 'DDMSFP' },
    { value: '9', label: 'DDR' },
    { value: '10', label: 'DISR' },
    { value: '11', label: 'DC' },
    { value: '12', label: 'DDIC' },
    { value: '13', label: 'DAJRI' },
    { value: '14', label: 'DNQ' },
    { value: '15', label: 'DINSP' },
    { value: '16', label: 'DSI-SIE' },
    { value: '17', label: 'DSOCG' },
    { value: '18', label: 'DACI' },
    { value: '19', label: 'DIPB' },
    { value: '20', label: 'DCPLCBC-FT' }
  ]

  const api6 = "http://localhost:3001/rdvp";
  console.log(name, direction, date, heure_entree, title, motif, validation);
  console.log(role, role == "receptioniste");
  if (role == "administrateur") {
    type_rendezvous = "RVP";
  } else {
    type_rendezvous = "RVNP";
  }

  const updRDV = () => {
    Axios.post(api6, {
      name: name,
      direction: direction,
      date: date,
      heure_entree: heure_entree,
      title: title,
      motif: motif,
      validation: validation,
      auteur: auteur,
      type_rendezvous: type_rendezvous,
    }).then((response) => {
      console.log(response);
      console.log(user, auteur)



    }).catch((err) => console.log(err));
  };

  let tab2 = [...todos2]
  let day = new Date()
  day.setHours(0,0,0,0)

  tab2.map((rdv) => {
    rdv.date = new Date(Date.parse(rdv.date))
    console.log(day <= rdv.date)
  })
  let rdvs = {
    "a venir": tab2.filter(rdv => rdv.validation === 0 && day.getTime() == rdv.date.getTime()),
    "en cours": tab2.filter(rdv => rdv.validation === 1 && day.getTime() == rdv.date.getTime()),
    "termines": tab2.filter(rdv => rdv.validation === 2 && day.getTime() == rdv.date.getTime()),
  }
  console.log("this is rdvs", rdvs)

  let edit_modal = document.getElementById("edit-modal");

  const editRDV = (self) => {
    let da_rdv = tab2.find(t => t.id == self.target.dataset.id)
    edit_modal.style.display = "flex"
    document.getElementById('name').value = da_rdv.nom
    document.getElementById('heure_entree').value = da_rdv.heure_entree
    document.getElementById('title').value = da_rdv.titre
    document.getElementById('motif').value = da_rdv.motif
  }

  document.onclick = function (event) {
    if (event.target == edit_modal) {
      edit_modal.style.display = "none";
    }
  }
  return (
    <div>
      <NavBar />
      <AddRdvp />
      <div className="w-full max-w-4xl px-2 py-16 sm:px-0 mx-auto font-poste" id='modal_table'>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-bleu p-1">
            {Object.keys(rdvs).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-base leading-5 text-bleu',
                    'ring-white ring-opacity-40 ring-offset-2 ring-offset-bleu focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-jaune hover:bg-white/[0.12] '
                  )
                }
              >
                RDVs {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-4">
            {Object.values(rdvs).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-gris ',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-md py-4 px-12 mb-4 mx-2 bg-white grid grid-flow-col grid-cols-2 grid-rows-6 gap-2"
                  >
                    <div className="text-2xl place-self-start font-medium col-span-1 row-span-2 font-semibold my-auto">
                      {post.nom} - {post.direction}
                    </div>

                    <div className='col-span-1 place-self-start'><b>Titre:</b> {post.titre}</div>

                    <div className='col-span-1  row-span-3 place-self-start text-left break-all'> <b>Motif:</b><br /> {post.motif}</div>


                    <div></div>
                    <div className={'row-span-1 font-semibold place-self-end '}>Le {post.date.toLocaleDateString()}</div>


                    <div className={'row-span-1 font-semibold place-self-end '}>Heure d'entree: {post.heure_entree} </div>

                    {
                      post.validation === 2 &&
                      <div className='row-span-1  font-semibold place-self-end'>
                        Heure de sortie {post.heure_sortie}
                      </div>

                    }

                    {post.validation != 0 &&
                      <div className='row-span-1 place-self-end'>
                        Entree par {post.auteur}
                      </div>
                    }


                    {post.validation === 0 && <div></div> &&
                      <div className='col-span-1 row-end-6 place-self-end'>
                        <button className='bg-bleu text-white rounded-md px-4 py-2 mx-1' data-id={post.id} onClick={editRDV} >
                          Modifier
                        </button>
                        {/* <button className='bg-jaune text-bleu rounded-md px-4 py-2 mx-1'>
                          Supprimer
                        </button> */}
                      </div>
                    }
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div >

      <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50  overflow-y-auto h-full items-center justify-center backdrop-blur-sm" id="edit-modal">
        <div className="relative p-6 sm:mx-12 md:mx-8  mx-auto lg:w-1/2 w-full shadow-lg rounded-md bg-gris " >
          <div className="mt-5 sm:mt-0 px-8">
            <div className="p-4 mb-2 sm:px-0 bg-jaune rounded-full mx-24">
              <h3 className="text-xl font-poste font-bold text-bleu">Modifier un rendez-vous</h3>
            </div>

            <div className="mt-4 md:mt-0">
              <div className="overflow-hidden border border-gray-700 sm:rounded-md ">
                <div className=" px-4 py-5 sm:p-6">
                  <form method='post' action='#'>
                    <div className='py-2'>
                      <label htmlFor="name" className="block text-base font-bold text-gray-700">
                        Nom
                      </label>

                      <input
                        placeholder='entrez le nom et le prenom'
                        type="text"
                        name="name"
                        id="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        className="mt-1 block w-full rounded-md border border-gray-300 h-6 p-4"
                      />
                    </div>

                    <div className='py-2'>
                      <label htmlFor="direction" className="block text-base font-bold text-gray-700">
                        Direction
                      </label>

                      <Select isMulti options={directionoptions} onChange={selectDirection} id="direction" placeholder='Direction' required />
                    </div>

                    <div className='py-2'>
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

                    <div className='py-2'>
                      <label htmlFor="heure_entree" className="block text-lg font-bold text-gray-700">
                        Heure du rendez-vous
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

                    <div className='py-2'>
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

                    <div className='py-2'>
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

                <div className="bg-gris px-4 py-2 text-right sm:px-6">
                  <button onClick={updRDV} className="inline-flex justify-center rounded-md bg-bleu py-2 px-4 text-lg font-bold text-white" > Modifier </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ListRdv;
