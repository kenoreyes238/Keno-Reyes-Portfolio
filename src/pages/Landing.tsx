import { useNavigate } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import SwipeCarousel from '../components/SwipeCarousel';
import JobCard from "../components/JobCard"

function Landing() {

  const navigate = useNavigate();

  const resumeClick = () => {
    window.open("Keno Reyes Resume.pdf");
}

  return (
    <Container fluid className="landingPage">
      <Row className="landing">
        <Col>
          <div className="landingMe">
            <h1>Full-Stack Web Developer</h1>
              <h4>A full-stack web developer in the Sacramento Area. Currently an intern at Bay Valley Tech</h4>
                <Button onClick={() => navigate("/projects")} variant="outline-dark">Click to view my projects &gt;</Button>
          </div>
        </Col>
        <Col lg={5} className="pic">
          <SwipeCarousel />
        </Col>
      </Row>
      <Row className="aboutMe">
        <Col md={3}>
          <h3>About</h3>
          <h1>Keno Reyes</h1>
          <img src="mask1.png" alt="portrait"/>
        </Col>
        <Col className="description">
          <p>
            Keno Reyes is a Sacramento based web developer who specializes in front-end work using react JS. 
            Keno has worked on team projects, as well as some independent projects during his time at Bay Valley Tech.
            Although he does mostly front-end work, he also works on some back-end development using Firebase, Node.js, 
            mySQL, and Express. 
          </p>
          <p>
            During his free time, he likes to work out at the gym. He also enjoys doing recreational activities with either himself
            or with friends, which includes: swimming, rock climbing, etc. Besides staying healthy and fit, he likes to play some
            games on his pc and go on trips. 
          </p>
        </Col>
      </Row>
      <Row className="experience">
        <div className="expHeader">
          <h1>Experiences</h1> 
            <a onClick={resumeClick}>
              <Button variant="outline-dark">Click to view Resume</Button>
            </a>
        </div>
        <Col className="expJobs">
          <JobCard 
            jobTitle="Bay Valley Tech"
            time="November 2023 - Present"
            description="Collaborate with team and team lead to plan out and build a functional messaging app and Tech Job Search Page. Built functional components and front-end design using React JS, JavaScript, and CSS for personal and professional projects. Utilized Firebase, Node.js, MySQL, and Express for backend development for personal and professional projects."
          />
          <JobCard
            jobTitle="Starbucks"
            time="October 2021 - December 2023"
            description="Collaborate with other employees and shift supervisor to succeed in store performance. Dealing with customer satisfaction, uncooperative machinery, or limited inventory. Taking action to order detail, ringing up customer orders and making drinks."
          />
        </Col>
        <Row className="certificates">
          <h2>Certificates</h2>
            <div className="row1">
              <img src="HTML.jpg"  alt="HTML Module Certification"/>
              <img src="ResponsiveCSS.jpg" alt="Responsive CSS Certification" />
            </div>
            <div className="row2">
              <img src="ContentManagement.jpg" alt="Content Management Certification" />
              <img src="JavaScript.jpg" alt="JavaScript Certification" />
            </div>
            <div className="row3">
              <img src="AsyncJS.jpg" alt="Async JavaScript Certification" />
              <img src="ReactJS.jpg" alt="ReactJS Certification" />
            </div>
        </Row>
      </Row>
    </Container>
  )
}

export default Landing