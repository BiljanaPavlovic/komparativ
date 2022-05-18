/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slajder/prva.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Komparativ</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slajder/druga.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Komparativ</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slajder/treca.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Komparativ</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          <Col>
            <img
              src="img/header/team.jpg"
              alt="o nama"
              className="header-img"
            />
            <h3>O nama</h3>
          </Col>
          <Col>
            <img
              src="img/header/services.jpg"
              alt="usluge"
              className="header-img"
            />
            <h3>Usluge</h3>
          </Col>
          <Col>
            <img src="img/header/blog.jpg" alt="blog" className="header-img" />
            <h3>Blog</h3>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}
