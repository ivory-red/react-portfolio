import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

// 이미지
import HamburgerMenu from "../assets/img/icons/ic_ham_menu.png"
import Close from "../assets/img/icons/ic_close.png"

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
  const [scroll, setScroll] = useState("");
  const [sectionActive, setSectionActive] = useState("home")
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // 스크롤 중일때 위치/active 파악
  const handleScroll = () => {
    if (window.scrollY < 15) {
      setScroll('');
    } else {
      setScroll('scrolled')
    }

    headerNav.forEach((nav) => {
      const element = document.getElementById(nav.title)
      const rect = element.getBoundingClientRect()
      const windowHeightHalf = (window.innerHeight / 2) - 100

      if (rect.top <= windowHeightHalf && rect.bottom > windowHeightHalf) {
        setSectionActive(nav.title)

        return
      }
    })
  }

  // useEffect: behaves similar to componentDidMount (fire after render)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    headerNav.forEach((nav) => {
      const el = document.getElementById(nav.title)

      nav.height = el.clientHeight
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // 네비게이션 스크롤
  const scrollTo = (to) => {
    const element = document.getElementById(to)

    element.scrollIntoView({ behavior: "smooth" })

    setMobileNavActive(false)
  };

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
            <div className="mobile__nav__menu" onClick={() => setMobileNavActive(!mobileNavActive)}>
              {mobileNavActive === false ? (
                <img src={HamburgerMenu} alt="" width="20" />
              ) : (
                <img src={Close} alt="닫기" width="12" />
              )}
            </div>
          </MediaQuery>
        </div>

        <MediaQuery maxWidth={1023}>
          <div className={`mobile__nav__list ${mobileNavActive === true ? "active" : ""}`}>
            <ul>
              {headerNav.map((nav, key) => (
                <li key={key}>
                  <a href="#none" className={sectionActive === nav.title ? "active" : ""} onClick={() => scrollTo(nav.title)}>{nav.title}</a>
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
                  <a href="#none" className={sectionActive === nav.title ? "active" : ""} onClick={() => scrollTo(nav.title)}>{nav.title}</a>
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