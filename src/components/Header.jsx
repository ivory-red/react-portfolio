import React, { useState } from "react";

const headerNav = [
  {
    title: "home",
    url: "#intro"
  },
  {
    title: "career",
    url: "#career"
  },
  {
    title: "edu",
    url: "#edu"
  },
  {
    title: "about",
    url: "#about"
  },
  {
    title: "contact",
    url: "#contact"
  }
]

const Header = () => {
  const [activeNav, setActive] = useState("home");

  return (
    <header id="header" role="banner">
      <div className="header__inner inner">
        <h1 className="logo">
          <a href="#blank" className="manrope">spark.</a>
        </h1>
        <div className="header__info t__center">
          <p>2yrs publisher</p>
          <p>2yrs&4months front-end</p>
        </div>
      </div>
      <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
        <ul>
          {headerNav.map((nav, key) => (
            <li key={key} className={activeNav === nav.title ? "active" : ""}>
              <a href={nav.url} className="manrope">{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default Header;