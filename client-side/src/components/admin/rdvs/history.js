import NavBar from "../navbar";
import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import axios from "axios";
import { Await } from 'react-router';
import Select from 'react-select';
import Axios from 'axios';
const fetch = require('node-fetch');

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function History() {
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
    // console.log(rdv.date)
    // console.log(rdv.date)
  })

  let rdvs = {
    "a venir": tab2.filter(rdv => rdv.validation === 0 && day <= rdv.date),
    "en cours": tab2.filter(rdv => rdv.validation === 1 && day.getTime() == rdv.date.getTime()),
    "termines": tab2.filter(rdv => rdv.validation === 2 && day >= rdv.date),
    "annules": tab2.filter(rdv => rdv.validation === 0 && day > rdv.date),
  }


  return (
    <div>
      <NavBar />
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

                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div >
    </div >
  )
}

export default History;
