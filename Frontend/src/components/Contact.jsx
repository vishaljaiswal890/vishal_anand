import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "./Contact.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (cateogory, value) => {
    setFormDetails({
      ...formDetails,
      [cateogory]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if email is valid
    if (!emailRegex.test(formDetails.email)) {
      toast.error("Please enter a valid email address");
      // setStatus({ success: false, message: "Please enter a valid email address" });
      return;
    }
  
    setButtonText("Sending...");
    
    try {
      const response = await axios.post("/contact", formDetails);
  
      if (response.status === 200) {
        setFormDetails(formInitialDetails);
        toast.success("Message sent successfully");
        // setStatus({ success: true, message: "Message sent successfully" });
      } else if (response.status === 400) {
        toast.error("Invalid request. Please check your input.");
        // setStatus({ success: false, message: "Invalid request. Please check your input." });
      } else {
        toast.error("Server error. Please try again later.");
        // setStatus({ success: false, message: "Server error. Please try again later." });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
      // setStatus({ success: false, message: "Failed to send message. Please try again later." });
    }
  
    setButtonText("Send");
  };
  
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="COntact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6}>
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} >
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} >
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Mobile No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
