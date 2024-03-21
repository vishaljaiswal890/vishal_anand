import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Moviepic from "../assets/img/movix_app.png";
import YouTubePic from "../assets/img/youtube_clone.png";
import TodoList from "../assets/img/Todo_List.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      title: "Movix-Appliation",
      imgUrl: Moviepic,
    },
    {
      title: "You-tube-clone",
      imgUrl: YouTubePic,
    },
    {
      title: "Todo-List",
      imgUrl: TodoList,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
