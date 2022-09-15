import Select from 'react-select';
import Axios from 'axios';
import Table from "./table";
import NavBar from "./../navbar";

function List() {

    return (
        <div>
            <NavBar />
            <Table />
            
            <div className="w-full max-w-4xl px-2 py-16 sm:px-0 mx-auto font-poste" id='modal_list'>
                
                <div className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
                    <div
                        className="relative rounded-md mx-8 my-3 grid grid-cols-3 grid-rows-3 gap-2"
                    >
                        <div className="text-2xl place-self-start font-medium col-span-2 row-span-2 font-semibold my-auto">
                            employe nom
                        </div>

                        <div className='row-span-2 my-auto font-semibold place-self-center'>Role</div>

                        <div className='col-span-1 place-self-start'>username:password</div>

                        <div className='col-span-2 place-self-end'>
                            <button className='bg-red-500 text-white rounded-md px-8 py-2 '>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>      

                <div className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 my-2'>
                    <div
                        className="relative rounded-md mx-8 my-3 grid grid-cols-3 grid-rows-3 gap-2"
                    >
                        <div className="text-2xl place-self-start font-medium col-span-2 row-span-2 font-semibold my-auto">
                            employe nom
                        </div>

                        <div className='row-span-2 my-auto font-semibold place-self-center'>Role</div>

                        <div className='col-span-1 place-self-start'>username:password</div>

                        <div className='col-span-2 place-self-end'>
                            <button className='bg-red-500 text-white rounded-md px-8 py-2 '>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>

                <div className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 my-2'>
                    <div
                        className="relative rounded-md mx-8 my-3 grid grid-cols-3 grid-rows-3 gap-2"
                    >
                        <div className="text-2xl place-self-start font-medium col-span-2 row-span-2 font-semibold my-auto">
                            employe nom
                        </div>

                        <div className='row-span-2 my-auto font-semibold place-self-center'>Role</div>

                        <div className='col-span-1 place-self-start'>username:password</div>

                        <div className='col-span-2 place-self-end'>
                            <button className='bg-red-500 text-white rounded-md px-8 py-2 '>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>

                <div className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 my-2'>
                    <div
                        className="relative rounded-md mx-8 my-3 grid grid-cols-3 grid-rows-3 gap-2"
                    >
                        <div className="text-2xl place-self-start font-medium col-span-2 row-span-2 font-semibold my-auto">
                            employe nom
                        </div>

                        <div className='row-span-2 my-auto font-semibold place-self-center'>Role</div>

                        <div className='col-span-1 place-self-start'>username:password</div>

                        <div className='col-span-2 place-self-end'>
                            <button className='bg-red-500 text-white rounded-md px-8 py-2 '>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>      
            </div>    
        </div >

    )
}

export default List;