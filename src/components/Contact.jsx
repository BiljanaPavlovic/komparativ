/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  return (
    <div>
      <h3>Kontakt</h3>
      <Container>
        <Row>
          <Col>
            <img
              src="/komparativ/img/contact.jpg"
              alt="telefon"
              className="contact-img"
            />
          </Col>
          <Col>
            <div className="kontakt-podaci">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, laboriosam.
              </p>
              <p>E-mail:</p>
              <p>Telefon</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
