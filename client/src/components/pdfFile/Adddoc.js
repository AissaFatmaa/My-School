
import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import { useSelector } from "react-redux";
import AdminPdfComp from "./AdminPdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
function Adddoc({reload, setreload}) {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const user = useSelector((state) => state.user?.user);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [teacher, setteacher] = useState(user?.name + " " + user?.lastname);
  const [id_teacher, setid_teacher] = useState(user?._id);
  const [category, setcategory] = useState("doc_teacher");
  const [status, setstatus] = useState("submitted");
  const [date, setdate] = useState(new Date());
  const [classe, setclasse] = useState("all");
  const [allImage, setAllImage] = useState(null);
 
const [type_doc, settype_doc] = useState("doc")
  const [pdfFile, setPdfFile] = useState(null);


  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/PdfFile/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
  const deletePdf = async (filename) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/PdfFile/delete-file/${filename}`
      );
      if (result.data.status === "ok") {
        alert("PDF file deleted successfully!");
        getPdf();
        
      }
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("teacher", teacher);
    formData.append("id_teacher", id_teacher);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("date", date);
    formData.append("classe", classe);
      formData.append("type_doc", type_doc);
    console.log(title, file, teacher, category, status, date, classe, type_doc);


    const result = await axios.post(
      "http://localhost:5000/PdfFile/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Téléchargement réussi!!!");
      getPdf();
      setreload(!reload)
    }
  };

  return (
     <>
      <Button variant="primary" onClick={handleShow} style={{width:"43px"}}>
       +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un document</Modal.Title>
        </Modal.Header>
        <Modal.Body>

              <div className="File" style={{ color: "white" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form className="formStyle" onSubmit={submitImage}>
          <h5>Ajouter un document</h5>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
            download
          />

          <br />
          <input
            type="file"
            class="form-control"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <div style={{display:"flex", width:"100%", justifyContent:"space-around", marginBottom:"30px"}}>
            <div>
        <h6>classe:</h6>
         <select  onChange={(e) => setclasse(e.target.value)} style={{width:"100%"}}>
          <option selected>all</option>
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
        <div>
          <h6>Type_doc</h6>
          <select onChange={(e) => settype_doc(e.target.value)} >
            <option></option>
              <option value="journal">journal de classe</option>
          <option value="fichepeda">fiche pédagogique</option>
            <option value="planification">Planification unitaire</option>
            
         

          </select>
          </div>
          </div>
          
          <br />
          <button class="btn btn-primary"  onClick={()=>{submitImage();setreload(!reload)}}  >
            Ajouter
          </button>
        </form>
      </div>
     
      
      
      <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} classe={classe} />
    </div>
        </Modal.Body>
   
      </Modal>
    </>
  )
}

export default Adddoc