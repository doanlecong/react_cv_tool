import React from "react";
import "./app.scss";
import MyImage from "../images/doanle.jpg";
import FacebookIcon from "../images/facebook.svg";
import Skill from "./skill_info";

const SkillInfo = [
  { name: "Python", point: 4, order: 3 },
  { name: "ReactJs", point: 6, order: 10 },
  { name: "VueJs", point: 4, order: 4 },
  { name: "PHP", point: 5, order: 8 },
  { name: "SQL/NoSQL", point: 5, order: 5 }, // MySql/PostgreSql
  { name: "NodeJs", point: 5, order: 9 },
  { name: "Ruby On Rails", point: 3, order: 3 },
];

const LanguagesInfo = [
  { name: "Japanese", point: 2 },
  { name: "English", point: 5 },
];

const DevOpsManagement = [
  { name: "Docker", point: 5 },
  { name: "Linux Command", point: 5 },
  { name: "Team Lead", point: 4 },
  { name: "CI/CD", point: 3 },
];

const Seperate = ({ title, direction = "left" }) => {
  return <div className={`seperate border-bottom ${direction}`}>{title}</div>;
};

const LevelTitle = ({ first = "", second = "" }) => {
  return (
    <div className="title_level">
      <div className="empty"></div>
      <div className="title">
        <div className="beginner">{first}</div>
        <div className="expert">{second}</div>
      </div>
    </div>
  );
};

const App = () => {
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
          Lê Công Doãn  { /*(<small>Ronalsi</small>)*/ }
        </h2>
        {/* <div className="seperate border-bottom left">Basic Information</div> */}
        <Seperate title="Basic Information" />
        <div className="basic_information">
          <div className="info_div">
            <ul className="info_list">
              <li className="date_of_birth">
                Date Of Birth : <b>18/11/1994</b>
              </li>
              <li className="id_card_num">
                ID Card Number : <b>017293468</b>
              </li>
              <li className="education">
                Education : BA in Computer Science And Engineering , Ho Chi Minh
                City University of Technology (BKU)
              </li>
              <li className="gpa">
                GPA : <b>7.5</b>
              </li>
            </ul>
          </div>
          <div className="image_represent">
            <img src={MyImage} alt="" className="image_profile" />
          </div>
          <div className="clear-float"></div>
        </div>
        {/* Brief Introduction */}
        <Seperate title="Brief Introduction" />
        <div className="brief_introduction">
          <p style={{ marginTop: "0" }}>
            I was a student of the Ho Chi Minh City University of Technology
            from 2012 to the last of 2016. Now I am working as a{" "}
            <b>full-stack developer</b> and a <b>team leader</b>. My major is
            Computer Science and Engineering. Have a good knowledge of data
            structures and algorithms. And I also have more than 4 years of
            experience in Web development using ReactJs,Node.js, PHP, Python,Ruby on
            Rails
          </p>
          <p style={{ marginTop: "0", marginBottom: "5px" }}>
            I am honest, easy-going, hard-working, love learning new
            technologies, and always keep calm to head the challenges
          </p>
          <p style={{ marginTop: "0", marginBottom: "5px" }}>
            <b>Hobbies:</b> Playing Guitar, Football; Drawing, ...
          </p>
        </div>
        <Seperate title="Contacts" />
        <div className="contact_info">
          <div className="contact_item">
            <div className="icon">📞</div>
            <div>
              <b>098 250 3643</b>
            </div>
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
        <Seperate title="Programming Languages" />
        <div className="skill_info">
          <LevelTitle first="Beginner" second="Expert" />
          {SkillInfo.sort((a, b) => b.order - a.order).map(
            ({ name, point }, index) => {
              return <Skill key={index} name={name} point={point} />;
            }
          )}
        </div>
        <Seperate title="DevOps and management" />
        <div className="devops_management_skills">
          <LevelTitle first="Beginner" second="Expert" />
          {DevOpsManagement.sort((a, b) => b.point - a.point).map(
            ({ name, point }, index) => {
              return <Skill key={index} name={name} point={point} />;
            }
          )}
        </div>
        <Seperate title="Languages" />
        <div className="languages_info">
          <LevelTitle first="Beginner" second="Native" />
          {LanguagesInfo.sort((a, b) => b.point - a.point).map(
            ({ name, point }, index) => {
              return <Skill key={index} name={name} point={point} />;
            }
          )}
        </div>
      </div>
      <div id="column_seperate"></div>
      <div id="history_project">
        {/* Timelime project và các thành tưu */}
        <Seperate title="Working Experience" direction="right" />
        <div className="working_experience">
          <div className="time_line_item">
            <div className="working_time">08/2018 - 09/2021</div>
            <div className="company_name">
              FULL STACK DEVELOPER AT VNJ SOLUTIONS AND AT DAITO VN CO.LTD
            </div>
            <div className="description">
              I started working at VNJ Solutions on 08/2018. My job here is as a
              full stack developer, used to be a member of a project under DAITO
              Japan. <br />
              <br />
              Starting in 2021, I was transferred to DAITO VN Co.Ltd, working as
              a team leader and supporting the new members of the company. I am
              responsible for developing four projects at the same time. Our
              projects are related to Japan e-commerce based on a cloud computing
              platform with big data
            </div>
          </div>
          <div className="time_line_item">
            <div className="working_time">10/2017 – 06/2018</div>
            <div className="company_name">
              DEVELOPER AT HDWEBSOFT CO.LTD
            </div>
            <div className="description">
              In this company, I worked as a back-end developer focus on design
              and development of the project with 5 members team and I am the
              key developer of that’s team.
            </div>
          </div>
          <div className="time_line_item">
            <div className="working_time">11/2016 – 08/2017</div>
            <div className="company_name">
              RUBY ON RAILS DEVELOPER AT RUBIFY.LTD VIET NAM
            </div>
            <div className="description"></div>
          </div>
          <div className="time_line_item">
            <div className="working_time">2015 - 2016</div>
            <div className="company_name">FREELANCE IN WEB DEVELOPMENT</div>
            <div className="description">
              Projects:
              <ul>
                <li>
                  System of Library Management in HoChiMinh City University of
                  Technology 2015
                </li>
                <li>
                  System of Storage and Employee Management belong to VNPT
                </li>
              </ul>
              Link : http://vnpttphcm.net.vn/
            </div>
          </div>
          <div className="time_line_item">
            <div className="working_time">2012 - 2015</div>
            <div className="company_name">LEARN AND STUDY</div>
            <div className="description">
              Programming Languages : C++, JAVA, PYTHON,NODEJS, PHP, HTML, CSS,
              JAVASCRIPT, REACTJS and Algorithms
            </div>
          </div>
        </div>
        <Seperate title="Education Certificates AND Awards" direction="right" />
        <div className="education_and_award">
          <div className="item">
            <div className="title">BA IN COMPUTER SCIENCE AND ENGINREERING</div>
            <div className="description">
              Studied At Ho Chi Minh City University Of Technology From 2012 -
              2017
            </div>
          </div>
          <div className="item">
            <div className="title">
              ENGLISH CERTIFICATE: TOEIC 600 (FROM 2017)
            </div>
            <div className="description">
              This is the first english certifcate I have got. Recently, I'm
              learning English very hard. So I'm confident to communicate in
              English.
            </div>
          </div>
          <div className="item">
            <div className="title">
              MACHINE LEARNING CERTIFICATE ( ON COURSERA) 2020
            </div>
            <div className="description">
              {/* This is a basic certifcate in machine learning (Artifical Intelligence). It provides to me the fundamental
              knowledge about machine learning and how to apply it on a particular problems. <br/> */}
              <a
                href="https://www.coursera.org/learn/machine-learning"
                target="_blank"
                rel="noreferrer"
              >
                https://www.coursera.org/learn/machine-learning
              </a>
            </div>
          </div>
          <div className="item">
            <div className="title">
              DEEP LEARNING CERTIFICATE(ON COURSERA) 2020 : IN PROGRESS
            </div>
            <div className="description">
              {/* I love Machine Learning. So I want to master the fundamentals of deep learning and break into AI.
              Currenly, I have completed over 1/6 on total progress of this course. <br/> */}
              <a
                href="https://www.coursera.org/specializations/deep-learning"
                target="_blank"
                rel="noreferrer"
              >
                https://www.coursera.org/specializations/deep-learning
              </a>
            </div>
          </div>
        </div>
        <Seperate title="Working Targets And Desire" direction="right" />
        <div className="working-target-desire">
          <div className="quote">I want to become a professional DEVELOPER</div>
          <div className="description">
            <p>
              1.Become a skillful team leader in the next 1 or 2 years <br />
              2.I want to develop myself in the direction of technical expertise
            </p>
          </div>
        </div>
        <Seperate title="Reference" direction="right" />
        <div className="reference_persons">
          <ul>
            <li>
              Mr. Phan Thế Cảnh - CEO of VNJ SOLUTIONS. Phone :{" "}
              <b>093 885 9848</b>
            </li>
            <li>
              Mr. Vũ Văn Chỉnh - Tech Lead of VNJ SOLUTIONS. Phone :{" "}
              <b>093 539 8101</b>
            </li>
            <li>
              Mr. Nguyễn Văn Trọng - Manager of DAITO VN CO.LTD. Phone :{" "}
              <b>098 975 8864</b>
            </li>
          </ul>
        </div>
        <Seperate title="Follow Me" direction="right" />
        <div className="follow-me-div">
          <div className="follow-item">
            <div className="icon">
              <img
                alt="facebook-icom"
                src={FacebookIcon}
                style={{ maxWidth: "30px" }}
              />
            </div>
            <div className="link">
              <a
                href="https://www.facebook.com/doan.le.cong.33"
                target="_blank"
                rel="noreferrer"
              >
                https://www.facebook.com/doan.le.cong.33
              </a>
            </div>
          </div>
          <div className="follow-item">
            <div className="icon">🌏</div>
            <div className="link">
              <a
                href="https://www.doanlee.com"
                target="_blank"
                rel="noreferrer"
              >
                https://www.doanlee.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="clear-float"></div>
    </div>
  );
};

export default App;
