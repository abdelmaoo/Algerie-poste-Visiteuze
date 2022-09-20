import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ArrowLeftOnRectangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../images/poste.png";
import { useNavigate } from 'react-router-dom';


  const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Rendez-vous', href: '/rdv', current: false },
    { name: 'Employes', href: '/table', current: false }
  ]
function classNames(...classes) {

  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  let navigate = useNavigate();
  function logout() {
    JSON.parse(localStorage.clear() || '{}')
    navigate('/');
  }
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8"> { /* max-w-7xl */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center px-2">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Compallny"
                  />
                  <img
                    className="hidden h-10 w-auto lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <button
                  type="button"
                  onClick={() => {
                    logout()
                  }}
                  className="rounded-full bg-bleu p-1 text-gris hover:text-jaune focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white flex space-x-2 items-center"
                >
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="align-middle hidden p-2 text-sm ml-0 sm:inline-block">Se deconnecter</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}