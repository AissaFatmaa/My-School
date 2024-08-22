import React from 'react'
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function PDFmodal({data, ping, setping, reload, setreload}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      const editPdf = async ({ id, edit }) => {
    try {
      let result = await axios.put(
       `http://localhost:5000/PdfFile/${id}`, edit);
      
    return result;
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };
  const [edit, setedit] = useState(
  {  status:data?.status, feedback:data?.feedback}
  )
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        verifier
      </Button>

      <Modal show={show} onHide={handleClose}  size='xl'>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"24px"}}>Formulaire de validation
          <h5>{` ${data.teacher}: ${data.title}`}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body > 
       <div style={{display:"flex", justifyContent:"space-around"}}>
        <Form style={{border:"1px dotted blue", padding:"10px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"14px"}}>1- L'en-tête inclut:</Form.Label>
       <table style={{width:"100%", fontSize:"14px"}}>
        <tr>
          <td>Nom & prénom d'enseignant</td>
           <td> <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td>
        </tr>
          <tr>
          <td>Niveau</td>
           <td> <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td>
        </tr>
          <tr>
          <td>Année Scolaire</td>
           <td> <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td>
        </tr>
          <tr>
          <td>Nom École</td>
           <td> <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td>
        </tr>
             <tr>
          <td>Libellé dévoir</td>
           <td> <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td>
        </tr>
                 <tr>
          <td>Matière</td>
           <td> <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td>
        </tr>
       </table>
      
        
      </Form.Group>
      </Form>
    
      <Form style={{border:"1px dotted blue", padding:"10px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"14px", }}>En ce qui concerne l'examen de mathématiques :</Form.Label>
       <table style={{width:"100%", fontSize:"14px"}}>
        <tr>
          <td >1- L'examen est divisé en deux parties:</td></tr>
          <tr>
            <td colSpan="2">
            <table style={{width:"100%"}}>
              <tr>
              <td >- Calcul mental (4 points)</td>
              <td style={{display:"flex", justifyContent:"flex-end"}}><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td></tr>
            <tr>
              <td >- Mathématiques (16 points)</td>
              <td style={{display:"flex", justifyContent:"flex-end"}}><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td></tr>

       </table>



      </td>
           
        </tr>
    <tr>
          <td colspan="2">2- La partie Mathématiques est divisée en deux sections :
            <table style={{width:"100%", fontSize:"14px"}}>
              <tr>
              <td>- Critères du minimum requis (C1/C2/C3/C4) (12 points)</td>
              <td style={{display:"flex", justifyContent:"flex-end"}}><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td></tr>
            <tr>
              <td>- Critère d'excellence (4 points)</td>
              <td style={{display:"flex", justifyContent:"flex-end"}}><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td></tr>

       </table>


</td>
      
           
        </tr>
        <tr><td>3- Le critère du minimum requis (-++) représente 2/3 du nombre attribué.</td><td><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td></tr>
          <tr><td>4- Tous les critères représentent des multiples de trois.</td><td><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      /></td></tr>
       </table>
      
        
      </Form.Group>
      </Form>
      </div>
        <FloatingLabel controlId="floatingTextarea2" label="Message" style={{marginTop:"20px"}}>
        <Form.Control
          as="textarea"
          placeholder="Message"
          style={{ height: '100px', fontSize:"14px" }}
          onChange={(e)=>setedit({...edit, feedback:e.target.value})}
        />
      </FloatingLabel>
       </Modal.Body>
        <Modal.Footer>
         <div style={{fontSize:"16px", color:"black", fontWeight:"bolder", marginRight:"300px"}}> Validé <input type="radio" name="res" style={{marginRight:"20px"}}  onChange={()=>setedit({...edit, status:"approved"})}/> Non Validé <input type="radio" name="res" onChange={()=>setedit({...edit, status:"rejected"})}/></div>
          <Button variant="secondary" onClick={handleClose}>
           Annuler
          </Button>
          <Button variant="primary"  style={{backgroundColor:"#9c0000", border:"#9c0000"}} onClick={()=>{editPdf({id:data?._id, edit});  setreload(!reload);; handleClose()}}>
           Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PDFmodal