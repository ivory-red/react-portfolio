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
            <img src={profileImg} alt="프로필 이미지" />
            <div className="about__text__area">
              {/* 개인 정보 */}
              <p className="name nanum">박상아</p>
              <p className="text sub__title__text nanum t__center__m">(웹퍼블리싱 경력 2년 + 프론트엔드 개발 경력 2년 4개월) 웹 퍼블리싱 경력이 있는 프론트엔드 개발자 입니다.</p>
              <p className="text nanum t__center__m">TEL: 010-3281-0676<br />EMAIL: sept1st@naver.com</p>
              {/* 업무 활용 스킬 */}
              <div className="skills">
                <p className="text nanum t__center__m">MAIN SKILLS:<br />(업무 활용 가능)</p>
                <ul>
                  <li>
                    <img src={vue} alt="Vue.js" />
                    <p className="text nanum">Vue.js</p>
                  </li>
                  <li>
                    <img src={html} alt="HTML" />
                    <p className="text nanum">HTML</p>
                  </li>
                  <li>
                    <img src={css} alt="CSS" />
                    <p className="text nanum">CSS</p>
                  </li>
                  <li>
                    <img src={sass} alt="SASS" />
                    <p className="text nanum">SASS</p>
                  </li>
                  <li>
                    <img src={javaScript} alt="JavaScript" />
                    <p className="text nanum">JavaScript</p>
                  </li>
                  <li>
                    <img src={gsap} alt="GSAP" />
                    <p className="text nanum">GSAP</p>
                  </li>
                </ul>
              </div>
              {/* 사용해 본 스킬 */}
              <div className="skills">
                <p className="text nanum t__center__m">OTHER SKILLS:<br />(사용해 봤어요)</p>
                <ul>
                  <li>
                    <img src={react} alt="React.js" />
                    <p className="text nanum">React.js</p>
                  </li>
                  <li>
                    <img src={react} alt="React Native" />
                    <p className="text nanum">React Native</p>
                  </li>
                  <li>
                    <img src={java} alt="JAVA" />
                    <p className="text nanum">JAVA</p>
                  </li>
                  <li>
                    <img src={oracle} alt="Oracle" />
                    <p className="text nanum">Oracle</p>
                  </li>
                  <li>
                    <img src={tomcat} alt="Tomcat" />
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