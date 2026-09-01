import React, { useState } from 'react'
import Container from '../component/Container'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

const Navber = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Service', link: '#service' },
    { name: 'Skills', link: '#skills' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Experience', link: '#experience' },
    { name: 'Project', link: '#project' },
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <nav className='fixed inset-x-0 top-0 z-[9999] w-full bg-red-500'>
      
      {/* Navbar */}
      <Container className='flex h-[70px] w-full items-center justify-between px-4 sm:h-[80px]'>

        {/* Logo */}
        <a
          href='#home'
          className='shrink-0'
        >
          <h1 className='font-pop text-3xl font-bold text-white sm:text-4xl'>
            RIB
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className='hidden items-center gap-3 font-pop text-base text-white lg:flex xl:gap-6 xl:text-xl'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className='whitespace-nowrap transition hover:font-bold'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() => setOpen(!open)}
          className='flex h-10 w-10 shrink-0 items-center justify-center text-2xl text-white lg:hidden'
        >
          {open ? <RxCross2 /> : <FaBars />}
        </button>

      </Container>

      {/* Mobile Menu */}
      <div
        className={`w-full overflow-hidden bg-red-500 transition-all duration-300 lg:hidden ${
          open
            ? 'max-h-[600px] border-t border-white'
            : 'max-h-0'
        }`}
      >
        <ul className='flex flex-col px-4 pb-4 pt-2'>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className='border-b border-red-400 last:border-b-0'
            >
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className='block py-3 font-pop text-lg font-medium text-white'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navber