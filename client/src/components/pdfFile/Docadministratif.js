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

function Docadministratif() {
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
 
const [type_doc, settype_doc] = useState("doc_administratif")
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
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`);
  };
  return (
    <div className="File" style={{ color: "white",marginTop:"20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form className="formStyle" onSubmit={submitImage}>
          {/* <h5>Ajouter</h5> */}
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Titre"
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
       
          </div>
          
          <br />
          <button class="btn btn-primary" type="submit" style={{    marginTop: "-85px"}}>
            Ajouter
          </button>
        </form>
      </div>
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
                      className="btn btn-danger"
                      style={{ margin: "12px" }}
                      onClick={() => {
                        deletePdf(data.pdf);
                        setreload(!reload);
                        alert("ton document est supprimé");
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
                  </div></>
                );
              })}
        </div>
      </div>
      
      
      <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} classe={classe} />
    </div>
   
  );
}

export default Docadministratif;
