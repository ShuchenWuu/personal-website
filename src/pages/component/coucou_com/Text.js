import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import "../../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../component.css";

import Underline4 from "../../../global/image/project4/underline4.png";

function Text() {
  return (
    <div>
      <div className="body">
        <div className="underline_box ">
          <div className="body_title">The project</div>
          <Image
            src={Underline4}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The project is a customer-centred packaging design in RMIT. As the
          sole designer in this project. I did the research, branding and
          packing design. <br />
          <br />
          Duration: 4 weeks
          <br />
          <br />
          Methods: Observation, Surveys, Interviews, Persona, Wireframes,
          Prototyping
          <br />
          <br />
          Tools: Adobe Illustrator
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Branding</div>
          <Image
            src={Underline4}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          Coucou is a French pastry. It is a young and vibrant brand. Our target
          audience is people with a rapid working pattern, lacking time setting
          down to enjoy pastry in store but still want to have tasty pastry
          delicately. Coucou is a French word, which is a cute way to say hi. I
          hope Coucou and its pastries can bring my audience a touch of warmth
          and happiness. <br />
          <br />
          Coucou is a short word, easy to memorise. When giving the name for the
          business, I also consider how relative it is to other cultures. The
          pronunciation of Coucou sounds like a belly call from hungry people,
          which can be a customer memory point.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Problem</div>
          <Image
            src={Underline4}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          My packaging design solution is for a traditional French pastry called
          opera cake. When the customers open a cake takeaway box, it is usually
          hard to take it out without hurting the appearance of the cake. Users
          do not want to have their cake eaten in a box without knowing how it
          looks. For the bag design, if the bag does not fit, the packaging
          boxes might cause wobbling, which will damage the pastry, especially
          cakes.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Final Product</div>
          <Image
            src={Underline4}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">Takeaway box design</span> <br />
          There is a bit in the corner of the box which acts in cooperation with
          branding. The “Best before” date can be written on the box. There are
          ingredients on the side of the box and a warning of allergy
          information. A statement for each layer tells the audience what they
          can expect in this box. The box is easy to put together and teardown,
          so if the users do not finish eating the cake, they can put it back in
          the box. It is convenient for sellers to pack the cake, and it saves
          space for storage.
        </div>
      </div>
    </div>
  );
}

export default Text;
