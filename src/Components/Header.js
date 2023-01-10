import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Employees', href: '/Employees'},
  { name: 'Customers', href: '/Customers'},
  { name: 'Dictionary', href: '/dictionary'},
  { name: 'Calendar', href: '/calendar'},
  { name: 'Test', href: '/test'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href='/'>
                      <img
                        className="block h-10 w-auto lg:hidden"
                        src="https://i.pinimg.com/originals/f2/87/12/f287122744d914997e7e2b690b1f6706.png"
                        alt="Your Company"

                      />
                      <img
                        className="hidden h-10 w-auto lg:block"
                        src="https://i.pinimg.com/originals/f2/87/12/f287122744d914997e7e2b690b1f6706.png"
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return ('px-3 py-2 rounded-md text-sm font-medium no-underline' + (!isActive ? 'text-gray-300 hover:bg-gray-700 text-white no-underline' : 'bg-gray-700 text-white no-underline'));
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <>
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return ('block px-3 py-2 rounded-md text-base font-medium no-underline' + (!isActive ? 'text-gray-300 hover:bg-gray-700 text-white no-underline' : 'bg-gray-700 text-white no-underline'));
                    }}
                  >
                    {item.name}
                  </NavLink>
                    </>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> 
      <div className='bg-gray-300'>
        <div className='max-w-7xl mx-auto min-h-screen p-2'>{props.children}</div>
      </div>
    </>
  )
}
