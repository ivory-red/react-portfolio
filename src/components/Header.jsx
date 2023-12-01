import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MediaQuery from "react-responsive";

// 이미지
import HamburgerMenu from "../assets/img/icons/ic_ham_menu.png"

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
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 15) {
        setScroll('');
      } else {
        setScroll('scrolled')
      }
    })
  })

  return (
    <>
      <header id="header" role="banner" className={`header ${scroll}`}>
        <div className="header__inner inner">
          <h1 className="logo">
            <a href="#blank" className="manrope">spark.</a>
          </h1>

          <MediaQuery minWidth={1024}>
            <div className="header__info t__center">
              <p>2yrs publisher</p>
              <p>2yrs&4months front-end</p>
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={1023}>
            <div className="mobile__nav__menu">
              <img src={HamburgerMenu} alt="" width="20" />
            </div>
          </MediaQuery>
        </div>

        <MediaQuery maxWidth={1023}>
          <div className="mobile__nav__list">
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
          </div>
        </MediaQuery>

        <MediaQuery minWidth={1024}>
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
        </MediaQuery>
      </header >
    </>
  )
};

export default Header;