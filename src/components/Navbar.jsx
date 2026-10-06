import { useEffect, useState } from 'react'
import logo from '../assets/Logo/Cafe-Logo-Background-PNG-Image.png'

const navLinks = ['Home', 'About', 'Menu', 'Contact']

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 12)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className="js-navbar fixed left-0 right-0 top-0 z-30">
      <nav
        className={[
          'relative flex w-full items-center justify-between px-4 py-3 text-white md:px-8',
          'transition-[background-color,backdrop-filter,box-shadow] duration-300',
          isScrolled
            ? 'bg-black/35 shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur-md'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Coffee logo"
            className="h-10 w-10 object-contain md:h-11 md:w-11"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6ff00]">Coffee</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 md:text-xs">
              Futuristic Brew
            </p>
          </div>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="futuristic-nav-link text-xs uppercase tracking-[0.22em] text-zinc-200 transition hover:text-[#d6ff00]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="rounded-lg border border-[#d6ff00]/45 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d6ff00] md:hidden"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className={[
            'p-4 md:hidden',
            isScrolled
              ? 'bg-black/35 shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur-md'
              : 'bg-black/30 backdrop-blur-sm',
          ].join(' ')}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-100 transition hover:text-[#d6ff00]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
