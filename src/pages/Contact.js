import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Container className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Home &gt; Contact Us</p>
      </div>
      <div className="contact-content">
        <Row>
          <Col md={6}>
            <h2>Get In Touch With Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam quis nostrud exercitation ullamco.
            </p>
            <div className="contact-info">
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>613-989-0007</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>languageproAcademy@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form className="contact-form">
              <Form.Group controlId="formName" className="form-group">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="form-group">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formSubject" className="form-group">
                <Form.Label>Your Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter your subject" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="form-group">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
