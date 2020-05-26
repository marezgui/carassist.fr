import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';

function MyModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Prix - 2€/Km
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <h4>
          <Alert variant={"primary"}>{props.price} €</Alert>
        </h4>
        <h4>
          <Button href="tel:+33766485866"> 07 66 48 58 66 </Button>
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Retour</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;