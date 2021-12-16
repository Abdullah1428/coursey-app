import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeedbackModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.course.review}</p>
      </Modal.Body>
      <Modal.Footer>
        <Link
          to={{
            pathname: `/course/${props.course.course}`,
            state: {
              path: props.path && props.path,
            },
          }}>
          Course Details
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default FeedbackModal;
