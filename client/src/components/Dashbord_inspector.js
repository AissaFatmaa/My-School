import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PdfComp from "./pdfFile/PdfComp";
import axios from "axios";

import PDFmodal from "./pdfFile/PDFmodal";
import Form from 'react-bootstrap/Form';

import ValidationExamen from "./ValidationExamen";
import Docadministratif from "./pdfFile/Docadministratif";
import AdminPdfComp from "./pdfFile/AdminPdfComp";



function Dashbord_inspector({ ping, setping }) {
  const [reload, setreload] = useState(false);
    useEffect(() => {
    getPdf();
  }, [reload]);
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

    const [pdfFile, setPdfFile] = useState(null);
      const [allImage, setAllImage] = useState(null);

  const user = useSelector((state) => state.user?.user);
  const users = useSelector((state) => state.user?.userList);
  const dispatch = useDispatch();

   const [tasks, settasks] = useState("users");
  const [text, settext] = useState("");
  const [edited, setedited] = useState({
    abs: user?.abs,
    nb_abs: user?.nb_abs,
  });
      const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`);
  };
   const handleNotify = (email) => {
    window.location.href = `mailto:${email}`;
  };
  const [verif, setverif] = useState("present");
  return (
    <div class="dashbord">
      <div class="app-container" style={{ minHeight: "560px" }}>
        <div class="sidebar">
          <div class="sidebar-header">
            <div class="app-icon">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M507.606 371.054a187.217 187.217 0 00-23.051-19.606c-17.316 19.999-37.648 36.808-60.572 50.041-35.508 20.505-75.893 31.452-116.875 31.711 21.762 8.776 45.224 13.38 69.396 13.38 49.524 0 96.084-19.286 131.103-54.305a15 15 0 004.394-10.606 15.028 15.028 0 00-4.395-10.615zM27.445 351.448a187.392 187.392 0 00-23.051 19.606C1.581 373.868 0 377.691 0 381.669s1.581 7.793 4.394 10.606c35.019 35.019 81.579 54.305 131.103 54.305 24.172 0 47.634-4.604 69.396-13.38-40.985-.259-81.367-11.206-116.879-31.713-22.922-13.231-43.254-30.04-60.569-50.039zM103.015 375.508c24.937 14.4 53.928 24.056 84.837 26.854-53.409-29.561-82.274-70.602-95.861-94.135-14.942-25.878-25.041-53.917-30.063-83.421-14.921.64-29.775 2.868-44.227 6.709-6.6 1.576-11.507 7.517-11.507 14.599 0 1.312.172 2.618.512 3.885 15.32 57.142 52.726 100.35 96.309 125.509zM324.148 402.362c30.908-2.799 59.9-12.454 84.837-26.854 43.583-25.159 80.989-68.367 96.31-125.508.34-1.267.512-2.573.512-3.885 0-7.082-4.907-13.023-11.507-14.599-14.452-3.841-29.306-6.07-44.227-6.709-5.022 29.504-15.121 57.543-30.063 83.421-13.588 23.533-42.419 64.554-95.862 94.134zM187.301 366.948c-15.157-24.483-38.696-71.48-38.696-135.903 0-32.646 6.043-64.401 17.945-94.529-16.394-9.351-33.972-16.623-52.273-21.525-8.004-2.142-16.225 2.604-18.37 10.605-16.372 61.078-4.825 121.063 22.064 167.631 16.325 28.275 39.769 54.111 69.33 73.721zM324.684 366.957c29.568-19.611 53.017-45.451 69.344-73.73 26.889-46.569 38.436-106.553 22.064-167.631-2.145-8.001-10.366-12.748-18.37-10.605-18.304 4.902-35.883 12.176-52.279 21.529 11.9 30.126 17.943 61.88 17.943 94.525.001 64.478-23.58 111.488-38.702 135.912zM266.606 69.813c-2.813-2.813-6.637-4.394-10.615-4.394a15 15 0 00-10.606 4.394c-39.289 39.289-66.78 96.005-66.78 161.231 0 65.256 27.522 121.974 66.78 161.231 2.813 2.813 6.637 4.394 10.615 4.394s7.793-1.581 10.606-4.394c39.248-39.247 66.78-95.96 66.78-161.231.001-65.256-27.511-121.964-66.78-161.231z"
                />
              </svg>
            </div>
          </div>
          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <a href="#">
                <svg
                  style={{ width: "18px", height: "18px", fill: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
                <button
                  onClick={() => settasks("users")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <span>Liste des enseignants</span>
                </button>
              </a>
            </li>
          
                <li class="sidebar-list-item active">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"/></svg>
                <button
                  onClick={() => settasks("validation")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  <span>Validation Examens</span>
                </button>
              </a>
            </li>
          <li class="sidebar-list-item">
              <a href="#">
                <svg
                  style={{ width: "18px", height: "18px", fill: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <button
                  onClick={() => settasks("administratif")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <span>Dossier administratif</span>
                </button>
              </a>
            </li>
          
          </ul>
          <div class="account-info">
            <div class="account-info-picture">
              <img src={user?.image} alt="Account" />
            </div>
            <div class="account-info-name">
              {user?.name} {user?.lastname}
            </div>
            <button class="account-info-more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-more-horizontal"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>
        {/* *********** * tasks *************** */}
        {tasks == "users" ? (
          <div class="app-content" style={{ backgroundColor: "white" }}>
            <div class="app-content-header">
              <h1 class="app-content-headerText" style={{ color: "black" }}>
                Espace Inspecteur
              </h1>

              {/* <button class="app-content-headerButton">Add Product</button> */}
            </div>
            
            <div className="profilvalidation" style={{marginTop:"30px"}}>
    <div class="padding">
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
               <div class="app-content-actions">
              <input
                class="search-bar"
                placeholder="Rechercher..."
                type="text"
                onChange={(e) => settext(e.target.value)}
                style={{ backgroundColor: "white", color: "black" }}
              />
         
            </div>
              <div style={{display:"flex", justifyContent:"flex-end", width:"189%",marginTop:"20px"}}>
   
            </div>
          <div
              class="products-area-wrapper tableView"
              style={{ height: "650px" }}
            >
              <table
                style={{ fontSize: "12px", width: "100%", color: "white", textAlign:"center" }}
              >
                <thead
                  style={{
                    backgroundColor: "#737895",
                    height: "50px",
                    color: "white",
                  }}
                >
                  <tr>
                    <th></th>
                    <th>Matricule</th>
                    <th>Nom et Prénom</th>
                    <th>e-mail</th>
                    <th>Classe</th>
                
                     <th>Notifier</th>
                  </tr>
                </thead>
                 <tbody style={{ color: "black" }}>
                  {users
                    ?.filter(
                      (el) =>
                        el.category == "teacher" &&
                        el.name.toLowerCase().includes(text.toLowerCase())
                       
                    )
                    .map((el) => (
                      <tr>
                        <td>
                          <img
                            src={el?.image}
                            style={{ width: "25px", borderRadius: "50%" }}
                          />
                        </td>
                        <td>{el?.matricule}</td>
                        <td>
                          {el?.name} {el?.lastname}
                        </td>
                        <td> {el?.email}</td>

                        <td>{el?.classe}</td>
                      

                        <td style={{ textAlign: "center" }}>
                         <button style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }} onClick={() => handleNotify(el?.email)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              style={{ width: "15px", fill: "green" }}
                            >
                              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                            </svg></button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
   
   
    </div>
          
        
            {/* ****************tables********* */}
  
          </div>
          
          
          
        )  : tasks == "validation" ? (
          <div class="app-content" style={{ backgroundColor: "white" }}>
        <h1 class="app-content-headerText" style={{ color: "black" }}>
                Validation Examens
              </h1>    
            <div class="app-content-actions"></div>
           <ValidationExamen/>
       
          </div>
        ) : tasks == "administratif" ? (
            <div class="app-content" style={{ backgroundColor: "white" }}>
            <div class="app-content-header">
              <h1 class="app-content-headerText" style={{ color: "black" }}>Dossier Administratif</h1>
            </div>
            <div class="app-content-actions"></div>
            {/* ****************tables********* */}
                <div className="profilvalidation">
    <div class="padding">
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
                 <div style={{display:"flex", justifyContent:"center"}}>
                 <Form style={{width:"30%", marginTop:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Nom de professeur" onChange={(e)=>settext(e.target.value)} />
      
      </Form.Group></Form></div>
           <div className="uploaded" style={{ marginTop: "20px" }}>
       
        <div
          className="output-div"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap:"wrap",
           
          }}
        >
          {allImage == null
            ? ""
            : allImage.filter((el)=>el.category=="doc_teacher" && el.type_doc=="doc_administratif").map((data) => {
                return (
                    <>
                  <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px", margin:"20px"}}>
                    <h6 style={{color:"black"}}>Titre: {data.title}</h6>
                  
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Afficher Pdf
                    </button>
                  </div></>
                );
              })}
        </div>
      </div>
      
      
      <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }}  />
            </div>
          </div>
        </div>
      </div>
   
   
    </div>
    
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dashbord_inspector;
