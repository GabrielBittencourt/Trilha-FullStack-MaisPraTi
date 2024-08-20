import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center texto">
        <Col md={8}>
          <h2>Sobre Mim</h2>
          <p>
            Sou um desenvolvedor web com experiência em React, JavaScript, e diversas tecnologias front-end e back-end.
            Meu objetivo é criar interfaces de usuário intuitivas e eficientes, sempre buscando melhorar minhas habilidades e aprender novas tecnologias.
          </p>
          <p>
            Tenho um forte interesse em desenvolvimento web, design responsivo e usabilidade. Estou sempre disposto a enfrentar novos desafios e contribuir para projetos inovadores.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
