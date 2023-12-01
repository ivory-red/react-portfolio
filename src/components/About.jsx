import React from "react";

//이미지
import profileImg from "../assets/img/about/profile_img.svg"
import vue from "../assets/img/logos/logo_vue.svg"
import html from "../assets/img/logos/logo_html.svg"
import css from "../assets/img/logos/logo_css.svg"
import sass from "../assets/img/logos/logo_sass.svg"
import javaScript from "../assets/img/logos/logo_js.svg"
import gsap from "../assets/img/logos/logo_gsap.svg"
import react from "../assets/img/logos/logo_react.svg"
import java from "../assets/img/logos/logo_java.svg"
import oracle from "../assets/img/logos/logo_oracle.svg"
import tomcat from "../assets/img/logos/logo_tomcat.svg"

const About = () => {
  return (
    <div className="about section">
      <div id="about" className="space"></div>
      <div className="section__inner">
        <div className="section__area">
          <div className="title__area">
            <h4 className="title manrope">about me</h4>
          </div>

          <div className="about__area">
            <img src={profileImg} alt="" />
            <div className="about__text__area">
              <p className="name nanum">박상아</p>
              <p className="text nanum">(웹퍼블리싱 경력 2년 + 프론트엔드 개발 경력 2년 4개월) 웹 퍼블리싱 경력이 있는 프론트엔드 개발자 입니다.</p>
              <p className="text nanum">TEL: 010-3281-0676<br />EMAIL: sept1st@naver.com</p>
              <div className="skills">
                <p className="text nanum">MAIN SKILLS:<br />(업무 활용 가능)</p>
                <ul>
                  <li>
                    <img src={vue} alt="" />
                    <p className="text nanum">Vue.js</p>
                  </li>
                  <li>
                    <img src={html} alt="" />
                    <p className="text nanum">HTML</p>
                  </li>
                  <li>
                    <img src={css} alt="" />
                    <p className="text nanum">CSS</p>
                  </li>
                  <li>
                    <img src={sass} alt="" />
                    <p className="text nanum">SASS</p>
                  </li>
                  <li>
                    <img src={javaScript} alt="" />
                    <p className="text nanum">JavaScript</p>
                  </li>
                  <li>
                    <img src={gsap} alt="" />
                    <p className="text nanum">GSAP</p>
                  </li>
                </ul>
              </div>
              <div className="skills">
                <p className="text nanum">OTHER SKILLS:<br />(사용해봤어요)</p>
                <ul>
                  <li>
                    <img src={react} alt="" />
                    <p className="text nanum">React.js</p>
                  </li>
                  <li>
                    <img src={react} alt="" />
                    <p className="text nanum">React Native</p>
                  </li>
                  <li>
                    <img src={java} alt="" />
                    <p className="text nanum">JAVA</p>
                  </li>
                  <li>
                    <img src={oracle} alt="" />
                    <p className="text nanum">Oracle</p>
                  </li>
                  <li>
                    <img src={tomcat} alt="" />
                    <p className="text nanum">Tomcat</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;