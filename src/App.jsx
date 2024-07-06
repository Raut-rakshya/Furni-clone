/* eslint-disable react/no-unescaped-entities */
import React from "react";
import logo1 from "./assets/images/logo.png";
import heroimg from "./assets/images/heroImage.png";
import mathimg from "./assets/images/logomath.png";
import readimg from "./assets/images/reading.png";
import lifeimg from "./assets/images/life_skills.png";
import scienceimg from "./assets/images/science.png";
import test from "./assets/images/test_prep.png";
import computeimg from "./assets/images/computing.png";
import artsimg from "./assets/images/arts_humanities.png";
import eco from "./assets/images/economics.png";
import partner from "./assets/images/partner_content.png";
import persoicon from "./assets/images/personalized_icon.png";
import trusticon from "./assets/images/trusted_icon.png";
import empicon from "./assets/images/empower_icon.png";
import faces from "./assets/images/facesCollage.png";
import laptimg from "./assets/images/laptop_collage.png";
import anjalimg from "./assets/images/anjali.png";
import mathunimg from "./assets/images/math-uni.png";
import logo2 from "./assets/images/bank-of-america.png";
import logo3 from "./assets/images/ann-and-john.png";
import logo4 from "./assets/images/lemann-foundation.png";
import logo5 from "./assets/images/tata-trusts.png";
import logo6 from "./assets/images/college-board.png";
import logo7 from "./assets/images/gates-foundation.png";
import logo8 from "./assets/images/carlos-rodriguez.png";
import logo9 from "./assets/images/valhalla-dark.png";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="fullWrapper">
        {/* ......First Navbar*/}

        <div className="nav">
          <div className="leftNav">
            <span>Courses</span>
            <button>Search</button>
          </div>
          <div className="centerNav">
            <div>
              <img src={logo1} />
            </div>
            <div className="bb">
              <span>
                <strong>Khan Academy</strong>
              </span>
            </div>
          </div>
          <div className="rightNav">
            <ul className="list">
              <li>Donate</li>
              <li>Login</li>
              <li>SignUp</li>
            </ul>
          </div>
        </div>

        {/* ....... Hero Section*/}
        <div className="heroSection">
          <div className="heroimg">
            <img src={heroimg} />
          </div>
          <div className="rightSection">
            <h1>
              For every student,
              <br />
              every classroom.
              <br />
              <span> Real results.</span>
            </h1>
            <p>
              We’re a nonprofit with the mission to provide a free, world-class
              <br />
              education for anyone, anywhere.
            </p>
            <div className="heroBtn">
              <button>Learners</button>
              <button>Teachers</button>
              <button>Parents</button>
            </div>
          </div>
        </div>

        {/* Central big container */}
        <div className="courses">
          <div className="leftco">
            <button className="btncrs">
              <img src={mathimg} />
              Math: Pre-K -8th grade
            </button>
            <button className="btncrs">
              <img src={mathimg} />
              Math: high school & college
            </button>
            <button className="btncrs">
              <img src={mathimg} />
              Math: Get ready courses
            </button>
            <button className="btncrs">
              <img src={readimg} />
              Reading & language arts
            </button>
            <button className="btncrs">
              <img src={lifeimg} />
              Life skills
            </button>
            <button className="btncrs">
              <img src={scienceimg} />
              Science
            </button>
          </div>
          <div className="rightco">
            <button className="btncrs">
              <img src={test} />
              Test prep
            </button>
            <button className="btncrs">
              <img src={computeimg} />
              Computing
            </button>
            <button className="btncrs">
              <img src={artsimg} />
              Arts & Humanities
            </button>
            <button className="btncrs">
              <img src={eco} />
              Economics
            </button>
            <button className="btncrs">
              <img src={partner} />
              Partner courses
            </button>
          </div>
        </div>

        <div className="wrapper">
          <h2>Why Khan Academy works</h2>
          <div className="trio">
            <div className="card">
              <div>
                <img src={persoicon} />
              </div>
              <div className="coCard">
                <h3>Personalized learning</h3>
                <span>
                  Students practice at their own pace,first filling in gaps in
                  their understanding and then accelerating their learning.
                </span>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={trusticon} />
              </div>
              <div className="coCard">
                <h3>Trusted content</h3>
                <span>
                  Created by experts, Khan Academy's library of trusted practice
                  and lessons covers math, science, and more. Always free for
                  learners and teachers.
                </span>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={empicon} />
              </div>
              <div className="coCard">
                <h3>Tools to empower teachers</h3>
                <span>
                  With Khan Academy, teachers can identify gaps in their
                  student's understanding, tailor instruction, and meet the
                  needs of every student.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="teacher">
          <div className="imge">
            <img src={faces} />
          </div>
          <div className="faceRight">
            <span>TEACHERS</span>
            <h2>Differentiate your classroom and engage every student.</h2>
            <p>
              We empower teachers to support their entire classroom. 90% of US
              teachers who have used Khan Academy have found us effective.
            </p>
            <div>
              <button className="startHere">Teachers, start here</button>
            </div>
          </div>
        </div>

        <div className="learner">
          <div>
            <span>LEARNERS AND STUDENTS</span>
            <h3>You canlearn anything.</h3>
            <p>Build a deep, solid understanding in math, science and more.</p>
            <div>
              <button>Learners, start here</button>
            </div>
          </div>
          <div>
            <img src={laptimg} />
          </div>
        </div>

        <div>
          <div>
            <span>
              "I come from a poor family. At home it's one room, just a room we
              live in. When I was a child, I used to fear mathematics. But now,
              I am in love with mathematics because of Khan Academy."{" "}
            </span>
            <div className="profile">
              <div className="nameAddress">
                <span>ANJALI</span>
                <span>INDIA</span>
              </div>
              <div className="photo">
                <img src={anjalimg} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img src={mathunimg} />
          </div>
          <div>
            <span> TOGETHER WE CAN MAKE A DIFFERENCE</span>
            <h3>Every child deserves the chance to learn.</h3>
            <p>
              Across the globe, 617 million children are missing basic math and
              reading skills. We're a nonprofit delivering the education they
              need, and we need your help. You can change the course of a
              child's life.{" "}
            </p>
            <div>
              <button className="startHere">Give them the chance</button>
            </div>
          </div>
        </div>

        <div className="end">
          <h2> Join Khan Academy today</h2>
          <div>
            <ul className="btns ">
              <li>
                <button className="lb startHere">Learners</button>
              </li>
              <li>
                <button className="lb startHere">Teachers</button>
              </li>
              <li>
                <button className="lb startHere">Parents</button>
              </li>
              <li>
                <button className="lb startHere">Give Today</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="key">
          <h2>Key Supporters</h2>
          <div className="logoimg">
            <div className="leftLogo">
              <img src={logo2} />
              <img src={logo6} />
              <img src={logo3} />
              <img src={logo7} />
            </div>
            <div className="rightLogo">
              <img src={logo4} />
              <img src={logo8} />
              <img src={logo5} />
              <img src={logo9} />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="uFooter">
            <div>
              <p>
                Our mission is to provide a free, world-class education to
                anyone, anywhere.
              </p>
              <p>
                Khan Academy is a 501(c)(3) nonprofit organization. DOnate or
                volunteer today!
              </p>
            </div>
            <div className="detail">
              <div className="aa">
                <h3>About</h3>
                <ul className="log">
                  <li>News</li>
                  <li>Impact</li>
                  <li>Out team</li>
                  <li>Our interns</li>
                  <li>Our content specialists</li>
                  <li>Our leadership</li>
                  <li>Our supporters</li>
                  <li>Our contributors</li>
                  <li>Our finances</li>
                  <li>Careers</li>
                  <li>Internships</li>
                  <li>Cookie Preferences</li>
                </ul>
              </div>
              <div className="aa">
                <h3>Contact</h3>
                <ul className="log">
                  <li>Help center</li>
                  <li>Support community</li>
                  <li>Share your story </li>
                  <li>Press</li>
                </ul>
              </div>
              <div className="aa">
                <h3>Courses</h3>
                <ul className="log">
                  <li>Math:Pre-K- 8th grade</li>
                  <li>Math: Get ready courses</li>
                  <li>Math: high school & college</li>
                  <li> Test prep</li>
                  <li>Science</li>
                  <li>Computing</li>
                  <li>Arts & humanities</li>
                  <li>Economics</li>
                  <li>Reading & language arts</li>
                  <li>Life skills</li>
                  <li>Partner courses</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="logoFooter"></div>
        </div>
      </div>
    );
  }
}

export default App;
