import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { edituser } from "../JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
function Edituser({ el, ping, setping }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    status: el?.status,
    classe: el?.classe,
    category: el?.category,
  });

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ width: "15px", fill: "yellow" }}
        >
          <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Editer {el?.name} {el?.lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div
                style={{
                  display: "flex",
                  width: "40%",
                  justifyContent: "space-around",
                  marginLeft: "30%",
                  margin: "10px 30%",
                }}
              >
                <>
                  Activé
                  <input
                    type="radio"
                    name="catego"
                    value="active"
                    onChange={(e) =>
                      setedited({ ...edited, status: e.target.value })
                    }
                  />
                </>
                <>
                  Desactivé
                  <input
                    type="radio"
                    name="catego"
                    value="disabled"
                    onChange={(e) =>
                      setedited({ ...edited, status: e.target.value })
                    }
                  />
                </>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "40%",
                  justifyContent: "space-around",
                  marginLeft: "30%",
                  margin: "10px 30%",
                }}
              >
                Classe:{" "}
                <select
                  onChange={(e) =>
                    setedited({ ...edited, classe: e.target.value })
                  }
                >
                  {" "}
                  <option></option>
                  <option value="1a">1A</option>
                   <option value="1b">1B</option>
                    <option value="1c">1C</option>
               <option value="2a">2A</option>
                   <option value="2b">2B</option>
                    <option value="2c">2C</option>
                      <option value="3a">3A</option>
                   <option value="3b">3B</option>
                    <option value="3c">3C</option>
                         <option value="4a">4A</option>
                   <option value="4b">4B</option>
                    <option value="4c">4C</option>
                       <option value="5a">5A</option>
                   <option value="5b">5B</option>
                    <option value="5c">5C</option>
                        <option value="6a">6A</option>
                   <option value="6b">6B</option>
                    <option value="6c">6C</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "40%",
                  justifyContent: "space-around",
                  marginLeft: "30%",
                  margin: "10px 30%",
                }}
              >
                Catégorie:{" "}
                <select
                  onChange={(e) =>
                    setedited({ ...edited, category: e.target.value })
                  }
                > <option></option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Professeur</option>
                  <option value="student">Élève</option>
                  <option value="inspector">Inspecteur</option>
                </select>
              </div>
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
              dispatch(edituser({ id: el?._id, edited }));
              setping(!ping);
              handleClose();
            }}
          >
            Editer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edituser;
