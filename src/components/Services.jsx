/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Services() {
  return (
    <div>
      <h2>Usluge koje nudimo</h2>
      <Container>
        <Row>
          <Col>
            <img
              src="/img/procene.jpg"
              alt="procena"
              className="services-img"
            />
            <h3>Procene</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corporis. Tenetur quasi nemo voluptatem, expedita cum maiores
              reprehenderit mollitia vel dolorum consequatur nulla officiis
              cumque accusamus quas consequuntur exercitationem molestias,
              possimus magni, impedit suscipit explicabo doloremque delectus!
              Vero eos autem, quasi eveniet temporibus quae voluptates
              architecto, tenetur obcaecati, et maiores.
            </p>
          </Col>
          <Col>
            <img
              src="/img/consulting.jpg"
              alt="consulting"
              className="services-img"
            />
            <h3>Ipard konsalting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corporis. Tenetur quasi nemo voluptatem, expedita cum maiores
              reprehenderit mollitia vel dolorum consequatur nulla officiis
              cumque accusamus quas consequuntur exercitationem molestias,
              possimus magni, impedit suscipit explicabo doloremque delectus!
              Vero eos autem, quasi eveniet temporibus quae voluptates
              architecto, tenetur obcaecati, et maiores.
            </p>
          </Col>
          <Col>
            <img
              src="/img/poljoprivreda.jpg"
              alt="poljoprivreda"
              className="services-img"
            />
            <h3>Subvencije u poljoprivredi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corporis. Tenetur quasi nemo voluptatem, expedita cum maiores
              reprehenderit mollitia vel dolorum consequatur nulla officiis
              cumque accusamus quas consequuntur exercitationem molestias,
              possimus magni, impedit suscipit explicabo doloremque delectus!
              Vero eos autem, quasi eveniet temporibus quae voluptates
              architecto, tenetur obcaecati, et maiores.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
