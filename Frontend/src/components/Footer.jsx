// import React from "react";
// import { Row, Col, Container } from "react-bootstrap";
// import MailchimpForm from "./MailchimpForm";
// // import logo from "../assets/img/logo.svg";
// import git from "../assets/img/git.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <MailchimpForm />
//           {/* <Col sm={6}>
//             <img src={logo} alt="logo" />
//           </Col> */}
//           <Col sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="">
//                 <img src={navIcon1} />
//               </a>
//               <a href="">
//                 <img src={git} />
//               </a>
//             </div>
//             <p>CopyRight 2023. All Right Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import git from "../assets/img/git.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end"
            style={{ marginLeft: "7%" }}
          >
            <p className="display-flex align-items-center justify-content-center">CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
