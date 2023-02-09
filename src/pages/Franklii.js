import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header6 from "./component/Header6";
import { Image } from "react-bootstrap";

import Franklii_hero from "../global/image/project6/franklii_hero.svg";
import Underline6 from "../global/image/project6/underline6.svg";
import Icon1 from "../global/image/project6/icon1.svg";
import Icon2 from "../global/image/project6/icon2.svg";
import Icon3 from "../global/image/project6/icon3.svg";
import Icon4 from "../global/image/project6/icon4.svg";
import Icon5 from "../global/image/project6/icon5.svg";
import Icon6 from "../global/image/project6/icon6.svg";
import Component from "../global/image/project6/component.svg";
import Research1 from "../global/image/project6/research1.svg";
import Research2 from "../global/image/project6/research2.png";
import Product1 from "../global/image/project6/product1.svg";
import Product2 from "../global/image/project6/product2.svg";
import Product3 from "../global/image/project6/product3.svg";
import Product4 from "../global/image/project6/product4.svg";

function Franklii() {
  return (
    <div>
      <Header6 />
      <Image
        src={Franklii_hero}
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
            src={Underline6}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The project is a personal individual project. I am taking charge of
          research, design and 3D modelling. <br />
          <br />
          Duration: 2 months
          <br />
          <br />
          Method: Interview, Survey
          <br />
          <br />
          Tools: Adobe Illustrator, Cinema4D, Procreate
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Research</div>
          <Image
            src={Underline6}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          Emotion Emotions are biological states associated with the nervous
          system brought on by neurophysiological changes variously related to
          thoughts, feelings, behavioural responses, and a degree of pleasure or
          displeasure.
          <br />
          <Image src={Icon1} style={{ justifyContent: "left", width: "60%" }} />
          <br />
          From a purely mechanistic perspective, “Emotions can be defined as a
          positive or negative experience that is associated with a particular
          pattern of physiological activity.” Emotions produce different
          physiological, behavioral and cognitive changes.
          <Image src={Icon2} style={{ justifyContent: "left", width: "60%" }} />
          <br />
          According to some theories, they are states of feeling that result in
          physical and psychological changes that influence our behavior. The
          physiology of emotion is closely linked to arousal of the nervous
          system with various states and strengths of arousal relating,
          apparently, to particular emotions.
          <br />
          <br />
          <span className="bold">
            Components
            <br />
          </span>
          Robert Plutchik agreed with Ekman’s biologically driven perspective
          but developed the “wheel of emotions”, suggesting eight primary
          emotions grouped positively or negatively: joy versus sadness; anger
          versus fear; trust versus disgust; and surprise versus anticipation.
          Some basic emotions can be modified to form complex emotions. The
          complex emotions could arise from cultural conditioning or association
          combined with the basic emotions.
          <Image
            src={Component}
            style={{ justifyContent: "left", width: "100%", marginTop: "1vw" }}
          />
        </div>
      </div>
      <div className="body">
        <Image
          src={Research1}
          style={{
            width: "80%",
            marginLeft: "auto",
          }}
          className="rounded mx-auto d-block"
        />
      </div>
      <div className="body">
        <Image
          src={Research2}
          style={{
            width: "80%",
            marginLeft: "auto",
          }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Define</div>
          <Image
            src={Underline6}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">
            Findings <br />
          </span>
          Almost everyone has their dislike of emotions, and people have
          depressed their emotions on purpose or unconsciously. It is worth
          noting that 17% of the demographic says their depressed emotion will
          transform into another component, and 54% points out that after a
          depressing period, it is hard to detect them. Emotion is a physical
          mechanism that helps us dealing with behavioral responses. So if
          people can not identify it correctly, it might cause problems with
          behavioral interventions. 64% of the demographic feel it is good to
          let others know their emotions, and more than half of the people
          believe it is helpful for their social world.
          <br />
          <br />
          <span className="bold">
            Product goal
            <br />
          </span>
          <div className="goal_box" style={{ marginTop: "2vw" }}>
            <div className="goal_logo">
              <Image
                src={Icon3}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              1. Educate users about their emotional components.
            </div>
          </div>
          <div className="goal_box" style={{ marginTop: "1vw" }}>
            <div className="goal_logo">
              <Image
                src={Icon4}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              2. Let them identify their emotions accurately without spending
              time to think or feel components, even their dislike or depress
              emotions. And help them understand their emotion.
            </div>
          </div>
          <div className="goal_box" style={{ marginTop: "2vw" }}>
            <div className="goal_logo">
              <Image
                src={Icon5}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              3. Let emotional information become part of their social life,
              made the conversation more direct and easy to understand.
            </div>
          </div>
          <div className="goal_box" style={{ marginTop: "1vw" }}>
            <div className="goal_logo">
              <Image
                src={Icon6}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              <br />
              4. Help users relieve their negative emotions when needed.
            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Final Product</div>
          <Image
            src={Underline6}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
      </div>

      <Image
        src={Product1}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block"
      />
      <Image
        src={Product2}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block"
      />
      <Image
        src={Product3}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block"
      />
      <Image
        src={Product4}
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        className="rounded mx-auto d-block"
      />
      <div className="thanks6">
        <br />
        <br />
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

export default Franklii;
