
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg text-white hover:text-[#00abf0] transition-colors duration-300 px-3 py-2"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-[#0b2232] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#beranda" className="text-2xl font-bold text-white">
            PORTOFOLIO.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#beranda">Beranda</NavLink>
            <NavLink href="#tentang-saya">Tentang Saya</NavLink>
            <NavLink href="#pendidikan">Pendidikan</NavLink>
            <NavLink href="#projek">Projek</NavLink>
            <NavLink href="#hubungi-saya">Hubungi Saya</NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
            <NavLink href="#beranda" onClick={closeMenu}>Beranda</NavLink>
            <NavLink href="#tentang-saya" onClick={closeMenu}>Tentang Saya</NavLink>
            <NavLink href="#pendidikan" onClick={closeMenu}>Pendidikan</NavLink>
            <NavLink href="#projek" onClick={closeMenu}>Projek</NavLink>
            <NavLink href="#hubungi-saya" onClick={closeMenu}>Hubungi Saya</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
