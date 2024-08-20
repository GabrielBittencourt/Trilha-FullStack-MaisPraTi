import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Contato</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Sua mensagem"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar Mensagem
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
