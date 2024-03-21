import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "./Skills.css";
const Skills = () => {
  const responsive = {
    superargeDesktop: {
      breakpoint: { max: 4800, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Skilled in front-end development using React, JavaScript, and
                TypeScript, I create user-friendly and interactive web
                applications. Git and Linux ensure a collaborative workflow
                while my comfort with various software tools like VSCode and
                Webpack empowers efficient development. My commitment to clean
                code and accessibility drives me to stay ahead of the curve in
                the ever-evolving web landscape. Explore my portfolio to see
                these skills in action.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML5 & CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
