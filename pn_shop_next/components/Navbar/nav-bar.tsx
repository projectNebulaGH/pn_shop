'use client'

import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const NavList: React.FC<{ links: NavLink[] }> = ({ links }) => {
  return (
    <ul className="lg:flex lg:space-x-6 text-white lg:items-center lg:justify-center">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks: NavLink[] = [
    { label: "Research", href: "ResearchPage" },
    { label: "Paradigms", href: "ParadigmsPage" },
    { label: "Factory", href: "FactoryPage" },
    { label: "Products", href: "ProductsPage" },
    // Add more links here
  ];

  return (
    <div className="flex items-center border-b-2 border-primary justify-between bg-base-color/20 h-16 px-[5vw] lg:px-[5vw] z-20">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <a href="/">
          <div>
            <img src="logos/pn_logo.png" alt="Cat's Eye Logo" width={30} height={30} />
          </div>
        </a>
        <a href="HomePage">
          <p className="text-lg font-bold text-white cursor-pointer">project <span className="text-primary text-lg font-bold">nebula</span></p>
        </a>
      </div>

      {/* Center - Navbar Links - Visible on large screens */}
      <nav className="hidden lg:flex flex-grow justify-center">
        <NavList links={navLinks} />
      </nav>

      {/* Hamburger Menu & Mobile Menu - Dropdown */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {showMenu ? (
            <img src="logos/closemenu.svg" alt="Close Menu" width={30} height={30} />
          ) : (
            <img src="logos/hamburgermenu.svg" alt="Menu" width={30} height={30} />
          )}
        </button>
        {showMenu && (
          <div className="absolute top-0 right-0 h-full w-[80vw] bg-base-color/50 backdrop-blur-xl text-white z-20">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu}>
                <img src="logos/closemenu.svg" alt="Close Menu" width={24} height={24} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right side - Login button - Visible on large screens */}
      <div className="hidden lg:flex items-center">
        <a href="#">
          <button className="bg-transparent border-2 border-primary text-primary px-4 py-1 rounded-md font-medium cursor-pointer">...!</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
