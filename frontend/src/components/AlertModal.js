import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertModal = (props) => {
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {' '}
          {props.variant === 'success' ? (
            <i class='fas fa-check-circle text-success'></i>
          ) : (
            <i class='fas fa-exclamation-circle text-danger'></i>
          )}{' '}
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
      {props.logout && (
        <Modal.Footer>
          <Button onClick={() => props.cancel()} variant='secondary'>
            No
          </Button>
          <Button onClick={() => props.logout()} variant='danger'>
            YES
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default AlertModal;
