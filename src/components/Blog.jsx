/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Blog() {
  return (
    <div>
      <h2>Blog o proceni nekretnina</h2>
      <Container>
        <Row>
          <Col>
            {" "}
            <img
              src="/komparativ/img/blog/prva.jpg"
              alt="neka slika"
              className="blog-img"
            />
            <h3>Naslov nekog teksta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              consectetur totam, explicabo accusamus dolores ad blanditiis
              numquam, amet non quisquam reprehenderit! Provident, assumenda
              distinctio! Iste perspiciatis facere harum ab, dignissimos
              delectus rerum eaque provident aliquid tempora ut nobis eius
              consequatur maxime inventore? Nulla porro provident dolore iure
              autem. Voluptatum, cupiditate!
            </p>
          </Col>
          <Col>
            {" "}
            <img
              src="/komparativ/img/blog/druga.jpg"
              alt="neka slika"
              className="blog-img"
            />
            <h3>Naslov nekog teksta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              consectetur totam, explicabo accusamus dolores ad blanditiis
              numquam, amet non quisquam reprehenderit! Provident, assumenda
              distinctio! Iste perspiciatis facere harum ab, dignissimos
              delectus rerum eaque provident aliquid tempora ut nobis eius
              consequatur maxime inventore? Nulla porro provident dolore iure
              autem. Voluptatum, cupiditate!
            </p>
          </Col>
          <Col>
            {" "}
            <img
              src="/komparativ/img/blog/treca.jpg"
              alt="neka slika"
              className="blog-img"
            />
            <h3>Naslov nekog teksta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              consectetur totam, explicabo accusamus dolores ad blanditiis
              numquam, amet non quisquam reprehenderit! Provident, assumenda
              distinctio! Iste perspiciatis facere harum ab, dignissimos
              delectus rerum eaque provident aliquid tempora ut nobis eius
              consequatur maxime inventore? Nulla porro provident dolore iure
              autem. Voluptatum, cupiditate!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
