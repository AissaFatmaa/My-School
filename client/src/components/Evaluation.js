
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
import List from "./ListStudents/List";
function Evaluation({ping, setping}) {
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
      <List ping={ping} setping={setping}/>
            </div>
          </div>
        </div>
      </div>
   
   
    </div>
  )
}

export default Evaluation