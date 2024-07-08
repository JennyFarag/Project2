import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Forums.css'; 

const Forums = () => {
  return (
    <Container className="forums-page">
      <Row>
        <Col>
          <h1 className="section-title">Forums</h1>
          <p>Communicate with others in French, Spanish, and Italian to practice your conversational skills.</p>
          {/* Add forum functionality or embed a third-party forum service here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Forums;
