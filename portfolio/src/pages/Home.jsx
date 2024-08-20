import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center texto flex-column">
        <Col md={12}>
          <h1>Bem-vindo ao Meu Portfólio</h1>
          <p>Este é um exemplo de site portfólio construído com React, Bootstrap e Flexbox.</p>
        </Col>
        <Col md={12}>
          {/* Aqui você pode adicionar uma imagem ou um carrossel */}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
