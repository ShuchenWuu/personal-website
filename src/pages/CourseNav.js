import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header1 from "./component/Header1";
import { Image } from "react-bootstrap";

import Underline1 from "../global/image/underline1.svg";
import CourseNavResearch from "../global/image/project1/distri.svg";
import Archi from "../global/image/project1/archi.svg";
import CourseNavWeb from "../global/image/courseNav_web.svg";
import Tech from "../global/image/project1/tech.svg";
import EX1_1 from "../global/image/project1/ex1.1.png";
import EX1_2 from "../global/image/project1/ex1.2.png";
import EX2_1 from "../global/image/project1/ex2_1.png";
import EX2_2 from "../global/image/project1/ex2_2.png";
import Icon1 from "../global/image/project1/icon1.svg";
import Icon2 from "../global/image/project1/icon2.svg";
import Icon3 from "../global/image/project1/icon3.svg";
import Icon4 from "../global/image/project1/icon4.svg";
import Icon5 from "../global/image/project1/icon5.svg";

function Course_Nav() {
  return (
    <div>
      <Header1 string="Web development" style={{ color: "#b8bafd" }} />
      <Image
        src={CourseNavWeb}
        style={{
          width: "60%",
          marginLeft: "auto",
          marginBottom: "4vw",
          marginTop: "6vw",
        }}
        className="rounded mx-auto d-block"
      />

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">The project</div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          The project is a team project; as the project manager, UI/UX designer,
          and frontend developer in the team, I am responsible for communicating
          with our client and potential users, designing the UX solution, and
          developing the user interfaces of the website. <br />
          <br />
          Duration: 3 months
          <br />
          <br /> Methods: Agile project management, Surveys, Wireframes,
          Prototyping, Integration testing, Usability testing Tools: MERN stack,
          Adobe XD, Adobe Illustrator, Spline 3D
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Content</div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          CourseNav is a web-based application that aims to help users
          understand the student’s learning pathway. The project targets course
          coordinators and students in computer science and relative degrees at
          the University of Adelaide. It provides visualised course dependency
          information for users to investigate the relationship between courses
          and potential study paths by analysing past student data. <br />
          <br />
          Our client has provided us with de-identified past student data,
          including courses, grades students got, and years from 2014-2020 in
          computer science and relative degrees in The University of Adelaide.
          <br />
          <br /> The project aims to use past student data to help students and
          course coordinators find insights into understanding students’
          learning pathways.
          <br />
          <br />
          <div className="goal_box">
            <div className="goal_logo">
              <Image
                src={Icon1}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              To find the relation between the performance of the prerequisite
              courses and dependence courses, the system should search through
              our database and find the distribution of the searched course and
              its prerequisite/dependency courses with distributions.
            </div>
          </div>
          <div className="goal_box">
            <div className="goal_logo">
              <Image
                src={Icon2}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              To recommend courses based on the ability of individuals, the
              system should search through our database and find students who
              have taken the same courses and got the same grades as the user,
              and display the distribution of all other courses these students
              have taken with the order taken.
            </div>
          </div>
          <div className="goal_box">
            <div className="goal_logo">
              <Image
                src={Icon3}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              <br />
              The website should present the information in a useful way that
              can be interactive. <br />
            </div>
          </div>
          <div className="goal_box">
            <div className="goal_logo">
              <Image
                src={Icon4}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              <br />
              Protect the database from users outside the University of
              Adelaide.
            </div>
          </div>
          <div className="goal_box">
            <div className="goal_logo">
              <Image
                src={Icon5}
                style={{ justifyContent: "left", width: "100%" }}
              />
            </div>
            <div className="goal_text">
              To provide an excellent user experience when using our website. We
              will develop the website with a clear structure so that users will
              not get lost in the website; we will provide enough text to guide
              users, and we plan to visualise all the results displacement for
              easier reading purposes. <br />
            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">Research </div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          Education is an integral part of the development of a country. Student
          performance and learning pathways are critical for the university to
          ensure students gain the expected knowledge and skills. Universities
          set study plans and the order of taking courses to ensure academic
          teaching quality. It guarantees that students will enter a course with
          certain prior knowledge. <br />
          <br />
          From the course coordinators’ perspective, they want to know the
          relationship between courses. How the student’s performance in the
          prerequisite courses will impact the later course, and how the
          performance in the current course will benefit their further study.
          When students can choose from multiple courses as the prerequisite,
          course coordinators want to verify which prerequisite will lead to
          better performance in the latter course. However, lacking an efficient
          tool to check the course dependence requirements, course coordinators
          have to search each course manually on the university website. There
          is no tool in the market investigating how much each of the
          prerequisites contributes to a later course.
          <br />
          <br /> From the students’ perspective, students are asked to choose
          relative electives from a long list. As I surveyed 58 computer science
          students, more that 90% of the demographic indicated there are
          difficulties selecting electives, especially for students who are new
          to computer science. Students tend to look for advisors when they
          choose electives. The survey showed that the most popular way of
          seeking elective advice is to ask their seniors (79.31%). However,
          more than 30% of the points demographic out that asking for advice for
          seniors does not help. More than 24% of the students suggested that
          there are no efficient current solutions that help. 65.5% of the
          students hope to get customised electives choosing advice based on the
          performance of their past courses. In addition, 31% of the students
          look for advice with elective combinations classified with directions.
          They wanted to know the electives for next semester and the potential
          study paths. However, there is no such tool in the market to provide
          customised advice based on individual performance and help them
          understand their learning pathway.
        </div>
      </div>
      <Image
        src={CourseNavResearch}
        style={{
          width: "80%",
          marginLeft: "auto",
          marginTop: "1vw",
          marginBottom: "2vw",
        }}
        className="rounded mx-auto d-block"
      />

      <div className="body">
        <div className="underline_box ">
          <div className="body_title"></div>
        </div>
        <div className="body_body">
          The niche of the market we highlight is an application that can help
          course coordinators investigate the relationship/impacts between
          courses, help students choose courses based on their abilities/level,
          and visually see their potential learning pathways. Our project aims
          to solve the above problems.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">User flow</div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <Image
            src={Archi}
            style={{ justifyContent: "left", width: "100%" }}
          />
          <span className="bold">
            Login <br />
          </span>
          Users must log in to the website with the ID and password with The
          University of Adelaide to use our website; this is designed to protect
          past students’ data in our database.
          <br />
          <br />
          <span className="bold">
            Course Relationship (mainly targets course coordinators) <br />
          </span>
          There will be two features in the function: search prerequisite and
          search dependency. Users will provide a course name/code they want to
          investigate and choose which search they want to use.
          <br />
          <span className="bold">
            Search prerequisite <br />
          </span>
          The search prerequisite will display the overall distribution of the
          searched course and all the prerequisite courses with its distribution
          of the searched course. Users can click on the prerequisite courses,
          then the overall distribution of the searched course will be updated
          into the distribution of students who have taken the clicked course as
          a prerequisite. Users can click on single/multiple grade/grades in the
          prerequisite course; the searched course distribution will be for
          students who reached a certain grade/grades in the prerequisite
          course, and how is their performance in the searched course. <br />
          <span className="bold">
            Search dependency <br />
          </span>
          In the search dependency, it will display the overall distribution of
          the searched course and all the dependency courses with its
          distribution of the searched course. Users can click on the
          grade/grades of the distribution of the searched course, and the
          distribution of the dependency course will be updated with students
          who have reached certain grade/grades in the searched course and what
          is the performance in the dependency courses.
          <br />
          <br />
          <span className="bold">
            Course Advisor (mainly targets students) <br />
          </span>
          Students will provide their past courses and grades to the website. It
          will display a network graph that shows all the possible courses that
          students may choose (with order/level) in the future. Users can click
          on any course, and it will show the grade distribution of the clicked
          course of students who have got the same grade as the user in the past
          courses.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">
            System
            <br />
            Architecture
          </div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          <Image
            src={Tech}
            style={{
              justifyContent: "left",
              width: "100%",
              marginBottom: "1.5vw",
            }}
          />
          The system architecture of the project is shown in. The website
          consists of three layers: the presentation layer, application layer,
          data layer. We use the MERN stack to develop the website; MERN stands
          for MongoDB, Express.js, React, and Node.js.
          <br />
          - MongoDB: A document-based open-source database to store past
          students’ data
          <br />
          - Express: A web application framework for Node.js (backend)
          <br />
          - React: A JavaScript frontend library for building user interfaces.
          <br />
          - Node.js: JavaScript run-time environment that executes JavaScript
          code outside of a browser.
          <br />
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title"> Testing</div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          We did usability testing, unit testing, defect testing, and system
          testing to measure our results. (see appendix 3 testing report) <br />
          <br />
          <span className="bold">Usability test:</span>
          <br /> Before we start the programming part of the project, we design
          an interactive prototype that simulates the actual product. We did the
          usability testing with two computer science students outside the team.
          We observe how they interact with the prototype, note the problem they
          faced, and ask them which parts are confusing. Then we improved the
          prototype and did the second round of usability testing with another
          two potential users. (see appendix 4 four versions of UX solution)
          <br />
          <br /> <span className="bold">Unit test: </span>
          <br />
          In unit testing, we tested each backend API to ensure it returns the
          correct results and the frontend component to ensure it works the same
          with the prototype separately. Individuals are executing the test
          before pushing it into the master branch on GitHub.
          <br />
          <br /> <span className="bold">Integration & defect test: </span>
          <br />
          In the integration testing, we tested our website’s functions to find
          defects where software components and system interface together. We
          tested the functions with correct user logic and incorrect user
          logic/invalid input to see if the functions do the expected job or
          find any defects.
          <br />
          <br />
          <span className="bold">System testing: </span>
          <br />
          We check if there is any connection error between each function. Each
          team member played a role in representing the potential users. We
          simulated using the product based on different needs, simulated the
          variety of user paths, and tested it in both Mac os and Windows with
          varying screen sizes.
        </div>
      </div>

      <div className="body">
        <div className="underline_box ">
          <div className="body_title">
            Examples to <br />
            verify the <br />
            outcome
          </div>
          <Image
            src={Underline1}
            style={{ justifyContent: "left", width: "30%" }}
          />
        </div>
        <div className="body_body">
          Example 1: As a course coordinator of course 2201, as Example 1.1
          graph shows, with the prerequisite search in Course Relationship, the
          user can see the performance of 2201 and its prerequisite visually.
          When the user clicks on the prerequisite 1103 with the grade HD, the
          performance on the right-hand side will update from the overall
          performance of 2201 to the performance of students who take 1103 as a
          prerequisite and get grade HD. Users can understand that courses 1103
          and 2201 might be a direct correlation because students who got HD in
          the prerequisite still have a high chance of getting HD in 2201.
          <br />
          <Image
            src={EX1_1}
            style={{
              justifyContent: "left",
              width: "100%",
              marginBottom: "1vw",
            }}
          />
          <Image
            src={EX1_2}
            style={{
              justifyContent: "left",
              width: "100%",
              marginBottom: "1vw",
            }}
          />
          <br />
          Example 2: As a student who has taken 7202(got HD) and 7201(got C),
          and wants to know which course is suitable for him for future study.
          As the Example 2 graph shows, all the light blue nodes are the course
          the user can choose; the user can also learn that 7202 -> 7015 -> 7096
          is a potential study pathway. If the user clicks on 7015, it will tell
          the performance of students in 7015 who have taken 7202 and also got
          C. The user might have concluded that 7015 is not a challenging course
          for the user’s current level since 77% of students got HD in 7015.
          <Image
            src={EX2_1}
            style={{
              justifyContent: "left",
              width: "100%",
              marginBottom: "1vw",
            }}
          />
          <Image
            src={EX2_2}
            style={{
              justifyContent: "left",
              width: "100%",
              marginBottom: "1vw",
            }}
          />
        </div>
      </div>
      <div className="thanks">
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

export default Course_Nav;
