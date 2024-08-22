import React, { useEffect, useState } from 'react'
import "./espaceEleve.css"
import { useSelector } from 'react-redux';
import AdminPdfComp from './pdfFile/AdminPdfComp';
import axios from 'axios';
function Espace_eleve() {
    const user = useSelector((state) => state.user?.user);
     const [reload, setreload] = useState(false);
    useEffect(() => {
    getPdf();
  }, [reload]);
   const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/PdfFile/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
    const [task, settask] = useState("all")
     const [allImage, setAllImage] = useState(null);
         const [pdfFile, setPdfFile] = useState(null);

  const showPdf = (pdf) => {
    const pdfUrl = `http://localhost:5000/files/${pdf}`;
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='espace'><>
  {/* For demo purpose */}

<div className="container mt-5 mb-5">
  <div className="row no-gutters" style={{height:"430px"}}>
    <div className="col-md-4 col-lg-4">
      <img style={{objectFit:"cover"}} src="https://cdn.5280.com/2018/10/students-reading_peopleimages-getty-images-960x641.jpg" />
    </div>
    <div className="col-md-8 col-lg-8">
   { task=="all"? 
     <div className="d-flex flex-column" style={{width:"817px"}}>
        <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
          <h3 className="display-5">{user?.name} {user?.lastname}</h3>
          <i className="fa fa-facebook" />
          <i className="fa fa-google" />
          <i className="fa fa-youtube-play" />
          <i className="fa fa-dribbble" />
          <i className="fa fa-linkedin" />
        </div>
        <div className="p-3 bg-black text-white">
          <h6>Élève à {user?.classe.toUpperCase()}</h6>
        </div>
        <div className="d-flex flex-row text-white">
      <div className="p-4 bg-primary text-center skill-block" >
          <button onClick={()=>settask("cours")} style={{backgroundColor:"transparent", border:"none", color:"white"}}>   <h4>Cours</h4></button>
       
          </div>
          <div className="p-3 bg-success text-center skill-block">
          <button onClick={()=>settask("devoirs")} style={{backgroundColor:"transparent", border:"none", color:"white"}}> <h4>Devoirs</h4></button> 
        
          </div>
          <div className="p-3 bg-warning text-center skill-block" >
         <button onClick={()=>settask("emploi")} style={{backgroundColor:"transparent", border:"none", color:"white"}}><h4>Emploi de Temps</h4></button> 
         
          </div>
          <div className="p-3 bg-danger text-center skill-block">
            <button onClick={()=>settask("autre")} style={{backgroundColor:"transparent", border:"none", color:"white"}}>  <h4>Autres Documents</h4></button> 
       
          </div>
        </div>
      </div>:
       task=="cours"?
         <div className="col-md-8 col-lg-8">
      <div className="d-flex flex-column" style={{ width: "817px" }}>
        <div className="d-flex flex-row text-white"></div>
        <div className="p-3 bg-grey text-white" style={{ height: "430px" }}>
          <div style={{ height: "60px", display: "flex" }}>
            <div className="p-3 bg-primary text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("cours")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Cours</h4>
              </button>
            </div>
            <div className="p-3 bg-success text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("devoirs")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Devoirs</h4>
              </button>
            </div>
            <div className="p-3 bg-warning text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("emploi")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Emploi de Temps</h4>
              </button>
            </div>
            <div className="p-3 bg-danger text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("autre")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Autres Documents</h4>
              </button>
            </div>
          </div>
          <h4 style={{ color: "black" }}>Liste de cours</h4>
          {/* here */}
          <div className="uploaded" style={{ marginTop: "20px" }}>
            <div
              className="output-div"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexWrap: "wrap",
               
                maxHeight: "250px", // Adjust the max height as needed
                overflowY: "auto"
              }}
            >
              {allImage == null ? "" :
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>Titre</th>
                      <th style={{textAlign:"center"}}>Classe</th>
                      <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allImage.filter((el) => el.category === "doc_teacher_scolaire" && el.type_doc === "cours" && el.classe === user.classe).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Afficher Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
          {/* <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} /> */}
        </div>
      </div>
    </div> : 
    task=="devoirs"?
        <div className="col-md-8 col-lg-8">
      <div className="d-flex flex-column" style={{ width: "817px" }}>
        <div className="d-flex flex-row text-white"></div>
        <div className="p-3 bg-grey text-white" style={{ height: "430px" }}>
          <div style={{ height: "60px", display: "flex" }}>
            <div className="p-3 bg-primary text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("cours")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Cours</h4>
              </button>
            </div>
            <div className="p-3 bg-success text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("devoirs")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Devoirs</h4>
              </button>
            </div>
            <div className="p-3 bg-warning text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("emploi")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Emploi de Temps</h4>
              </button>
            </div>
            <div className="p-3 bg-danger text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("autre")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Autres Documents</h4>
              </button>
            </div>
          </div>
          <h4 style={{ color: "black" }}>Liste de Dévoirs</h4>
          {/* here */}
          <div className="uploaded" style={{ marginTop: "20px" }}>
            <div
              className="output-div"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexWrap: "wrap",
               
                maxHeight: "250px", // Adjust the max height as needed
                overflowY: "auto"
              }}
            >
              {allImage == null ? "" :
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>Titre</th>
                      <th style={{textAlign:"center"}}>Classe</th>
                      <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allImage.filter((el) => el.category === "doc_teacher_scolaire" && el.type_doc === "devoir" && el.classe === user.classe).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Afficher Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
          {/* <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} /> */}
        </div>
      </div>
    </div>
    
    : task=="emploi"?
         <div className="col-md-8 col-lg-8">
      <div className="d-flex flex-column" style={{ width: "817px" }}>
        <div className="d-flex flex-row text-white"></div>
        <div className="p-3 bg-grey text-white" style={{ height: "430px" }}>
          <div style={{ height: "60px", display: "flex" }}>
            <div className="p-3 bg-primary text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("cours")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Cours</h4>
              </button>
            </div>
            <div className="p-3 bg-success text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("devoirs")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Devoirs</h4>
              </button>
            </div>
            <div className="p-3 bg-warning text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("emploi")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Emploi de Temps</h4>
              </button>
            </div>
            <div className="p-3 bg-danger text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("autre")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Autres Documents</h4>
              </button>
            </div>
          </div>
          <h4 style={{ color: "black" }}>Emploi de Temps classe {user?.classe.toUpperCase()}</h4>
          {/* here */}
          <div className="uploaded" style={{ marginTop: "20px" }}>
            <div
              className="output-div"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexWrap: "wrap",
               
                maxHeight: "250px", // Adjust the max height as needed
                overflowY: "auto"
              }}
            >
              {allImage == null ? "" :
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>Titre</th>
                      <th style={{textAlign:"center"}}>Classe</th>
                      <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allImage.filter((el) => el.category === "doc_admin" && el.type_doc === "emploi" && el.classe === user.classe).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Affcher Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
          {/* <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} /> */}
        </div>
      </div>
    </div>:
    task=="autre"?
       <div className="col-md-8 col-lg-8">
      <div className="d-flex flex-column" style={{ width: "817px" }}>
        <div className="d-flex flex-row text-white"></div>
        <div className="p-3 bg-grey text-white" style={{ height: "430px" }}>
          <div style={{ height: "60px", display: "flex" }}>
            <div className="p-3 bg-primary text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("cours")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Cours</h4>
              </button>
            </div>
            <div className="p-3 bg-success text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("devoirs")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Devoirs</h4>
              </button>
            </div>
            <div className="p-3 bg-warning text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("emploi")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Emploi de Temps</h4>
              </button>
            </div>
            <div className="p-3 bg-danger text-center" style={{ width: "25%" }}>
              <button onClick={() => settask("autre")} style={{ backgroundColor: "transparent", border: "none", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem" }}>Autres Documents</h4>
              </button>
            </div>
          </div>
          
          {/* here */}
          <div className="uploaded" style={{ marginTop: "20px" }}>
            <div
              className="output-div"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexWrap: "wrap",
               
                maxHeight: "250px", // Adjust the max height as needed
                overflowY: "auto"
              }}
            >
              {allImage == null ? "" :
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>Titre</th>
                      <th style={{textAlign:"center"}}>Classe</th>
                      <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allImage.filter((el) => el.category === "doc_admin" && el.type_doc === "calendrier" ).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Affcher Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                    {allImage.filter((el) => el.category === "doc_teacher_scolaire" && el.type_doc === "fichenote" && el.classe === user.classe ).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Show Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                      {allImage.filter((el) => el.category === "doc_teacher_scolaire" && el.type_doc === "ficheabs" && el.classe === user.classe ).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Show Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                        {allImage.filter((el) => el.category === "doc_teacher_scolaire" && el.type_doc === "fichecontrat"  ).map((data) => (
                      <tr key={data.title}>
                        <td>{data.title}</td>
                        <td>{data.classe}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Afficher Pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
          {/* <AdminPdfComp pdfFile={pdfFile} style={{ width: "50%" }} /> */}
        </div>
      </div>
    </div>
    
    :null}


    </div> 
   
  </div>
</div>

</>
</div>
  )
}

export default Espace_eleve