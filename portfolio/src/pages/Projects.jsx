import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Projects() {
  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem('projects')) || []);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (projectName.trim()) {
      setProjects([...projects, projectName]);
      setProjectName('');
    }
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <Container className="py-5">
      <h2 className='texto'>Meus Projetos</h2>
      <Form className="mb-3">
        <Form.Group>
          <Form.Control 
            type="text" 
            value={projectName} 
            onChange={(e) => setProjectName(e.target.value)} 
            placeholder="Nome do Projeto" 
          />
        </Form.Group>
        <Button variant="primary" onClick={addProject} className="mt-2">
          Adicionar Projeto
        </Button>
      </Form>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-3">
            <div className="card p-3">
              <h4>{project}</h4>
              <Button variant="danger" onClick={() => deleteProject(index)}>
                Excluir
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
