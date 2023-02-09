import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import "../../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../component.css";

import Icon1 from "../../../global/image/project3/icon1.svg";
import Icon2 from "../../../global/image/project3/icon2.svg";
import Icon3 from "../../../global/image/project3/icon3.svg";
import Goal1 from "../../../global/image/project3/goal1.svg";
import Goal2 from "../../../global/image/project3/goal2.svg";
import Goal3 from "../../../global/image/project3/goal3.svg";
import Cover1 from "../../../global/image/project3/cover1.png";
import Cover2 from "../../../global/image/project3/cover2.png";

function Goal() {
  return (
    <div>
      <Row className="row_row">
        <Col className="col_3">
          <Image
            src={Icon1}
            style={{ justifyContent: "center", width: "35%" }}
            className="rounded mx-auto d-block"
          />
          <br />1<br />
          <br />
          To make the lanyard meaningful enough so that people will not throw it
          away after the conference.
        </Col>
        <Col className="col_3">
          <Image
            src={Icon2}
            style={{ justifyContent: "center", width: "35%" }}
            className="rounded mx-auto d-block"
          />
          <br />
          2<br />
          <br />
          To make the lanyard useful enough so that people need it and are
          willing to wear it during the conference.
        </Col>
        <Col className="col_3">
          <Image
            src={Icon3}
            style={{ justifyContent: "center", width: "35%" }}
            className="rounded mx-auto d-block"
          />
          <br />
          3<br />
          <br />
          To use eco-friendly materials.
        </Col>
      </Row>
      <Row className="row_row">
        <Col className="col_3">
          <br />
          <Image
            src={Goal1}
            style={{ justifyContent: "center", width: "80%" }}
            className="rounded mx-auto d-block"
          />
        </Col>
        <Col className="col_3">
          <br />
          <Image
            src={Goal2}
            style={{ justifyContent: "center", width: "80%" }}
            className="rounded mx-auto d-block"
          />
        </Col>
        <Col className="col_3">
          <br />
          <Image
            src={Goal3}
            style={{ justifyContent: "center", width: "80%" }}
            className="rounded mx-auto d-block"
          />
        </Col>
      </Row>
      <br />
      <br />
      <div className="row_row1">
        <Col className="col_3">
          <Image
            src={Cover1}
            style={{ justifyContent: "left", width: "100%" }}
          />
        </Col>
        <Col className="col_3">
          <Image
            src={Cover2}
            style={{ justifyContent: "left", width: "100%" }}
          />
        </Col>
        <Col className="col_3">
          Instead of using a badge holder, we design a booklet. The cover of the
          booklet is a blank page, where people can write their name or any
          other information they want to provide. We decided not to print out
          the name because writing a name has a “sense of human,” which is more
          suitable for a conference about human-centered design. The information
          on the lanyard can be an ice breaker for the practitioners; it could
          be a clue for starting a conversation with strangers.
        </Col>
      </div>
    </div>
  );
}

export default Goal;
