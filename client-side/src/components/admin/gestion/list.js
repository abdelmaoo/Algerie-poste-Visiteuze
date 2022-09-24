import Select from 'react-select';
import Axios from 'axios';
import Table from "./table";
import NavBar from "./../navbar";
import { useState, useEffect } from 'react';

function List() {
    let [infos, setInfos] = useState([]);

    useEffect(() => {
        const getInfos = async () => {
          try {
            const response = await fetch('http://localhost:3001/get_account')
            const accounts = await response.json();
            if (response.ok) {
              setInfos(accounts)
              console.log(accounts)
            }
          } catch (err) {
            console.error(err.message);
          }
        }
        getInfos();
      }, []);

let iddel;
      const valAcc = (self) => {
        iddel = self.target.dataset.id
        console.log(iddel)
      };

      const del = (self) => {
        iddel = self.target.dataset.id;
        console.log(iddel)
        Axios.put("http://localhost:3001/deleteacc", {
            iddel: iddel,
        }).then((response) => {
            console.log(response);
            console.log("idddd",iddel)
        }).catch((err) => console.log(err));
      };

      const del2 = () =>{
        del();

      }

      
    return (
        <div>
            <NavBar />
            <Table />
            <div className="w-full max-w-4xl px-2 py-4 sm:px-0 mx-auto font-poste" id='modal_list'>
            {infos.map(user =>
                
                <div className='rounded-xl my-2 bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' >
                    <div
                        className="relative rounded-md mx-8 my-3 grid grid-cols-3 grid-rows-3 gap-2"
                    >
                        <div className="text-2xl place-self-start font-medium col-span-2 row-span-2 font-semibold my-auto">
                          {user.nom}
                        </div>

                        <div className='row-span-2 my-auto font-semibold place-self-center'> {user.role}</div>

                        <div className='col-span-1 place-self-start'>{user.username} - {user.password}</div>

                        <div className='col-span-2 place-self-end'>
                            <button className='bg-red-500 text-white rounded-md px-8 py-2 ' id='deletee'  data-id={user.id} onClick={
                 del
            }>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>          
             )}  
             </div>  
        </div >

    )
}

export default List;