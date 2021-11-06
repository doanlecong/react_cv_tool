import React from "react";
import { Seperate } from "./HelperComponent";
import "./LayoutNew.scss";

//  List out
//  Chuc vu / tên công ty / địa điểm / Thời gian
//  Tên project
//  Mô tả về những gì đã làm , công nghệ áp dụng
//  Đưa thông tin về con người , chỉ số hiện quả
const ProfessionalExperience = () => {
  return (
    <>
      <div className="period">
        <div className="title">
          <div className="position">FULL STACK DEVELOPER - TEAM LEADER</div>
          <div className="com_name">DAITO VN - VNJ SOLUTIONS</div>
          <div className="time">8/2018 - 10/2021</div>
        </div>
        <div className="descript">
          <ul className="parent">
            <li>
              <b>MACARON</b> - Product information management system(using
              <b> Laravel</b> for bussiness management,
              <b>NodeJs-SocketIO-Express</b> for streaming, realtime
              notifications, <b>Mysql</b> to store data, <b>Redis</b> for
              caching.
              <ul className="child">
                <li>
                  Improved system performance <b>5x</b> times. Solve the problem
                  of product code generation bottlenecks by implementing
                  divide-and-conquer optimization algorithms combined with
                  multi-process programming and running in the background.
                </li>
                <li>
                  Decreased the bugs and system's overload, increased the
                  system's fault resistance. Integrated with other system using
                  API (<b>JWT-GuzzleHttp-FTP-gRPC and microserices</b>) and
                  hosted on AWS EC2
                </li>
                <li>
                  Designed, developed, built a html generating tools using{" "}
                  <b>REACTJS</b> with drap-n-drop functionality for selling
                  campaign
                </li>
              </ul>
            </li>
            <li>
              <b>NK2</b> - Warehouse management system and distribution of
              goods. Applied directly to the operation of DAITO Japan and a
              number of customers in Japan . Using a distributed database
              system. <b>Microservice architecture</b> combined with a control
              center written in <b>PHP (Laravel)</b>, Bug management using{" "}
              <b>LaravelBug</b>
              <ul className="child">
                <li>
                  Developed an algorithm to solve the problem of entering the
                  wrong quantity of goods, and notify the user of the error
                  directly. Improved user performance with <b>UI/UX</b>{" "}
                  optimization. Solved the problem of using the barcode scanner
                  with an error because it is too fast to enter. Successfully
                  converted to single page application model.
                </li>
                <li>
                  Successfully system setup for many other partners on AWS
                  environment using{" "}
                  <b>
                    EC2, Docker ,Kubenete with services: RabbitMQ, Mysql,
                    PostgreSql, NodeJs.
                  </b>{" "}
                  Manage the downtime of the system
                </li>
              </ul>
            </li>
            <li>
              <b>PRICE SCRAPING</b> - The system specializes in scraping data
              about product information and related products in MACARON's system
              on e-commerce websites. : AMAZON, RAKUKEN, YAHOO,..to optimize
              price and delivery time, improve selling quanlity.
              <ul className="child">
                <li>
                  Solved the situation of low data scraping performance with
                  RAKUTEN, AMAZON, YAHOO sites when those sites increasingly
                  tighten control of data scraping software. Improved
                  performance by <b>3 times</b> and the amount of data retrieved
                  by <b>10x</b>. Success rate when scraping data increased from{" "}
                  <b>10% to more than 50%</b>
                </li>
                <li>
                  Controlled system operation easily by developing into a
                  statistical tool using <b>Python-Panda</b> about the amount of
                  data, the number of processes, the success rate, the time it
                  works effectively, and the optimal proxy management
                  mechanism.Using proxy server, multi-threaded programming to
                  optimize data scraping speed.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="period">
        <div className="title">
          <div className="position">PHP DEVELOPER - KEY MEMBER</div>
          <div className="com_name">HDWEBSOFT CO.LTD</div>
          <div className="time">10/2017 – 6/2018</div>
        </div>
        <div className="descript">
          <ul className="parent">
            <li>
              <b>IRESIDENT</b> - <b>Key member</b> of this project. The project
              of a management system for people in a condo system, allowing to
              manage arrivals and departures, notifying the householder,
              allowing the householder to schedule visitors to the house with
              identification information: image , personal information. The
              system is a cross platform including mobile app, web app, and
              backend system using
              <b> PHP(Yii 2), Twilio,Mobile Network,Pusher, Ionic, Java </b>and
              some other tools.
              <ul className="child">
                <li>
                  Solved the problem of controlling access by combining Qrcode
                  and message notification to users.
                </li>
                <li>
                  Speeded up the system by controlling fake notification
                  behaviors through face-to-fingerprint authentication.
                </li>
                <li>
                  Completed the project <b>2 months</b> ahead of time. Saved
                  resources when completing when no need to OT. Reduced bugs
                  arising by real-time notification mechanism for managers using
                  google, mail, messages
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="period">
        <div className="title">
          <div className="position">RUBY ON RAILS DEVELOPER-FRESHER</div>
          <div className="com_name">RUBIFY.LTD VIET NAM</div>
          <div className="time">11/2016 – 08/2017</div>
        </div>
        <div className="descript">
          <ul className="parent">
            <li>
              <b>WORK READY</b> - The system specializes in managing user
              information and distributing work between branches, from superior
              to subordinate, and scheduling jobs. Written in{" "}
              <b>Ruby on Rails</b> for backend, front end written in{" "}
              <b>ReactJs,NodeJs </b>, communicating through API.
              <ul>
                <li>
                  Complete the assigned task in time. Highly rated by management
                  and team leader.
                </li>
                <li>
                  Officially taking over the job after just one month of
                  probation
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="period break_page">
        <div className="title">
          <div className="position">FREELANCE IN WEB DEVELOPMENT</div>
          <div className="com_name"></div>
          <div className="time">2015 - 2016</div>
        </div>
        <div className="descript">
          Project :
          <ul className="parent">
            <li>
              System of Library Management in HoChiMinh City University of
              Technology 2015
            </li>
            <li>System of Storage and Employee Management belongs to VNPT</li>
          </ul>
        </div>
      </div>
      <div className="period">
        <div className="title">
          <div className="position">LEARN AND STUDY</div>
          <div className="com_name"></div>
          <div className="time">2012 - 2015</div>
        </div>
        <div className="descript">
          <ul className="parent">
            <li>
              Programming Languages : C++, JAVA, PYTHON,NODEJS, PHP, HTML, CSS,
              JAVASCRIPT, REACTJS and Algorithms
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PersonalProject = () => {
  return (
    <>
      <div className="project">
        <div className="name">Tab Animal - Chrome extension</div>
        <div className="techstack">
          <b>
            TechStack : ReactJs, Javascript, Html, Css, Create React App, Git,
            Webpack
          </b>
        </div>
        <div className="descript">
          The function of this extension is to change the default new tab screen
          with beautiful effects, providing weather information, instant
          temperature at the user's location. There is also a function to change
          the background image based on the weather and hourly
          <br />
          <b>This is a private project between my friend and me !</b>
        </div>
      </div>

      <div className="project">
        <div className="name">Snow Fall Character - Chrome extension</div>
        <div className="techstack">
          <b>
            TechStack : ReactJs, Javascript, Html, Css, Create React App, Git,
            Webpack
          </b>
        </div>
        <div className="descript">
          Has the function to display selected image characters, run simulation
          effects like falling snow, allows to change the level and speed of the
          effect. In addition, there is a function similar to the widgets that
          change the background color of websites, solid color or rainbow color
          depending on preference.
          <br />
          <b>Link</b> :{" "}
          <a href="https://github.com/doanlecong/char_fall_extension">
            github.com/doanlecong/char_fall_extension
          </a>
        </div>
      </div>

      <div className="project">
        <div className="name">React Video Chat App</div>
        <div className="techstack">
          <b>TechStack : ReactJs, Javascript, Html, Css, WebRTC, Nodejs </b>
          SocketIO, Create React App, Git, Webpack
        </div>
        <div className="descript">
          A simple app that has the function of video calling, calling, sending
          direct messages between people using WebRTC technology, using Nodejs
          server as an intermediary to transmit connection control signals using
          SocketIO
          <br />
          <b>Link</b> :{" "}
          <a href="https://github.com/doanlecong/react-video-chat-webrtc-node">
            github.com/doanlecong/react-video-chat-webrtc-node
          </a>
        </div>
      </div>

      <div className="project">
        <div className="name">My Website - https://www.doanlee.com</div>
        <div className="techstack">
          <b>TechStack : Bootstrap, Laravel, Mysql.</b>
        </div>
        <div className="descript">
          This is my website, it's like a personal blog for me to share my
          knowledge of programming languages, techniques, tools, as well as a
          place to promote myself. In this project I want to do everything from
          scratch as much as possible. Everything from design, color, management
          page is written without using any support library other than bootstrap
          3 and laravel. <br />
          Completed in July 2017
          <br />
          <b>Link</b> :{" "}
          <a href="https://www.doanlee.com">https://www.doanlee.com</a>
        </div>
      </div>
    </>
  );
};

const LayoutNew = () => {
  return (
    <div id="app_new">
      <div className="profile">
        {/* Name */}
        {/* Email */}
        {/* Phone */}
        {/* Github */}
        {/* Website / FaceBook */}
        <div className="name">
          <span>
            <b>Doan</b>,Le Cong
          </span>
        </div>
        <div className="brief_info">
          <div className="mail_phone">
            Mail: <b>doanlecong1811@gmail.com</b> | Phone :{" "}
            <b>(+84) 098 250 3643</b>
          </div>
          <div className="github_facebook">
            <a href="https://github.com/doanlecong">github.com/doanlecong</a> |{" "}
            <a href="https://www.facebook.com/doan.le.cong.33">
              facebook.com/doan.le.cong.33
            </a>
          </div>
          <div className="website">
            <a href="https://www.doanlee.com">https://www.doanlee.com</a>
          </div>
        </div>
      </div>
      <Seperate title="Education" />
      <div className="education">
        {/* Trường  ------- Thơi gian*/}
        <div className="school_time">
          <div className="school">
            Ho Chi Minh City University of Technology (HCMUT)
          </div>
          <div className="time">Sept 2012 - June 2016</div>
        </div>
        <div className="major">
          <b>Bachelor of Computer Science</b> | Ranking : Very good
        </div>
        <div className="courses">
          <b>Courses</b>: OOP in C++, Compilers, Algorithms, Operating Systems,
          Data Structures, Web-Mobile Development, Artifical Intelligent.
        </div>
        <div className="short_descript">
          I am working as a <b>full-stack developer</b> and a <b>team leader</b>
          . Have a solid knowledge of data structures and algorithms and I also
          have more than 5 years of experience in web development.
          <b> Hobbies:</b> Playing Guitar, Football; Drawing and so on.
        </div>
        {/* Chuyen nganh / Điểm */}
        {/* Khóa học , Chứng chỉ */}
      </div>
      <Seperate title="Technical Skills" />
      <div className="technical_skills">
        <div className="child">
          <b>Proficiency</b> :{" "}
          <b>Javascript, NodeJs, HTML, CSS(SCSS/LESS) PHP</b>, Python, Bash,
          Shell, MySql, PostgreDB, MongoDB.
        </div>
        <div className="child">
          <b>Familiarity</b> : C++, Java, Go, Haskel, Linux, Ruby On Rails.
        </div>

        <div>
          <b>Technologies</b> :
          <ul>
            <li>
              Highly proficient :{" "}
              <b>ReactJs, Jquery, NodeJs(Express - NextJs), Laravel</b>, Git,
              AWS, Redmine,Pytorch.
            </li>
            <li>
              Familiar with :{" "}
              <b>
                Vuejs, D3js, Docker, Kubernete, RabbitMQ, CI/CD, Jest/Cypress
              </b>
              , Selenium, Linux, Bash, GraphQL.
            </li>
          </ul>
        </div>
        <div>
          <b>Management Skills</b> : <b>Team Leader</b> of 3 members |
          <b> Agile, Scrum and Presentation Skill.</b>
        </div>
      </div>
      <Seperate title="Professional Experience" />
      <div className="professional_experience">
        <ProfessionalExperience />
      </div>
      <Seperate title="Personal Projects" />
      <div className="personal_project">
        <PersonalProject />
      </div>
      <Seperate title="Certificates and Awards" />
      <div className="certificates_awards">
        <div className="left">
          <div className="item">
            <div className="title">
              Bachelor of COMPUTER SCIENCE AND ENGINREERING
            </div>
            <div className="description">
              Ho Chi Minh City University Of Technology From 2012 - 2016
            </div>
          </div>
          <div className="item">
            <div className="title">
              ENGLISH CERTIFICATE: TOEIC 700 (SINCE 2017)
            </div>
            <div className="description">
              I'm confident to communicate in English.
            </div>
          </div>
          <div className="item">
            <div className="title">
              Runner-up of The RoboCOP Competition 2016(HCMUT)
            </div>
            <div className="description">
              I was the runner-up in that contest which is about programming an
              AI robocop
            </div>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <div className="title">
              MACHINE LEARNING CERTIFICATE ( ON COURSERA) 2020
            </div>
            <div className="description">
              Fundamental machine learning and how to build from scratch,
              improve it on a particular problem
              <br />
              <a
                href="https://www.coursera.org/learn/machine-learning"
                target="_blank"
                rel="noreferrer"
              >
                coursera.org/learn/machine-learning
              </a>
            </div>
          </div>
          <div className="item">
            <div className="title">
              DEEP LEARNING CERTIFICATE(ON COURSERA) 2021: IN PROGRESS
            </div>
            <div className="description">
              Master the fundamentals of deep learning and break into AI.{" "}
              <a
                href="https://www.coursera.org/specializations/deep-learning"
                target="_blank"
                rel="noreferrer"
              >
                coursera.org/specializations/deep-learning
              </a>
            </div>
          </div>
        </div>
      </div>
      <Seperate title="Working Target" />
      <div className="working_target">
        <ol>
          <li> Become a skillful team leader in the next 1 or 2 years</li>
          <li>
            I want to develop myself in the direction of technical expertise
          </li>
        </ol>
      </div>
      <Seperate title="reference" />
      <div className="reference">
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
    </div>
  );
};

export default LayoutNew;
