import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header5 from "./component/Header5";
import { Image } from "react-bootstrap";
import "./component/component.css";

import Com_hero from "../global/image/project5/com_hero.svg";
import Research from "../global/image/project5/research.svg";
import Data from "../global/image/project5/data.svg";
import Underline5 from "../global/image/project5/underline5.svg";
import Icon1 from "../global/image/project5/icon1.svg";
import Icon2 from "../global/image/project5/icon2.svg";
import Icon3 from "../global/image/project5/icon3.svg";
import Web from "../global/image/project5/web.svg";
import Prints from "../global/image/project5/prints.svg";

function Com() {
  return (
    <div>
      <Header5 />
      <Image
        src={Com_hero}
        style={{
          width: "70%",
          marginLeft: "auto",
          marginTop: "6vw",
          marginBottom: "4vw",
        }}
        className="rounded mx-auto d-block"
      />

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">The project</div>
          <Image
            src={Underline5}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The project was a website design and development project when I was
          studying at RMIT. As the sole designer in the project, I am taking
          charge of research, design and development.
          <br />
          <br />
          Duration: 3 months
          <br />
          <br />
          Method: Interview, Survey
          <br />
          <br />
          Tools: Adobe Illustrator, JavaScript, Processing
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Research</div>
          <Image
            src={Underline5}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <Image
            src={Research}
            style={{ justifyContent: "left", width: "100%" }}
          />
          <Image
            src={Data}
            style={{ justifyContent: "left", width: "100%", marginTop: "3vw" }}
          />
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Define</div>
          <Image
            src={Underline5}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The results show that people need some way to get out of their stress
          and negative emotions. As I interviewed my friends and my families,
          the conclusions were similar to the survey.
        </div>
      </div>

      <div
        className="row_row1"
        style={{
          marginTop: "0vw",
        }}
      >
        <Image
          src={Icon1}
          style={{ justifyContent: "left", width: "30%", marginBottom: "3vw" }}
        />
        <Image
          src={Icon2}
          style={{ justifyContent: "left", width: "30%", marginBottom: "3vw" }}
        />
        <Image
          src={Icon3}
          style={{ justifyContent: "left", width: "30%", marginBottom: "3vw" }}
        />
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Final Product</div>
          <Image
            src={Underline5}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
      </div>

      <div className="body">
        <Image
          src={Web}
          style={{ justifyContent: "center", width: "80%" }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body1">
        <div className="underline_box "></div>
        <div className="body_body">
          <span className="bold">What</span>
          <br />
          It is a generative interactive web system that can translate your
          complaints (by talking about it) into visuals.
          <br />
          <br />
          <span className="bold">How</span>
          <br />
          The input is human language; people can talk about things that they
          have been through/bother them; the system will translate their speech
          into numbers. By changing parameters (colours, shapes), they can
          produce drawings base on their speech. The system will listen to
          users’ speech and continuous draws while they speak. By the time they
          finish, they can save the image by clicking the “save image”button.
          <br />
          <br />
          <br />
          <span className="bold">Generate outcome</span>
        </div>
      </div>

      <div className="body">
        <Image
          src={Prints}
          style={{ justifyContent: "center", width: "80%" }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="thanks5">
        Thanks for scrolling!
        <br />
        If you have any feedback, want to collaborate or just want to say hello,
        let’s get in touch!
        <br />
        wushuchen113@gmail.com
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Com;
