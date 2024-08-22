import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";
import PdfFile from "./pdfFile/PdfFile";
import axios from "axios";
import PdfComp from "./pdfFile/PdfComp";
import PDFmodal from "./pdfFile/PDFmodal";
import Form from 'react-bootstrap/Form';
import Examenpdf from "./pdfFile/Examenpdf";
import "./Validation.css"

function ValidationExamen({ping,setping}) {
    const [allImage, setAllImage] = useState(null);
    const [reload, setreload] = useState(false);
      const [pdfFile, setPdfFile] = useState(null);
  const user = useSelector((state) => state.user.user);
  const [section, setsection] = useState("submitted");
  const [text, settext] = useState("")
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    useEffect(() => {
    getPdf();
  }, [reload]);
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
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/PdfFile/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
    
  };
    const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`);
  };
  
  return (
    <div className="profilvalidation">
    { user?.category=="teacher"? <div class="padding">
        <div class="col-md-12">
          <div class="card">
            {" "}
           
            <div class="card-body little-profile text-center">
              <div class="pro-img">
                <img
                  src={user?.image}
                  alt="user"
                  style={{borderRadius:"50%", width:"50px", height:"50px"}}
                  
                />
              </div>
           
              <div style={{display:"flex", justifyContent:"flex-end", width:"189%",marginTop:"20px"}}>
   
            </div>
            <div style={{marginTop:"30px"}}>
              <button
                class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
                onClick={() => setsection("submitted")}
                style={{backgroundColor:"#9c0000", margin:"5px", border:"#9c0000"}}
              >
               Examens envoyés
              </button>
              <button
                class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
                onClick={() => setsection("approved")}
                                style={{backgroundColor:"#9c0000", margin:"5px", border:"#9c0000"}}
              >
                Examens approuvés
              </button>
              <button
                class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
                onClick={() => setsection("rejected")}
                                style={{backgroundColor:"#9c0000", margin:"5px", border:"#9c0000"}}
              >
                Examens rejétés
              </button>
              </div>
              <div class="row text-center m-t-20">
                {section == "submitted" ? <Examenpdf /> : 
                section=="approved"?
                 <div className="uploaded" style={{ marginTop: "50px" }}>
          <div
            className="output-div"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexWrap:"wrap"
            }}
          >
            {allImage == null
              ? ""
              : allImage.filter((data)=>data?.category=="exam" && data?.id_teacher==user?._id && data?.status=="approved").map((data) => {
                  return (
                    <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px", margin:"20px"}}>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"20px", fill:"green"}}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                      <h6><b>Titre:</b> {data.title}</h6>
                      <button
                        className="btn btn-danger"
                        style={{ margin: "12px" }}
                        onClick={() => {
                          deletePdf(data.pdf);
                          setreload(!reload);
                          alert("your file is deleted");
                        }}
                      >
                        Supprimer Pdf
                      </button>
                  <button style={{backgroundColor:"#9c0000", border:"#9c0000"}}
                        className="btn btn-primary"
                        onClick={() => showPdf(data.pdf)}
                       
                      >
                        Afficher Pdf
                      </button>
                   
                    </div>
                  );
                })}
          </div> <PdfComp pdfFile={pdfFile} style={{ width: "50%" }} />
        </div>:section=="rejected"?
         <div className="uploaded" style={{ marginTop: "50px" }}>
          <div
            className="output-div"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
               flexWrap:"wrap"
            }}
          >
            {allImage == null
              ? ""
              : allImage.filter((data)=>data.category=="exam" && data.id_teacher==user?._id && data.status=="rejected").map((data) => {
                  return (
                    <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px",margin:"20px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"30px", fill:"red"}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                      <h6><b>Titre:</b> {data.title}</h6>
                      <p><b>Message: </b>{data.feedback}</p>
                       <button
                        className="btn btn-danger"
                        style={{ margin: "12px" }}
                        onClick={() => {
                          deletePdf(data.pdf);
                          setreload(!reload);
                          alert("your file is deleted");
                        }}
                      >
                        Supprimer Pdf
                      </button>
                  <button
                        className="btn btn-primary"
                        onClick={() => showPdf(data.pdf)}
                      >
                        Afficher Pdf
                      </button>
                   
                    </div>
                  );
                })}
          </div> <PdfComp pdfFile={pdfFile} style={{ width: "50%" }} />
        </div>:null}
              </div>
            </div>
          </div>
        </div>
      </div>: 
      user?.category=="inspector"?<div class="padding">
        <div class="col-md-12">
          <div class="card">
         
            
            <div class="card-body little-profile text-center">
              <div class="pro-img">
                <img
                  src={user?.image}
                  alt="user"
                  style={{width:"60px", height:"60px"}}
                />
              </div>
           
              <div style={{display:"flex", justifyContent:"flex-end", width:"189%", marginTop:"46px"}}>
           
            </div>
              <button
                class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
                style={{backgroundColor:"#47dea9", border:"#47dea9", margin:"5px"}}
                onClick={() => setsection("submitted")}
              >
                Examens envoyés
              </button>
              <button
                class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
                 style={{backgroundColor:"#47dea9", border:"#47dea9", margin:"5px"}}
                onClick={() => setsection("approved")}
              >
                Examens validés
              </button>
              <button
                class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
                 style={{backgroundColor:"#47dea9", border:"#47dea9", margin:"5px"}}
                onClick={() => setsection("rejected")}
              >
                Examens non validés
              </button>
              <div class="row text-center m-t-20">
                <div style={{display:"flex", justifyContent:"center"}}>
                 <Form style={{width:"30%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Nom de professeur" onChange={(e)=>settext(e.target.value)} />
      
      </Form.Group></Form></div>
             
                {section == "submitted" ?  <div className="uploaded" style={{ marginTop: "50px" }}>
          <div
            className="output-div"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexWrap:"wrap"
            }}
          >
            {allImage == null
              ? ""
              : allImage.filter((data)=>data.category=="exam" && data.status=="submitted" && data.teacher.toLowerCase().includes(text.toLowerCase())).map((data) => {
                  return (
                    <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px", margin:"20px"}}>
                     
                      <h5>Titre: {data.title}</h5>
                      <h6>Professeur: {data.teacher}</h6>
                       <button
                        className="btn btn-primary"
                        onClick={() => showPdf(data.pdf)}
                        style={{margin:"5px"}}
                      >
                       Afficher Pdf
                      </button>
                     <PDFmodal data={data} ping={ping} setping={setping} reload={reload} setreload={setreload} />
                 
                   
                    </div>
                  );
                })}
          </div> <PdfComp pdfFile={pdfFile} style={{ width: "50%" }} />
        </div> : 
                section=="approved"?
                 <div className="uploaded" style={{ marginTop: "50px" }}>
          <div
            className="output-div"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {allImage == null
              ? ""
              : allImage.filter((data)=>data.category=="exam"  && data.status=="approved" && data.teacher.toLowerCase().includes(text.toLowerCase())).map((data) => {
                  return (
                    <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px"}}>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"20px", fill:"green"}}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                      <h6>Titre: {data.title}</h6>
                    
                      <h6>Professeur: {data.teacher}</h6>
                  <button
                        className="btn btn-primary"
                        onClick={() => showPdf(data.pdf)}
                      >
                        Afficher Pdf
                      </button>
                   
                    </div>
                  );
                })}
          </div> <PdfComp pdfFile={pdfFile} style={{ width: "50%" }} />
        </div>:section=="rejected"?
         <div className="uploaded" style={{ marginTop: "50px" }}>
          <div
            className="output-div"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {allImage == null
              ? ""
              : allImage.filter((data)=>data.category=="exam" && data.status=="rejected" && data.teacher.toLowerCase().includes(text.toLowerCase())).map((data) => {
                  return (
                    <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"30px", fill:"red"}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                      <h6>Titre: {data.title}</h6>
                   
                      <h6>Professeur: {data.teacher}</h6>
                      <p>Message: {data.feedback}</p>
                  <button
                        className="btn btn-primary"
                        onClick={() => showPdf(data.pdf)}
                      >
                        Afficher Pdf
                      </button>
                   
                    </div>
                  );
                })}
          </div> <PdfComp pdfFile={pdfFile} style={{ width: "50%" }} />
        </div>:null}
              </div>
            </div>
          </div>
        </div>
      </div>:
     null}
    </div>
  );
}

export default ValidationExamen;

