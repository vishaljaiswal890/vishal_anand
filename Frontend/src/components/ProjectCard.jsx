import React from "react";
import { Col } from "react-bootstrap";
const ProjectCard = ({ title, description, onClick, imgUrl }) => {
  return (
    <Col
      sm={6}
      md={4}
      onClick={() => {
        if (title === "Movix-Appliation") {
          window.open("https://movie-application-theta.vercel.app/", "_blank");
        } else if (title === "You-tube-clone") {
          window.open("https://you-tube-clone-brown.vercel.app/", "_blank");
        } else{
          window.open("https://todo-list-app-ten-xi.vercel.app/", "_blank");
        }
      }}
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
        <span>{description}</span>
      </div>
    </Col>
  );
};

export default ProjectCard;
