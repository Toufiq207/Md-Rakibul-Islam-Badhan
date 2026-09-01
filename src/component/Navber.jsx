
import React, { useState } from 'react'
import Container from '../Component/Container'

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
      const navbarHeight = navbar?.offsetHeight || 70

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
    <nav className="fixed left-0 top-0 z-[9999] w-full border-b-2 border-black bg-gray-900">

      {/* Navbar */}
      <Container className="mx-auto flex h-[65px] w-full max-w-full items-center justify-between px-4 sm:h-[75px] sm:px-6 lg:h-[90px]">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleMenuClick(e, '#home')}
          className="shrink-0"
        >
          <h1 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
            RIB
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={(e) => handleMenuClick(e, item.link)}
                  className="whitespace-nowrap text-lg font-medium text-white transition duration-300 hover:text-gray-300 xl:text-xl"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-3xl leading-none text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>

      </Container>

      {/* Mobile Menu */}
      <div
        className={`w-full overflow-hidden bg-gray-900 transition-all duration-300 lg:hidden ${
          open
            ? 'max-h-[600px] border-t border-gray-700 opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="w-full px-4 pb-4 pt-2 sm:px-6">

          {menuItems.map((item) => (
            <li
              key={item.name}
              className="border-b border-gray-700"
            >
              <a
                href={item.link}
                onClick={(e) => handleMenuClick(e, item.link)}
                className="block w-full py-3 text-base font-medium text-white transition duration-300 hover:bg-gray-800 hover:pl-2 sm:py-4 sm:text-lg"
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

export default Navebar

