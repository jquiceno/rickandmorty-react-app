import React from 'react'
import { Container, Row } from 'react-bootstrap';

function Home ({ showNewUser = false }) {
  return (
    <>
      <Container fluid>
        <Row>
          <h1>Home</h1>
        </Row>
      </Container>
    </>
  );
}

export default Home