import React, {useMemo} from "react";
import "./app.scss";
import MyImage from "../images/myself.jpg" 
import FacebookIcon from "../images/facebook.svg"
import Skill from "./skill_info";

const SkillInfo = [
  {name : "C++", point : 5},
  {name : "ReactJs", point : 6},
  {name : "VueJs", point : 4},
  {name : "PHP", point : 5},
  {name : "MySql/PostgreSql", point : 4},
  {name : "NodeJs", point : 4},
  {name : "Ruby On Rails", point : 3},
];

const LanguagesInfo = [
  {name : "Japanese", point : 2},
  {name : 'English', point : 5}
];

const DevOpsManagement = [
  {name : "Docker", point: 5},
  {name : "Linux Command", point: 5},
  {name : "Team Lead", point: 4},
  {name : "CI/CD", point: 3},
];


const Seperate = ({title, direction= 'left'}) => {
  return <div className={`seperate border-bottom ${direction}`}>{title}</div>
}

const LevelTitle = ({first = '', second = ''}) => {
  return <div className="title_level">
      <div className="empty"></div>
      <div className="title">
        <div className="beginner">{first}</div>
        <div className="expert">{second}</div>
      </div>
    </div>
}

const  App = () => {
  return (
    <div className="App" id="app_div">
      <div id="brief_personal_info">
        {/* Hình ảnh */}
        {/* Tên  */}
        {/* Tuổi  */}
        {/* Thông tin học vấn */}
        {/* Một vài câu thể hiện quan điểm */}
        {/* Liệt kê một vài thông về kinh nghiệm */}
        {/* Thông tin về trình độ ngôn ngữ */}
        <h2 className="my_name">
          Lê Công Doãn(<small>Ronalsi</small>)
        </h2>
        {/* <div className="seperate border-bottom left">Basic Information</div> */}
        <Seperate title="Basic Information"/>
        <div className="basic_information">
          <div className="info_div">
            <ul className="info_list">
              <li className="date_of_birth">Date Of Birth : <b>18/11/1994</b></li>
              <li className="id_card_num">ID Card Number  : <b>017293468</b></li>
              <li className="education">Education : BA in Computer Science And Engineering , Ho Chi Minh City University of Technology (BKU)</li>
              <li className="gpa">GPA : <b>7.5</b></li>
            </ul>
          </div>
          <div className="image_represent">
            <img src={MyImage} className="image_profile"/>
          </div>
          <div className="clear-float"></div>
        </div> 
        {/* Brief Introduction */}
        <Seperate title="Brief Introduction"/>
        <div className="brief_introduction">
          <p style={{marginTop:"0"}}>
            I was a student of the Ho Chi Minh City University of Technology from 2012 to the last of 2016.
            Now I am working as a <b>full-stack developer</b> and a <b>team leader</b>. My major is Computer Science and Engineering.
            Have a good knowledge of data structures and algorithms. And I also have more than 4 years' experiences in Web development using  ReactJs, PHP, MySQL, Node.js, MongoDB, and Laravel Framework, HTML, CSS, Javascript, Ruby on Rails.
          </p>
          <p style={{marginTop:"0" , marginBottom:"5px"}}>
            I am honest, easy-going, hard-working, love learning new technologies, and always keep calm to head the challenges
          </p>
        </div>
        <Seperate title="Contacts"/>
        <div className="contact_info">
          <div className="contact_item">
            <div className="icon">📞</div> 
            <div>098-250-3643</div>
          </div>
          <div className="contact_item">
            <div className="icon">📧</div> 
            <div>doanlecong1811@gmail.com</div>
          </div>
          <div className="contact_item">
            <div className="icon">🗺</div> 
            <div>Tan Xuan Commune, Hoc Mon District, HCM City</div>
          </div>
        </div>
        <Seperate title="Programming Languages"/>
        <div className="skill_info">
          <LevelTitle first="Beginner" second="Expert"/>
          {SkillInfo.sort((a, b) =>  b.point - a.point).map(({name , point}, index)=> {
              return <Skill key={index} name={name} point={point}/>
          })}
        </div>
        <Seperate title="DevOps and management"/>
        <div className="devops_management_skills">
          <LevelTitle first="Beginner" second="Expert"/>
          {DevOpsManagement.sort((a, b) =>  b.point - a.point).map(({name , point}, index)=> {
              return <Skill key={index} name={name} point={point}/>
          })}
        </div>
        <Seperate title="Languages"/>
        <div className="languages_info">
          <LevelTitle first="Beginner" second="Native"/>
          {LanguagesInfo.sort((a, b) =>  b.point - a.point).map(({name , point}, index)=> {
              return <Skill key={index} name={name} point={point}/>
          })}
        </div>
      </div>
      <div id="column_seperate"></div>
      <div id="history_project">
        {/* Timelime project và các thành tưu */}
        <Seperate title="Working Experience" direction="right"/>

        <Seperate title="Education Certificates AND Awards" direction="right"/>

        <Seperate title="Working Targets And Desire" direction="right"/>
        <div className="working-target-desire">
          <div className="quote">
            I want to become a professional DEVELOPER
          </div>
          <div className="description">
            <p>
              When I was a student, I had loved learning programming. The first programming language I have studied was Pascal since I was a 15 years old boy. And Java is the third one. 
              Since took part in studying in university, I think Java is very beautiful but also a difficult language to learn. But I feel that Java is what I am always excited to work with. 
              By now, I am focus on Web Development and programming languages are just the tools for us to describe and implement what we want. 
            </p>
          </div>
        </div>
        <Seperate title="Follow Me" direction="right"/>
        <div className="follow-me-div">
          <div className="follow-item">
            <div className="icon">
              <img alt="facebook-icom" src={FacebookIcon} style={{maxWidth:"30px"}}/>
            </div>
            <div className="link">
              <a href="https://www.facebook.com/doan.le.cong.33" target="_blank">
                https://www.facebook.com/doan.le.cong.33
              </a>
            </div>
          </div>
          <div className="follow-item">
            <div className="icon">🌏</div>
            <div className="link">
              <a href="https://www.doanlee.com" target="_blank">https://www.doanlee.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="clear-float"></div>
    </div>
  );
}

export default App;
