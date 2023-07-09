import { Fragment, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUser from "../contexts/CurrentUser";

const NavBar = () => {
  const { currentUser } = useContext(CurrentUser);
  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  let loginActions = (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <Link
        to="/user/login"
        className="text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        Sign In
      </Link>
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <Link
        to="/user/register"
        className="text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        Create Account
      </Link>
    </div>
  );

  if (currentUser) {
    loginActions = (
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <p className="text-sm font-medium text-gray-700 hover:text-gray-800">
          Welcome {currentUser.firstName}!
        </p>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <Link
          to="/"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
          onClick={() => logout()}
        >
          Logout
        </Link>
      </div>
    );
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4"></Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}></Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to="/AllProducts"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Shop All
                  </Link>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flor-root font-medium text-gray-900">
                    <Link to="/products/womens">Women</Link>
                  </div>
                  <div className="flor-root font-medium text-gray-900">
                    <Link to="/products/mens">Men</Link>
                  </div>
                  <div className="flor-root font-medium text-gray-900">
                    <Link to="/products/all">Shop All</Link>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to="/user/login"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="/user/register"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* speacial offer */}
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              <div className=" flex">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to="/products/womens"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ml-4"
                  >
                    Women
                  </Link>
                  <Link
                    to="/products/mens"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ml-4"
                  >
                    Men
                  </Link>
                  <Link
                    to="/products/all"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ml-4"
                  >
                    Shop All
                  </Link>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                {loginActions}

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* wishlist */}
                {currentUser && (
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link
                      to="/user/wishlist"
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
