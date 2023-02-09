import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { containor, row, col } from "react-bootstrap";
import "../index.css";
import Front from "../global/image/potfolio.svg";
import CourseNav from "../global/image/courseNav_hero.svg";
import Climber from "../global/image/climber_hero.svg";
import SevDev from "../global/image/sevDes_hero.svg";
import Coucou from "../global/image/coucou_hero.svg";
import Franklii from "../global/image/Franklii_hero.svg";
import Com from "../global/image/com_hero.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div
        style={{ marginTop: "2vw", width: "100%" }}
        className="ml-sm-3 header"
      >
        Portfolio
        <img src={Front} style={{ width: "100%" }} />
      </div>

      {/* Course Nav */}
      <div className="home_box">
        <div style={{ backgroundColor: "#EFF3FD", width: "50%" }}>
          <a a href="/courseNav" className="all-text">
            <div className="home_h3">Web development - CourseNav</div>
            <div className="home_body">
              The project is to develop a web-based application that helps
              course coordinators and students in computer science and relative
              degrees at the University of Adelaide understand the student’s
              learning pathway.
            </div>
          </a>
        </div>
        <row style={{ width: "50%" }}>
          <a a href="/courseNav">
            <img src={CourseNav} style={{ width: "100%" }} />
          </a>
        </row>
      </div>

      {/* Climber */}
      <div className="home_box">
        <row style={{ width: "50%" }}>
          <a a href="/climber">
            <img src={Climber} style={{ width: "100%" }} />
          </a>
        </row>
        <row style={{ backgroundColor: "#D5EBC2", width: "50%" }}>
          <a a href="/climber" className="all-text">
            <div className="home_h3">UX Design - Climber APP</div>
            <div className="home_body">
              The project is a research-based application design to help
              students with the procrastination problem towards study.
            </div>
          </a>
        </row>
      </div>

      {/* SevDes */}
      <div className="home_box">
        <row style={{ backgroundColor: "#FFEB72", width: "50%" }}>
          <a a href="/serv_des" className="all-text">
            <div className="home_h3">Service Design - ServDes2020</div>
            <div className="home_body">
              The project is a lanyard solution design for Service Design 2020
              Conference.
            </div>
          </a>
        </row>
        <row style={{ width: "50%" }}>
          <a a href="/serv_des">
            <img src={SevDev} style={{ width: "100%" }} />
          </a>
        </row>
      </div>

      {/* Coucou */}
      <div className="home_box">
        <row style={{ width: "50%" }}>
          <a a href="/coucou">
            <img src={Coucou} style={{ width: "100%" }} />
          </a>
        </row>
        <row style={{ backgroundColor: "#EF7C28", width: "50%" }}>
          <a a href="/coucou" className="all-text">
            <div className="home_h3">CX on Packaging design</div>
            <div className="home_body">
              The project includes branding, takeaway box, and bag design with
              human-centered design thinking.
            </div>
          </a>
        </row>
      </div>

      {/* Complainning Prints */}
      <div className="home_box">
        <row style={{ backgroundColor: "#B4C8FF", width: "50%" }}>
          <a a href="/complainning_prints" className="all-text">
            <div className="home_h3">
              Web Design/development Complainning Prints
            </div>
            <div className="home_body">
              The project is a generative web-based system design and
              development for negative emotional relief.
            </div>
          </a>
        </row>
        <row style={{ width: "50%" }}>
          <a a href="/complainning_prints">
            <img src={Com} style={{ width: "100%" }} />
          </a>
        </row>
      </div>

      {/* Franklii */}
      <div className="home_box">
        <row style={{ width: "50%" }}>
          <a a href="/franklii">
            <img src={Franklii} style={{ width: "100%" }} />
          </a>
        </row>
        <row style={{ backgroundColor: "#DADADA", width: "50%" }}>
          <a a href="/franklii" className="all-text">
            <div className="home_h3">Product Design - Franklii </div>
            <div className="home_body">
              The project is a conceptual product design that aims to help
              people supervise their emotions.
            </div>
          </a>
        </row>
      </div>
    </div>
  );
}

export default Home;
