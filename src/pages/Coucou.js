import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header4 from "./component/Header4";
import { Image } from "react-bootstrap";

import Text from "./component/coucou_com/Text";
import Coucou_brand from "../global/image/project4/coucou_brand.svg";
import Coucou_hero from "../global/image/project4/coucou_hero.svg";
import Display1 from "../global/image/project4/display1.svg";
import Display2 from "../global/image/project4/display2.svg";
import Display3 from "../global/image/project4/display3.svg";

function Coucou() {
  return (
    <div>
      <Header4 />
      <Image
        src={Coucou_brand}
        style={{
          width: "70%",
          marginLeft: "auto",
          marginTop: "6vw",
        }}
        className="rounded mx-auto d-block"
      />
      <Image
        src={Coucou_hero}
        style={{
          width: "70%",
          marginLeft: "auto",
          marginTop: "2vw",
          marginBottom: "4vw",
        }}
        className="rounded mx-auto d-block"
      />
      <Text />

      <div className="body">
        <Image
          src={Display1}
          style={{
            width: "70%",
            marginLeft: "auto",
          }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box "></div>
        <div className="body_body">
          <span className="bold">
            Bag design <br />
          </span>
          The structure of the bag design aims to fasten the box so that it will
          not wobble and damage the cake. It has a thicker handle to hold, which
          is comfortable for users to carry.
        </div>
      </div>

      <div className="body">
        <Image
          src={Display2}
          style={{
            width: "70%",
            marginLeft: "auto",
          }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box "></div>
        <div className="body_body">
          When the box is unfolded, it will become a paper placemat for cake,
          with a spoon and tissue on the sides. The pattern that I design for
          the inner side of the box gives a sense of a tablecloth, which offers
          the users a delicate experience of having it without placing it on
          another plate. The flat box is big enough, so customers do not need to
          worry if the cake will dirty their desks.
        </div>
      </div>

      <div className="body">
        <Image
          src={Display3}
          style={{
            width: "70%",
            marginLeft: "auto",
          }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="thanks4">
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

export default Coucou;
