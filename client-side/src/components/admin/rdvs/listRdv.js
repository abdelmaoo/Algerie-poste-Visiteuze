import NavBar from "../navbar";
import AddRdvp from "./add_rdvp";
import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import axios from "axios";
import { Await } from 'react-router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ListRdv() {
  //  var listedata = JSON.stringify(user || null)
  // const [infos, setInfos] = useState([]);
  // const user = JSON.parse(localStorage.getItem('user'));
  // const id = user.id;
  // const apiget5 = "http://localhost:3001/get_rdv"
  // useEffect(() =>  {
  //     const getInfos =  async () => {
  //         const { data: res } = await axios.get(apiget5).then(res => res.data).then(res => console.log(res));
  //         //const dataa = await getData(apiget5)
  //         setInfos(res);
  //     };
  //     getInfos();
  //     // console.log("heeyy kidayrin", axios.get(apiget5));
  //     // let dataa = axios.get(apiget5).then(res => res.data).then(res => console.log(res));
  //     console.log(infos)
  // }, []);

  {/* <script>
   var listedata = <%- JSON.stringify(listerdv || null) %>
</script> */}



  let rendezvous = [
    {
      id: 1,
      nom: 'abdelmaoo',
      numero_carte: 1111111111111111,
      direction: 'fre',
      date: "9/14/2022",
      heure_entree: "10:30",
      heure_sortie: null,
      titre: " cd ",
      motif: " cjendckjdfnjekrkenvrijemcernmcnf\n      vjknvjrnvrjtnvirvrktjvbnktivbrnnb\nvjrekreijsvkneknvciwnvwelrnvisl\tc",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 0
    },
    {
      id: 2,
      nom: 'abdelmaoo2',
      numero_carte: 2222222222,
      direction: 'fre',
      date: "9/20/2022",
      heure_entree: "11:30",
      heure_sortie: null,
      titre: " cd ",
      motif: " cjendckjdfnjekrkenvrijemcernmcnfcjendckjdfnjekrkenvrijemcernmcnfcjendckjdfnjekrkenvrijemcernmcnfe\n      vjknvjrnvrjtnvirvrktjvbnktivbrnnb\nvjrekreijsvkneknvciwnvwelrnvisl\tc",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 0
    },
    {
      id: 3,
      nom: 'abdelmaoo3',
      numero_carte: 333333333333,
      direction: 'fre',
      date: "9/16/2022",
      heure_entree: "10:30",
      heure_sortie: null,
      titre: " cd ",
      motif: " cjendckjdfnjekrkenvrijemcernmcnf\n      vjknvjrnvrjtnvirvrktjvbnktivbrnnb\nvjrekreijsvkneknvciwnvwelrnvisl\tc",
      type_rendezvous: " vdcd ",
      auteur: " vcsdsdjkvd ",
      validation: 1
    },
    {
      id: 4,
      nom: 'abdelmaoo4',
      numero_carte: 4444444444,
      direction: 'fre',
      date: "9/4/2022",
      heure_entree: "10:30",
      heure_sortie: null,
      titre: " cd ",
      motif: " cjendckjdfnjekrkenvrijemcernmcnf\n      vjknvjrnvrjtnvirvrktjvbnktivbrnnb\nvjrekreijsvkneknvciwnvwelrnvisl\tc",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 0
    },
    {
      id: 5,
      nom: 'abdelmaoo5',
      numero_carte: 555555555555555,
      direction: 'fre',
      date: "9/14/2022",
      heure_entree: "10:30",
      heure_sortie: "11:30",
      titre: " cd ",
      motif: " cjendckjdfnjekrkenvrijemcernmcnf\n      vjknvjrnvrjtnvirvrktjvbnktivbrnnb\nvjrekreijsvkneknvciwnvwelrnvisl\tc",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 2
    },
    {
      id: 6,
      nom: 'abdelmaoo6',
      numero_carte: 66666666666666,
      direction: 'fre',
      date: "9/16/2022",
      heure_entree: "10:30",
      heure_sortie: "11:30",
      titre: " cd ",
      motif: " cjendckjdfnjekrkenvrijemcernmcnfcjendckjdfnjekrkenvrijemcernmcnfcjendckjdfnjekrkenvrijemcernmcnf\n      vjknvjrnvrjtnvirvrktjvbnktivbrnnb\nvjrekreijsvkneknvciwnvwelrnvisl\tc ",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 2
    },
  ]

  //rendezvous = infos;
  // console.log(infos)
  // console.log("heeyyy", rendezvous)
  // console.log(rendezvous)
  let day = new Date()
  day.setHours(0, 0, 0, 0)

  let [rdvs] = useState({
    "a venir": rendezvous.filter(rdv => rdv.validation === 0 && day <= new Date(rdv.date)),
    "en cours": rendezvous.filter(rdv => rdv.validation === 1 && day == new Date(rdv.date)),
    "termines": rendezvous.filter(rdv => rdv.validation === 2 && day > new Date(rdv.date)),
    "annules": rendezvous.filter(rdv => rdv.validation === 0 && day > new Date(rdv.date)),
  })

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
                    className="relative rounded-md py-4 px-12 mb-4 mx-2 bg-gray-100  grid grid-flow-col grid-cols-4 grid-rows-6 gap-2"
                  >
                    <div className="text-2xl place-self-start font-medium col-span-3 row-span-2 font-semibold my-auto">
                      {post.nom} - {post.direction}
                    </div>

                    <div className='col-span-3 place-self-start'><b>Titre:</b> {post.titre}</div>

                    <div className='col-span-3  row-span-3 place-self-start text-left break-all'> <b>Motif:</b><br /> {post.motif}</div>

                    <div className={'row-span-2 my-auto font-semibold place-self-end '}>Le {post.date} a {post.heure_entree} </div>


                    {
                      post.validation === 2 &&
                      <div className='place-self-end font-semibold'>
                        Heure de sortie {post.heure_sortie}
                      </div>

                    }

                    {post.validation != 0 &&
                      <div className='place-self-end'>
                        Entree par {post.auteur}
                      </div>
                    }



                    {post.validation === 0 ?
                      <div className='col-span-1 row-end-6 place-self-end'>
                        <button className='bg-jaune text-bleu rounded-md px-8 py-2 '>
                          Supprimer
                        </button>
                      </div>
                      :
                      ''
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

export default ListRdv;
