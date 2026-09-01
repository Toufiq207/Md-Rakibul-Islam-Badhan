import React, { useState } from 'react'
import Container from '../Component/Container'
// import Image from '../Component/Image'
// import Logo from '../assets/logo/logo.png'

const Navebar = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Service', link: '#service' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Project', link: '#project' },
    { name: 'Contact', link: '#contact' },
  ]

  const handleMenuClick = (e, link) => {
    e.preventDefault()
    setOpen(false)

    const section = document.querySelector(link)

    if (section) {
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar?.offsetHeight || 90

      const targetPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        10

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className='fixed left-0 top-0 z-[9999] w-full border-b-2 border-black bg-gray-900'>

      <Container className='relative flex h-[90px] items-center justify-between'>

        {/* Logo */}
      
<h1 className='text-white font-bold text-2xl'>RIB</h1>
        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-6 xl:gap-10'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={(e) => handleMenuClick(e, item.link)}
                  className='text-lg text-white transition hover:text-gray-300 xl:text-2xl'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          type='button'
          onClick={() => setOpen(!open)}
          className='z-[10000] text-3xl text-white lg:hidden'
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className='absolute left-0 top-[90px] z-[9998] w-full border-b-2 border-black bg-gray-900 px-5 py-4 shadow-xl lg:hidden'>

            <ul className='flex flex-col'>

              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className='border-b border-gray-600'
                >
                  <a
                    href={item.link}
                    onClick={(e) => handleMenuClick(e, item.link)}
                    className='block py-3 text-lg font-medium text-white hover:bg-gray-800'
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>
        )}

      </Container>
    </nav>
  )
}

export default Navebar