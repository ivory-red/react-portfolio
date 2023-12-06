import React from "react";
import MediaQuery from "react-responsive";

// 이미지
import graduation from "../assets/img/icons/ic_graduation.svg"
import school from "../assets/img/icons/ic_school.svg"
import uxui from "../assets/img/icons/ic_uxui.svg"
import coding from "../assets/img/icons/ic_coding.svg"

const Education = () => {
  return (
    <div className="education section">
      <div id="edu" className="space"></div>
      <div className="section__inner">
        <div className="section__area">
          <div className="title__area">
            <h4 className="title manrope">education</h4>
          </div>
          <ul className="edu__list">
            {/* 중고등학교 */}
            <li>
              <div className="list__area">
                <img src={school} alt="학교 아이콘" />
                <div className="text__area">
                  <p className="text__title manrope">Burnaby North Secondary</p>
                  <p className="text nanum">중고등학교 졸업</p>
                </div>
              </div>
            </li>
            {/* 대학교 */}
            <li>
              <div className="list__area">
                <img src={graduation} alt="졸업 모자 아이콘" />
                <div className="text__area">
                  <p className="text__title manrope">University of the Nations</p>
                  <p className="text nanum">유아교육 (2년제) 졸업</p>
                </div>
              </div>
            </li>
            {/* 디자인 및 퍼블리싱 교육 */}
            <li>
              <div className="list__area">
                <img src={uxui} alt="UX/UI 아이콘" />
                <div className="text__area">
                  <p className="text__title manrope">UX/UI 컨텐츠 디자인 및 퍼블리싱 <MediaQuery minWidth={768}><br /></MediaQuery>교육 과정</p>
                  <p className="text nanum">Photoshop, Illustrator를 활용한 UX/UI 디자인 교육 및 <MediaQuery minWidth={1200}><br /></MediaQuery>HTML, CSS, JavaScript를 활용한 퍼블리싱 교육 과정</p>
                </div>
              </div>
            </li>
            {/* 자바 교육 */}
            <li>
              <div className="list__area">
                <img src={coding} alt="코딩 아이콘" />
                <div className="text__area">
                  <p className="text__title manrope">JAVA 기반 웹 어플리케이션 개발 <MediaQuery minWidth={768}><br /></MediaQuery>교육 과정</p>
                  <p className="text nanum">JAVA를 기반으로 한 웹 개발 양성 과정을 통해 웹 어플리케이션 <MediaQuery minWidth={1200}><br /></MediaQuery>제작 능력을 습득 (JAVA, JSP Servlet, Spring, SQL, DB, Eclipse, Tomcat, Oracle)</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education;