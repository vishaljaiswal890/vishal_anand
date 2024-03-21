import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

const CallToAction = ({ text, action, icon }) => {
  return (
    <div className="call-to-action" onClick={action}>
      <span className="text">{text}</span>
      {icon ? <div className="icon">{icon}</div> : <ArrowRightCircle />}
    </div>
  );
};

export default CallToAction;
