import React from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { useRouter } from "next/router";

type Props = {
  path: String;
};

const Header = (props: Props) => {
  const activeClass = 'bg-red-600 text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  const nonActiveClass = 'text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  const activeClassMobile = 'bg-red-600 text-white text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
  const nonActiveClassMobile = 'text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'

  const user = {
    imageUrl:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-slate-800">
          {
            ({open}) => (
              <>
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <picture>
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                            alt="Workflow"
                          />
                        </picture>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          <Link href='/'>
                            <a className={props.path == "/" ? activeClass : nonActiveClass} aria-current='page' href='# '>Home</a>
                          </Link>
                          <Link href='/about'>
                            <a className={props.path == "/about" ? activeClass : nonActiveClass}>About</a>
                          </Link>
                          <Link href='/porfolio'>
                            <a className={props.path == "/porfolio" ? activeClass : nonActiveClass}>My Porfolio</a>
                          </Link>
                          <Link href='/projects'>
                            <a className={props.path== "/projects" ? activeClass : nonActiveClass}>My Project</a>
                          </Link>
                            
                          <a className = {nonActiveClass} href="/dashboard" >Dashboard</a>
                          <a className = {nonActiveClass} href="/dashboard-2" >Dashboard Version 2</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <Menu as="div" className="ml-3 relative">
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <picture>
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                              </picture>
                              <div className='text-white ml-2'>
                                TrietCN
                              </div>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                <a href='# ' className='block px-4 py-2 text-sm text-gray-700'>Your Profile</a>
                              </Menu.Item>
                              <Menu.Item>
                                <a href='# ' className='block px-4 py-2 text-sm text-gray-700'>Settings</a>
                              </Menu.Item>
                              <Menu.Item>
                                <a href='# ' className='block px-4 py-2 text-sm text-gray-700'>Sign out</a>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {
                          open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                          )
                        }
                      </Disclosure.Button>
                    </div>
                  </div>       
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/">
                      <Disclosure.Button as="a" className={props.path == "/" ? activeClassMobile : nonActiveClassMobile} aria-current="page" >
                        Home
                      </Disclosure.Button>
                    </Link>
                    <Link href="/about">
                      <Disclosure.Button as="a" className={props.path == "/about" ? activeClassMobile : nonActiveClassMobile} aria-current="page" >
                        About
                      </Disclosure.Button>
                    </Link>
                    <Link href="/porfolio">
                      <Disclosure.Button as="a" className={props.path == "/porfolio" ? activeClassMobile : nonActiveClassMobile} aria-current="page" >
                        My Porfolio
                      </Disclosure.Button>
                    </Link>
                    <Link href="/projects">
                      <Disclosure.Button as="a" className={props.path == "/projects" ? activeClassMobile : nonActiveClassMobile} aria-current="page" >
                        My Project
                      </Disclosure.Button>
                    </Link>
                    <Disclosure.Button as="a" href="/dashboard" className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" >
                      Dashboard
                    </Disclosure.Button>
      
                  </div>
                  <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <picture>
                          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                        </picture>
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          TrietCN
                        </div>
                        <div className="text-xs font-medium leading-none text-gray-400 m-1">
                          TrietCN@fsoft.com.vn
                        </div>
                        <button
                          type="button"
                          className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                      </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      <Disclosure.Button 
                        as="a" 
                        href="# "
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Your Profile
                      </Disclosure.Button>
                      <Disclosure.Button 
                        as="a" 
                        href="# "
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Settings
                      </Disclosure.Button>
                      <Disclosure.Button 
                        as="a" 
                        href="# "
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Sign out
                      </Disclosure.Button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )
          }
        </Disclosure>  
      </div>
    </>
  )
}

export default Header