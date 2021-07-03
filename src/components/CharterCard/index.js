import React from 'react'
import { Card } from 'react-bootstrap';

function CharterCart ({ charter }) {
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={charter.image} />
        <Card.Body>
          <Card.Title>{charter.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default CharterCart