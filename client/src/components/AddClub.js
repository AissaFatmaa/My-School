import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addclub } from "../JS/clubSlice";
import { useDispatch } from "react-redux";
function AddClub({ ping, setping }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newclub, setnewclub] = useState({
    image: "",
    name_club: "",
    teacher: "",
    level: "",
    Time: "",
    Capacity: "",
    Price: "",
  });
  const dispatch = useDispatch();
  return (
    <>
      <button class="app-content-headerButton" onClick={handleShow}>
        Ajouter Club
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Club</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image of club"
                onChange={(e) =>
                  setnewclub({ ...newclub, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom de Club</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer le nom du club"
                onChange={(e) =>
                  setnewclub({ ...newclub, name_club: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Professeur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer le nom de professeur"
                onChange={(e) =>
                  setnewclub({ ...newclub, teacher: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Niveau</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer le niveau"
                onChange={(e) =>
                  setnewclub({ ...newclub, level: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Horaire</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer les Horaires du club"
                onChange={(e) =>
                  setnewclub({ ...newclub, Time: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Capacité</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer la capcité du club"
                onChange={(e) =>
                  setnewclub({ ...newclub, Capacity: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer le prix du club"
                onChange={(e) =>
                  setnewclub({ ...newclub, Price: e.target.value })
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
              dispatch(addclub(newclub));
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

export default AddClub;
