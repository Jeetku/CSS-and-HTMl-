import React, { useState } from "react";
import "./NavBar/NavBar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MENU = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "PortFolio",
      link: "#",
    },
    {
      id: 3,
      title: "About",
      link: "#",
    },
    {
      id: 4,
      title: "Contact",
      link: "#",
    },
  ];

  const handleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Jeetesh Singh</div>
      <ul className="desktopMenu">
        {MENU.map((menu) => {
          return (
            <li key={menu.id}>
              <a href={menu.link}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
      {isMobileMenuOpen ? (
        <RxCross1
          className="mobile-menu-button"
          size={30}
          onClick={handleClick}
        />
      ) : (
        <RxHamburgerMenu
          className="mobile-menu-button"
          size={30}
          onClick={handleClick}
        />
      )}
      {isMobileMenuOpen ? (
        <ul className="mobileMenu">
          {MENU.map((menu) => {
            return (
              <li key={menu.id}>
                <a href={menu.link}>{menu.title}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
