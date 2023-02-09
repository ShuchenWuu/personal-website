import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header2 from "./component/Header2";
import { Image } from "react-bootstrap";

import Climber_img from "../global/image/project2/climber.svg";
import Underline2 from "../global/image/project2/underline2.png";
import Data from "../global/image/project2/data.svg";
import Design_process from "../global/image/project2/design_progress.svg";
import Findings from "../global/image/project2/findings.svg";
import Persona from "../global/image/project2/persona.svg";
import Direction from "../global/image/project2/direction.svg";
import Draft from "../global/image/project2/draft.png";
import Drafts from "../global/image/project2/drafts.png";
import Archi from "../global/image/project2/archi.png";
import UI from "../global/image/project2/ui.png";
import Feature1 from "../global/image/project2/feature1.svg";
import Feature2 from "../global/image/project2/feature2.svg";
import Improve1 from "../global/image/project2/improve1.svg";
import Improve2 from "../global/image/project2/improve2.svg";
import Entry from "../global/image/project2/entry.svg";
import Com from "../global/image/project2/com.svg";
import Before from "../global/image/project2/before.svg";
import Profile from "../global/image/project2/profile.svg";
import Final from "../global/image/project2/final.svg";

function Climber() {
  return (
    <div style={{ width: "100%" }}>
      <Header2 />
      <Image
        src={Climber_img}
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
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          Climber is an application that I created as part of my UX course at
          RMIT. As the sole UX designer, I designed this project from inception
          to final design through research, ideation and UX design principles.{" "}
          <br />
          <br />
          Duration: 3 months
          <br />
          <br />
          Methods: Observation, Surveys, Interviews, Persona, Wireframes,
          Prototyping
          <br />
          <br />
          Tools: Adobe XD, Adobe Illustrator, Procreate
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Content</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The demographic of the study is students in university, specifically
          in terms of procrastination and efficiency in the study.
          <br />
          <br />
          The procrastination problem is a universal issue; the project aims to
          determine why students are likely to procrastinate with their studies
          and the solution to help.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">The process</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
      </div>

      <div className="body">
        <Image
          src={Design_process}
          style={{ justifyContent: "center", width: "60%" }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Research</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">Observation</span>
          <br />
          To get a better understanding of the behaviour or pattern of students
          during studying, I observed three students studying alone in the
          university library and two students who studied together. After a
          period of studying, I found that students are likely to become
          procrastinate. When we study alone or with friends, they need a
          reminder that tells them how much time they spend studying or reminds
          them back to study.
          <br />
          <br />
          <span className="bold">Exist solutions</span> <br />I interviewed
          seven people about their solutions to deal with procrastination. All
          of them mentioned making a study plan and breaking down study tasks.
          However, the problem with this solution is that there are high chances
          that students can not follow/finish their study plan, so they are
          losing motivation little by little.
          <br />
          <br />
          There is a competitor APP called Forest. I analysed the app and found
          that it is quite successful in this field because of the theme it
          provides to help users focus. It offers its audience a memory point,
          and the UI and UX design make the user experience more enjoyable. As I
          interviewed three males and four female, female is more likely to use
          App to solve this problem compared with male.
          <br />
          <br />
          <span className="bold">Interviews</span>
          <br />I interviewed two students who have different working patterns.
          I asked questions about their procrastination and the timeline of
          their day. I tried to get context within their behaviours and final
          pain points.
          <br />
          <br />I had two assumptions at this stage
          <br />
          -People might overestimate or underestimate their time spend on
          studying.
          <br />
          -The will to reduce procrastination probably only works with people
          who have a goal to work hard.
        </div>
      </div>
      <div className="body">
        <Image
          src={Data}
          style={{ justifyContent: "center", width: "80%" }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box "></div>
        <div className="body_body">
          <span className="bold">Key ﬁndings</span>
          <br />A conclusion drawn from the research is that students tend to
          overestimate their abilities and underestimate the tasks. By gathering
          and analysing the research outcome, the reasons students provide for
          procrastination can be classiﬁed into three following aspects:
          <Image
            src={Findings}
            style={{ justifyContent: "left", width: "80%" }}
          />
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Define</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">Persona</span>
        </div>
      </div>

      <div className="body">
        <Image
          src={Persona}
          style={{ justifyContent: "center", width: "80%" }}
          className="rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box "></div>
        <div className="body_body2">
          <span className="bold">Design direction</span>
          <Image
            src={Direction}
            style={{ justifyContent: "left", width: "100%", marginTop: "2vw" }}
          />
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Ideation</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body2">
          <span className="bold" style={{ marginBottom: "1vw" }}>
            Design Process
          </span>
          <Image
            src={Draft}
            style={{
              justifyContent: "left",
              width: "100%",
            }}
          />
          <spam className="bold" style={{ marginTop: "2vw" }}>
            Ideations
          </spam>
          <break />I came up with three solutions. I made a mockup for each
          solution. Below are my design mockups. I presented to 23 potential
          users to choose which one would best solve the problem; more than half
          of the students voted for Climber.
          <Image
            src={Drafts}
            style={{
              justifyContent: "left",
              width: "100%",
            }}
            className="mt-1"
          />
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Prototype</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body2">
          <span className="bold" style={{ marginBottom: "1vw" }}>
            Sitemap of Climber
          </span>
          <Image
            src={Archi}
            style={{
              justifyContent: "left",
              width: "100%",
            }}
          />
          <spam className="bold" style={{ marginTop: "2vw" }}>
            UI Design
          </spam>
          <Image
            src={UI}
            style={{
              justifyContent: "left",
              width: "100%",
            }}
          />
          <spam className="bold" style={{ marginTop: "2vw" }}>
            Features
          </spam>
        </div>
      </div>

      <div className="body2">
        <Image
          src={Feature1}
          style={{
            justifyContent: "center",
            width: "80%",
          }}
          className="rounded mx-auto d-block"
        />
        <Image
          src={Feature2}
          style={{
            justifyContent: "cenetr",
            width: "80%",
          }}
          className="mt-1 rounded mx-auto d-block"
        />
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Iteration</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">User testing</span>
          <br />
          1. Group user testing Without any instruction/info about this APP
          <br />
          -Positive feedback on Illustrations
          <br />
          -Need a homepage to make these functions organised
          <br />
          -Needs awards after unlocking mountains
          <br />
          -Need some instructions for each function
          <br />
          -Bit of confusing of the metaphor in climbing (tracking function)
          <br />
          -Need a entry page
          <br />
          <br />
          2. Individual user testing
          <br />
          I Asked five questions -Is there any part/functions that you do not
          know how to use/understand?
          <br />
          -Which part of the app seems more attractive to you
          <br />
          -Which features seems more helpful to you?
          <br />
          -Tell me about your user experience (both positive and negative)
          <br />
          -Is there anything that it could change to improve your user
          experience
          <br />
          <br />
          <span className="italic">Candice, Female</span>
          <br />
          -fully understand each function -Positive: Engaging illustrations and
          easy-to-read UI designs. She liked the interface of finding a mountain
          and starting a task; it surprised her.
          <br />
          -mountain library and block functions seem helpful to her
          <br />
          -UX part, give options of type when starting a task
          <br />
          -For the tracking function
          <br />
          -She does not think the hierarchy of these functions is essential.
          Considering there are only four functions of this app, she can find
          the icon of getting into them down the bottom. <br />
          -Starting page: Maybe telling users how many days they have been using
          this app.
          <br />
          -She asked me if she could change the number on the setting part.
          <br />
          <br />
          <span className="italic">Juan, Female</span>
          <br />
          -If there are no instructions, she will be confused about the purpose
          of this app. She thought it was something about real climbing.
          <br />
          -She likes the tidy and straightforward interface and the surprising
          metaphor.
          <br />
          -She thinks the blocking function will be the most helpful one.
          <br />
          -She was wondering if there is any award like being able to change the
          colour of the interface.
          <br /> <br />
          <span className="italic">Huawen Bu, male, dominant in IT</span>
          <br />
          -It needs an enter page except for the setup page.
          <br />
          -It will be better to have content where those key pages of those
          functions can go in so that those pages can be organised. He also said
          it would be more evident for developers to make the app happen.
          <br />
          <br />
          <span className="bold">Improvement</span>
          <div className="body_body3">
            <div className="col_image">
              <Image
                src={Improve1}
                style={{
                  justifyContent: "left",
                  width: "100%",
                }}
                className="mt-1 ml-0"
              />
            </div>
            <div className="body_body1">
              Users mentioned a homepage is needed for this APP. I notice that
              many apps have a homepage, but there are only four parallel
              functions for Climber, and users need to press the icon on the
              bottom to enter each function. I think my users said they need a
              homage because they got lost in Climber, especially in the task
              timer function. However, in the task timer, users have to follow
              the flow; they cannot simply go to one page in the process.
              <br />
              <br />
              So my solution for a home page is I add a Burger icon on each
              page; they can get a menu through the icon. I put those functions
              that are most useful selected by users.
            </div>
          </div>
          <div className="body_body3">
            <div className="col_image">
              <Image
                src={Improve2}
                style={{
                  justifyContent: "left",
                  width: "100%",
                }}
                className="mt-1 ml-0"
              />
            </div>
            <div className="body_body1">
              I think another reason is that the hierarchy of the interactive
              system is not evident to the users. So I changed the icon for each
              function and put them in the box. And emphasise the shadow of each
              clickable table. Show multiple layers on the user interface to
              make it easier for users to tell hierarchy and find their ways
              back or to other functions.
            </div>
          </div>
          Many of the users said it is a bit confusing with the metaphor on the
          task timer is confusing. An entry page is needed for an App. So I made
          some pages before the setup page to clarify each function’s purpose
          and give users some background information about this APP. I instruct
          the first page of the task timer and design an entry page.
          <Image
            src={Entry}
            style={{
              justifyContent: "center",
              width: "100%",
            }}
            className="rounded mx-auto d-block mt-1"
          />
          <div
            className="body_body3"
            style={{ marginTop: "3vw", marginBottom: "3vw" }}
          >
            <div className="col_image">
              <Image
                src={Com}
                style={{
                  justifyContent: "left",
                  width: "100%",
                }}
                className="mt-1 ml-0"
              />
            </div>
            <div className="body_body1">
              Give options for task type: I do not think it is a proper help for
              users. Students have multiple task types; I do not want to limit
              them; they can use the task timer to count time for any kind of
              task needed.
              <br />
              <br />
              Classify tracking details:
              <br />
              Classify apps/software by kind, not just list used apps/software.
              It will be easier for users to understand what kept them away from
              studying.
            </div>
          </div>
          Confusing UI design on setting page
          <br />
          One user asked if the number on the setting page is changeable, so I
          think I might be a problem for other people. I changed the design, so
          it will not be confusing. And I changed the number electing system in
          the block function as well.
          <Image
            src={Before}
            style={{
              justifyContent: "center",
              width: "100%",
            }}
            className="rounded mx-auto d-block mt-1 mb-3"
          />
          <span className="bold">User testing </span>
          <br />
          <br />I gave my climber 2.0 to two users to test if they understood
          the app’s function and whether they got lost in the app.
          <br />
          <br />I did the first one, sent her the link and tested. While the
          second one, I did the user testing in person. She operates the app in
          front of me. Both of them give me positive feedback on understanding
          the function and finding things they want. The second user says it
          will be better if there is a planner that can contain those periods
          from the mountain library.
          <br />
          <br />
          <span className="bold">Improvement </span>
          <div className="body_body3">
            <div className="col_image2">
              <Image
                src={Profile}
                style={{
                  justifyContent: "left",
                  width: "100%",
                }}
                className="mt-1 ml-0"
              />
            </div>
            <div className="body_body1">
              I decided to add the planning function to the profile. So that
              users do not have to write down task time, they can drag their
              tasks into the planner.
            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Final Product</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <Image
            src={Final}
            style={{
              justifyContent: "left",
              width: "100%",
            }}
            className="mt-1 ml-0"
          />
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Reflection</div>
          <Image
            src={Underline2}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <span className="bold">
            What I learn?
            <br />
          </span>
          <br />
          Throughout this user testing journey, I realised that there are many
          details that I, as a designer, could not tell, but my users can sense.
          For example, to classify details in tracking or the little UI design
          in selecting numbers. I am highly confident in my product. However,
          there are still things that can be improved from the user’s
          perspective. I also learned in doing user testing that when users give
          an offer of changing something, always ask, “have you seen….” To make
          sure their comment is based on fully understanding the product. And
          after user testing, do not follow all the suggestions from users
          because they may have different opinions, and there might be conflicts
          with my products and their advice. I could analyse the purpose of
          their command, and it might be changed in another way.
          <br />
          <br />
          <span className="bold">
            What’s next?
            <br />
          </span>
          <br />
          The UI and product that I designed for this project are all
          mobile-based. Some functions could be more helpful if it could be
          launched on pc/iPad/Apple watch. So if there is more time that I could
          apply to this project, I would develop the UI and UX on pc.
        </div>
      </div>

      <div className="thanks2">
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

export default Climber;
