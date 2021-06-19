import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./UI/Button";
import { NavLink, Link, useLocation } from "react-router-dom";

function Sidebar({ closeSidebar, isOpen }) {
  const { pathname } = useLocation();

  return (
    <Transition appear show={isOpen} as="aside">
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeSidebar}
      >
        <div className="min-h-screen flex">
          <Dialog.Overlay className="fixed bg-dark inset-0 opacity-40" />

          {/* content */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-dark">
              <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-72 h-screen">
                  <nav className="py-2 flex flex-col h-full">
                    {/* Brand */}
                    <div className="font-sans inline-flex items-center py-2 px-2.5">
                      {/*<FaStoreAlt className="text-danger" size="25" />*/}
                      <span className="text-2xl font-bold tracking-wide text-light-dark capitalize">
                        marketplace
                      </span>

                      <Button
                        className="!p-4 text-white ml-auto hover:bg-dark-light !shadow-none !rounded-full"
                        onClick={closeSidebar}
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                          />
                        </svg>
                      </Button>
                    </div>

                    {/* nav items */}
                    <ul className="flex flex-col space-y-3 mt-24 px-3">
                      <li>
                        <Link to="/">
                          <Button
                            className={`w-full !leading-7 opacity-75 text-white !font-normal !justify-start !capitalize !text-base !shadow-none ${
                              pathname === "/"
                                ? "opacity-100 bg-dark-light"
                                : "hover:opacity-100 hover:bg-dark-light"
                            }`}
                            onClick={closeSidebar}
                          >
                            home
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <NavLink to="/shops/all">
                          <Button
                            className={`w-full !leading-7 opacity-75 text-white !font-normal !justify-start !capitalize !text-base !shadow-none ${
                              pathname === "/shops/all"
                                ? "opacity-100 bg-dark-light"
                                : "hover:opacity-100 hover:bg-dark-light"
                            }`}
                            onClick={closeSidebar}
                          >
                            all shops
                          </Button>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Sidebar;
