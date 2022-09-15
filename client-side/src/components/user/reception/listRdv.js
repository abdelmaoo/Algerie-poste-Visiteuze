import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import axios from "axios"; 
import { Await } from 'react-router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ListRdv() {
//  var listedata = JSON.stringify(user || null)
    const [infos, setInfos] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const apiget5 = "http://localhost:3001/get_rdv"
    useEffect(() =>  {
        const getInfos =  async () => {
            const { data: res } = await axios.get(apiget5).then(res => res.data).then(res => console.log(res));
            //const dataa = await getData(apiget5)
            setInfos(res);
        };
        getInfos();
        // console.log("heeyy kidayrin", axios.get(apiget5));
        // let dataa = axios.get(apiget5).then(res => res.data).then(res => console.log(res));
        console.log(infos)
    }, []);

{/* <script>
   var listedata = <%- JSON.stringify(listerdv || null) %>
</script> */}



  let rendezvous = [
    {
      id: 1,
      nom: 'abdelmaoo',
      numero_carte: 1111111111111111,
      direction: 'fre',
      date: "2022-01-01",
      heure_entree: "10:30",
      heure_sortie: null,
      titre: " cd ",
      motif: " cdsdf ",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 0
    },
    {
      id: 2,
      nom: 'abdelmaoo2',
      numero_carte: 22222222222222222,
      direction: 'fre',
      date: "2022-02-02",
      heure_entree: "10:30",
      heure_sortie: null,
      titre: " cd ",
      motif: " cdsdf ",
      type_rendezvous: " vdcd ",
      auteur: " vdjkvd ",
      validation: 0
    },
    // {
    //   id: 3,
    //   nom: 'abdelmaoo3',
    //   numero_carte: 333333333333,
    //   direction: 'fre',
    //   date: "2022-03-03",
    //   heure_entree: "10:30",
    //   heure_sortie: null,
    //   titre: " cd ",
    //   motif: " cdsdf ",
    //   type_rendezvous: " vdcd ",
    //   auteur: " vdjkvd ",
    //   validation: 1
    // },
    // {
    //   id: 4,
    //   nom: 'abdelmaoo4',
    //   numero_carte: 444444444444444444,
    //   direction: 'fre',
    //   date: "2022-04-04",
    //   heure_entree: "10:30",
    //   heure_sortie: null,
    //   titre: " cd ",
    //   motif: " cdsdf ",
    //   type_rendezvous: " vdcd ",
    //   auteur: " vdjkvd ",
    //   validation: 1
    // },
    // {
    //   id: 5,
    //   nom: 'abdelmaoo5',
    //   numero_carte: 555555555555555,
    //   direction: 'fre',
    //   date: "2022-05-05",
    //   heure_entree: "10:30",
    //   heure_sortie: "11:30",
    //   titre: " cd ",
    //   motif: " cdsdf ",
    //   type_rendezvous: " vdcd ",
    //   auteur: " vdjkvd ",
    //   validation: 2
    // },
    // {
    //   id: 6,
    //   nom: 'abdelmaoo6',
    //   numero_carte: 66666666666666,
    //   direction: 'fre',
    //   date: "2022-06-06",
    //   heure_entree: "10:30",
    //   heure_sortie: "11:30",
    //   titre: " cd ",
    //   motif: " cdsdf ",
    //   type_rendezvous: " vdcd ",
    //   auteur: " vdjkvd ",
    //   validation: 2
    // },
  ]

  //rendezvous = infos;
  console.log(infos)
  console.log("heeyyy", rendezvous)
  console.log(rendezvous)
  let [rdvs] = useState({
    "a venir": infos.filter(rdv => rdv.validation === 0),
    "en cours": infos.filter(rdv => rdv.validation === 1),
    "termines": infos.filter(rdv => rdv.validation === 2),
  })
//  console.log(results)

  return (
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
        <Tab.Panels className="mt-2">
          {Object.values(rdvs).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="relative rounded-md mx-8 my-3 hover:bg-gray-100 grid grid-cols-3 grid-rows-3 gap-2"
                >
                  <div className="text-2xl place-self-start font-medium col-span-2 row-span-2 font-semibold my-auto">
                    {post.nom} - {post.direction}
                  </div>

                  <div className={classNames('row-span-2 my-auto font-semibold place-self-center',
                    post.heure_sortie ? 'row-span-1' : 'row-span-2')}>Heure d'entree: {post.heure_entree} </div>

                  {post.heure_sortie ? <div className='row-span-1 my-auto font-semibold place-self-center'>Heure de sortie: {post.heure_sortie} </div> : ''}


                  <div className='col-span-1 place-self-start'>Date: {post.date}</div>

                  {post.heure_sortie ?
                    '' :
                    post.validation === 0 ?
                      <div className='col-span-2 place-self-end'>
                        <button className='bg-jaune text-bleu rounded-md px-8 py-2 '>
                          Valider l'entree
                        </button>
                      </div>
                      :
                      < div className='col-span-2 place-self-end	'>
                        <button className='bg-jaune text-bleu rounded-md px-8 py-2 mx-2 '>
                          Valider la sortie
                        </button>
                        <button className='bg-bleu text-white rounded-md px-8 py-2 mx-2'>
                          Export
                        </button>
                      </div>

                  }

                  {/* <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    /> */}
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div >
  )
}
