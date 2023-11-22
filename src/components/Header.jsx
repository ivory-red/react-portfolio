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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setNavActive = (title) => {
    setActive(title)
  };

  const toggleMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

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
              {/* 화살표 함수로 래핑함으로써 해당 함수는 클릭 할 떄만 변할 수 있도록 설정 */}
              <a href="#none" className="manrope" onClick={() => setNavActive(nav.title)}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mode">
        <a href="#none" className="manrope" onClick={toggleMode}>{isDarkMode === false ? "dark" : "light"} mode.</a>
      </div>
    </header>
  )
};

export default Header;