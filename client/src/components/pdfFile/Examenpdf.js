import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import { useSelector } from "react-redux";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Examenpdf() {
  const user = useSelector((state) => state.user.user);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const teacher=user?.name+" "+user?.lastname;
  const id_teacher=user?._id;
 const category="exam";
 const date=new Date();
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
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
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("teacher", teacher);
    formData.append("id_teacher", id_teacher);
    formData.append("category", category);
    formData.append("date", date);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:5000/PdfFile/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        width: "100%",
      }}
    >
      <div className="File" style={{ color: "white" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form className="formStyle" onSubmit={submitImage}>
            <h5>Upload Exam</h5>
         
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
            <button class="btn btn-primary" type="submit" style={{backgroundColor:"#06125e", border:"#06125e", padding:"10px"}}>
              Envoyer
            </button>
          </form>
        </div>
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
              : allImage.filter((data)=>data.category=="exam" && data.id_teacher==user?._id && data?.status=="submitted").map((data) => {
                  return (
                    <div className="inner-div" style={{backgroundColor:"#ebeff0", padding:"20px", borderRadius:"20px",margin:"20px"}}>
                      <h6 style={{color:"black"}}><b>Titre:</b> {data.title}</h6>
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
                       style={{backgroundColor:"#9c0000", border:"#9c0000"}}
                        className="btn btn-primary"
                        onClick={() => showPdf(data.pdf)}
                      >
                        Afficher Pdf
                      </button>
                    </div>
                  );
                })}
          </div>
        </div>
      <PdfComp pdfFile={pdfFile} style={{ width: "50%" }} /> 
      </div>
    </div>
  );
}

export default Examenpdf;
