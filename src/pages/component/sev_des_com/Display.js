import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import "../../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../component.css";

import Content1 from "../../../global/image/project3/content1.svg";
import Content2 from "../../../global/image/project3/content2.svg";
import Content3 from "../../../global/image/project3/content3.svg";
import Content4 from "../../../global/image/project3/content4.svg";
import Content5 from "../../../global/image/project3/content5.svg";
import Content6 from "../../../global/image/project3/content6.svg";
import Content7 from "../../../global/image/project3/content7.svg";
import Content8 from "../../../global/image/project3/content8.svg";
import Content9 from "../../../global/image/project3/content9.svg";
import Paper from "../../../global/image/project3/paper.svg";

function Display() {
  return (
    <div className="center_box">
      The lanyard is a booklet that contains information about a way-finding
      system, schedules, tours, maps, and blank space for notes. We turn the
      lanyard into a handy tool so that guests are willing to wear a lanyard
      during the conference.
      <br />
      <br />
      Besides, we introduced stories of Melbourne and knowledge of this country
      so that guests from all over the world could better understand the city
      and the country.
      <br />
      <br />
      <Image
        src={Content1}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block"
      />
      <Image
        src={Content2}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content3}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content4}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content5}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content6}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content7}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content8}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <Image
        src={Content9}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block mt-3"
      />
      <br />
      <span className="bold">Recyclable material for the booklet</span>
      <Image
        src={Paper}
        style={{
          width: "60%",
          marginLeft: "0",
        }}
      />
    </div>
  );
}

export default Display;
