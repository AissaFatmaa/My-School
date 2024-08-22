import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addevent } from "../JS/eventSlice";
import { useDispatch } from "react-redux";
function AddEvent({ ping, setping }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newevent, setnewevent] = useState({
    image: "",
    name_event: "",
    Description: "",
    Date: "",
  });
  const dispatch = useDispatch();
  return (
    <>
      <button class="app-content-headerButton" onClick={handleShow}>
        Ajouter un événement
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un événement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer l'image de l'évenement"
                onChange={(e) =>
                  setnewevent({ ...newevent, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom de l'évenement</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer le nom de l'évenement"
                onChange={(e) =>
                  setnewevent({ ...newevent, name_event: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer la description de l'évenement"
                onChange={(e) =>
                  setnewevent({ ...newevent, Description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer la date de l'évenement"
                onChange={(e) =>
                  setnewevent({ ...newevent, Date: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addevent(newevent));
              setping(!ping);
              handleClose();
            }}
          >
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEvent;
