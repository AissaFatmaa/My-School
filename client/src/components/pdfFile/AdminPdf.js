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

function AdminPdf() {
  const user = useSelector((state) => state.user?.user);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [teacher, setteacher] = useState(user?.name + " " + user?.lastname);
  const [id_teacher, setid_teacher] = useState(user?._id);
  const [category, setcategory] = useState("doc_admin");
  const [status, setstatus] = useState("submitted");
  const [date, setdate] = useState(new Date());
  const [classe, setclasse] = useState("all");
  const [allImage, setAllImage] = useState(null);
 
const [type_doc, settype_doc] = useState("emploi")
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
    <div className="File" style={{ color: "white" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form className="formStyle" onSubmit={submitImage}>
          <h5>Ajouter un document</h5>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Nom de fichier"
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
          <option selected>Tous</option>
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
            <option value="emploi">Emploi de temps</option>
          <option value="calendrier">calendrier pédaogique</option>
          </select>
          </div>
          </div>
          
          <br />
          <button class="btn btn-primary" type="submit">
            Ajouter
          </button>
        </form>
      </div>
      <div className="uploaded" style={{ marginTop: "20px" }}>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button style={{backgroundColor:"#c3abab", border:"none", padding:"10px", borderRadius:"10px", color:"white", margin:"20px"}} onClick={()=>settype_doc("emploi")}>Emploi de temps</button>
        <button style={{backgroundColor:"grey", border:"none", padding:"10px", borderRadius:"10px", color:"white", margin:"20px"}} onClick={()=>settype_doc("calendrier")}>Calendrier pédaogique</button>
    </div>
        <div
          className="output-div"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap:"wrap",
            marginTop:"50px"
          }}
        >
          {allImage == null
            ? ""
            : allImage.filter((el)=>el.category=="doc_admin" && el.type_doc==type_doc).map((data) => {
                return (
                    <>
                  <div className="inner-div">
                    <h6>Titre: {data.title}</h6>
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
                  </div></>
                );
              })}
        </div>
      </div>
      
      
      <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} classe={classe} />
    </div>
   
  );
}

export default AdminPdf;
