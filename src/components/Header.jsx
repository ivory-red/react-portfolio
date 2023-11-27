import React from "react";
import { Link } from "react-scroll";

const headerNav = [
  {
    title: "home"
  },
  {
    title: "career"
  },
  {
    title: "edu"
  },
  {
    title: "about"
  }
]

const Header = () => {
  return (
    <>
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
      </header>
      <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
        <ul>
          {headerNav.map((nav, key) => (
            <li key={key}>
              {/* 화살표 함수로 래핑함으로써 해당 함수는 클릭 할 떄만 변할 수 있도록 설정 */}
              <Link className="manrope" activeClass="active" to={nav.title} spy={true} smooth={true}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
};

export default Header;