// Card.js
import React, { useState } from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function CustomCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cards = [1, 2, 3];

  return (
    <>
      <Row className="m-3">
        {cards.map((card, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`https://via.placeholder.com/150?text=Card+${card}`} />
              <Card.Body>
                <Card.Title>Card {card}</Card.Title>
                <Card.Text>This is card number {card}.</Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Open Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a modal from the card component.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomCard;
