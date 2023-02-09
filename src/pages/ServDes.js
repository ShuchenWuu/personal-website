import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import "../index.css";
import Header3 from "./component/Header3";
import SevDev from "../global/image/project3/servdes.svg";
import Goal from "./component/sev_des_com/Goal";
import Display from "./component/sev_des_com/Display";

import Underline3 from "../global/image/project3/underline3.svg";

function Home() {
  return (
    <div>
      <Header3 />
      <Image
        src={SevDev}
        style={{
          width: "60%",
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
            src={Underline3}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The project is a team project (team of 3); the goal is to design the
          lanyard solution for ServDes 2020 conference. Our team works together
          to do the research and design decision-making. I participated in all
          the design processes and took the project management role.
          <br />
          <br />
          Service Design and Innovation conference (ServDes 2020) is the premier
          international research conference for exchanging knowledge within
          service design and service innovation studies aimed at academics and
          industry practitioners.
          <br />
          <br />
          Duration: 3 months
          <br />
          <br />
          Methods: Surveys, Contextual Interviews, Preference Test, Prototyping,
          Co-creative workshop
          <br />
          <br />
          Tools: Adobe Illustrator, Adobe InDesign
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Content</div>
          <Image
            src={Underline3}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The target audience is conference practitioners and researchers from
          Asia-Pacific and beyond.
          <br />
          <br />
          The goal is to produce a lanyard solution that makes practitioners
          want to wear it during the conference.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Define</div>
          <Image
            src={Underline3}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          We interviewed stakeholders who will come to the conference; many of
          them indicated they do not want to wear a lanyard because they think
          it is useless and a waste of materials. However, wearing a lanyard is
          easier for management to the conference. So how to make a lanyard
          useful and sustainable are the core problems that we need to fix.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Final Product</div>
          <Image
            src={Underline3}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The design solution focuses on the following three aspects.
        </div>
      </div>
      <Goal />
      <br />
      <Display />
      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Reflection</div>
          <Image
            src={Underline3}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">Challenge</span>
          <br />
          <br />
          The biggest challenge that we faced was that we were producing a
          product that our users did not want. And we interviewed the
          stakeholders, everyone had their own opinions on the lanyard design,
          and their ideas were so different, so we were confused about who shall
          and what shall we listen to.
          <br />
          <br />
          <span className="bold">What did I learn?</span>
          <br />
          <br />I learned that it is almost impossible to meet everyone’s
          expectations. But it is essential to listen to the opinions in order
          to analyse and classify those opinions. It is helpful to develop a
          comprehensive ideation that can meet most users’ expectations.
        </div>
      </div>
      <div className="thanks3">
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

export default Home;
