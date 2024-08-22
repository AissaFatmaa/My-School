import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";

import Edituser from "./Edituser";
import { deleteuser } from "../JS/userSlice/userSlice";
import Swal from "sweetalert2";
import AddClub from "./AddClub";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import EditClub from "./EditClub";
import { deleteclub } from "../JS/clubSlice";
import { deleteevent } from "../JS/eventSlice";
import PdfFile from "./pdfFile/PdfFile";
import AdminPdf from "./pdfFile/AdminPdf";

function Dashbord({ ping, setping }) {
  const clubs = useSelector((state) => state.club?.clubList);
  const events = useSelector((state) => state.event?.eventList);
  const user = useSelector((state) => state.user?.user);
  const users = useSelector((state) => state.user?.userList);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("all");
  const [tasks, settasks] = useState("users");
  console.log(users);
  const [text, settext] = useState("");
 const handleNotify = (email) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div class="dashbord">
      <div class="app-container" style={{ Height: "560px", overflow: "auto" }}>
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
                  <span>Utilisateurs</span>
                </button>
              </a>
            </li>
            <li class="sidebar-list-item active">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-bag"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <button
                  onClick={() => settasks("clubs")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  <span>Clubs</span>
                </button>
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-pie-chart"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
                <button
                  onClick={() => settasks("events")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <span>Événements</span>
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
                  onClick={() => settasks("schedule")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <span>Calendrier</span>
                </button>
              </a>
            </li>
          </ul>
          <div class="account-info">
            <div class="account-info-picture">
              <img
                src="data:image/jpeg;base64,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"
                alt="Account"
              />
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
          <div class="app-content">
            <div class="app-content-header">
              <h1 class="app-content-headerText">Tableau de bord Administrateur</h1>

              {/* <button class="app-content-headerButton">Add Product</button> */}
            </div>
            <div class="app-content-actions">
              <input
                class="search-bar"
                placeholder="Rechercher..."
                type="text"
                onChange={(e) => settext(e.target.value)}
              />
              <div>
                <button
                  class="app-content-headerButton"
                  onClick={() => setcategory("all")}
                  style={{ margin: "10px", backgroundColor: "#737895" }}
                >
                  Tous
                </button>
                <button
                  class="app-content-headerButton"
                  onClick={() => setcategory("student")}
                  style={{ margin: "10px", backgroundColor: "#737895" }}
                >
                  Élèves
                </button>
                <button
                  style={{ margin: "10px", backgroundColor: "#737895" }}
                  class="app-content-headerButton"
                  onClick={() => setcategory("teacher")}
                >
                  Professeurs
                </button>
                <button
                  style={{ margin: "10px", backgroundColor: "#737895" }}
                  class="app-content-headerButton"
                  onClick={() => setcategory("inspector")}
                >
                  Inspecteurs
                </button>
              </div>
            </div>
            {/* ****************tables********* */}
            {category == "student" ? (
                 <div className="products-area-wrapper tableView">
      <div style={{ height: '400px', overflowY: 'auto' }}>
        <table style={{ fontSize: '12px', width: '100%', color: 'white' }}>
          <thead style={{ backgroundColor: '#1d283c', height: '50px' }}>
            <tr>
              <th></th>
              <th style={{textAlign:"center"}}>Matricule</th>
              <th style={{textAlign:"center"}}>Nom et prénom</th>
              <th style={{textAlign:"center"}}>E-mail</th>
              <th style={{textAlign:"center"}}>Date de naissance</th>
              <th style={{textAlign:"center"}}>nom de parent</th>
              <th style={{textAlign:"center"}}>téléphone</th>
              <th style={{textAlign:"center"}}>Addresse</th>
              <th style={{textAlign:"center"}}>Classe</th>
              <th style={{textAlign:"center"}}>Statut</th>
              <th style={{textAlign:"center"}}>Editer</th>
              <th style={{textAlign:"center"}}>Archiver</th>
              <th style={{textAlign:"center"}}>Notifier</th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.filter(
                (el) =>
                  el.category === 'student' &&
                  el.name.toLowerCase().includes(text.toLowerCase())
              )
              .map((el, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={el?.image}
                      alt={`${el?.name} ${el?.lastname}`}
                      style={{ width: '25px', borderRadius: '50%' }}
                    />
                  </td>
                  <td>{el?.matricule}</td>
                  <td>
                    {el?.name} {el?.lastname}
                  </td>
                  <td>{el?.email}</td>
                  <td>{el?.datenais}</td>
                  <td>{el?.parentName}</td>
                  <td>{el?.phone}</td>
                  <td>{el?.address}</td>
                  <td>{el?.classe}</td>
                  <td>
                    {el?.status === 'active' ? (
                      <span className="status active">Activé</span>
                    ) : (
                      <span className="status disabled">Desactivé</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Edituser el={el} ping={ping} setping={setping} />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                      onClick={() => {
                        dispatch(deleteuser(el?._id));
                        Swal.fire({
                          title: 'archivé!',
                          text: "l'utilstaeur est bien archivé.",
                          icon: 'success',
                        });
                        setping(!ping);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ width: '15px', fill: 'red' }}
                      >
                        <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                      </svg>
                    </button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                      onClick={() => handleNotify(el?.email)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{ width: '15px', fill: 'green' }}
                      >
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
            ) : category == "teacher" ? (
            <div className="products-area-wrapper tableView">
      <div style={{ height: '400px', overflowY: 'auto' }}>
        <table style={{ fontSize: '12px', width: '100%', color: 'white' }}>
          <thead style={{ backgroundColor: '#1d283c', height: '50px' }}>
            <tr>
              <th></th>
              <th>Matricule</th>
              <th>Nom et prénom</th>
              <th>E-mail</th>
              <th>Date de naissance</th>
              <th>Grade</th>
              <th>téléphone</th>
              <th>Addresse</th>
              <th>Classe</th>
              <th>Statut</th>
              <th>Editer</th>
              <th>Archiver</th>
              <th>Notifier</th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.filter(
                (el) =>
                  el.category === 'teacher' &&
                  el.name.toLowerCase().includes(text.toLowerCase())
              )
              .map((el, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={el?.image}
                      alt={`${el?.name} ${el?.lastname}`}
                      style={{ width: '25px', borderRadius: '50%' }}
                    />
                  </td>
                  <td>{el?.matricule}</td>
                  <td>
                    {el?.name} {el?.lastname}
                  </td>
                  <td>{el?.email}</td>
                  <td>{el?.datenais}</td>
                  <td>{el?.grade}</td>
                  <td>{el?.phone}</td>
                  <td>{el?.address}</td>
                  <td>{el?.classe[0]}</td>
                  <td>
                    {el?.status === 'active' ? (
                      <span className="status active">Activé</span>
                    ) : (
                      <span className="status disabled">Desactivé</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Edituser el={el} ping={ping} setping={setping} />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                      onClick={() => {
                        dispatch(deleteuser(el?._id));
                        Swal.fire({
                        title: 'archivé!',
                          text: "l'utilstaeur est bien archivé.",
                          icon: 'success',
                        });
                        setping(!ping);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ width: '15px', fill: 'red' }}
                      >
                        <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                      </svg>
                    </button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                      onClick={() => handleNotify(el?.email)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{ width: '15px', fill: 'green' }}
                      >
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
            ) : category == "inspector" ? (
              <div class="products-area-wrapper tableView">
                <table
                  style={{ fontSize: "12px", width: "100%", color: "white" }}
                >
                  <thead style={{ backgroundColor: "#1d283c", height: "50px" }}>
                    <tr>
                      <th></th>
                      <th>Matricule</th>
                      <th>Full name</th>
                      <th>email</th>
                      <th>dateNais</th>
                      <th>Grade</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Class</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Archiver</th>
                      <th>Notifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users
                      ?.filter(
                        (el) =>
                          el.category == "inspector" &&
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
                          <td>{el?.datenais}</td>
                          <td>{el?.grade}</td>
                          <td>{el?.phone}</td>
                          <td>{el?.address}</td>
                          <td>
                            {el?.classe}
                            {el?.sub_class}
                          </td>

                          <td>
                            {" "}
                            {el?.status == "active" ? (
                              <span class="status active">Activé</span>
                            ) : (
                              <span class="status disabled">Desactivé</span>
                            )}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <Edituser el={el} ping={ping} setping={setping} />
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                              onClick={() => {
                                dispatch(deleteuser(el?._id));
                                Swal.fire({
                                 title: 'archivé!',
                          text: "l'utilstaeur est bien archivé.",
                          icon: 'success',
                                });
                                setping(!ping);
                              }}
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                style={{ width: "15px", fill: "red" }}
                              >
                                <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                              </svg>
                            </button>
                          </td>
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
            ) : category == "all" ? (
           <div class="products-area-wrapper tableView">
  <div style={{ height: '400px', overflowY: 'auto' }}>
    <table style={{ fontSize: '12px', width: '100%', color: 'white' }}>
      <thead style={{ backgroundColor: '#1d283c', height: '50px' }}>
        <tr>
              <th></th>
              <th style={{textAlign:"center"}}>Matricule</th>
              <th style={{textAlign:"center"}}>Nom et prénom</th>
              <th style={{textAlign:"center"}}>E-mail</th>
              <th style={{textAlign:"center"}}>Catégorie</th>
           
          
                    <th style={{textAlign:"center"}}>téléphone</th>
              
     
              <th style={{textAlign:"center"}}>Statut</th>
              <th style={{textAlign:"center"}}>Editer</th>
              <th style={{textAlign:"center"}}>Archiver</th>
              <th style={{textAlign:"center"}}>Notifier</th>
            </tr>
      </thead>
      <tbody>
        {users
          ?.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
          .map((el) => (
            <tr key={el?.id}>
              <td>
                <img
                  src={el?.image}
                  alt="User"
                  style={{ width: '25px', borderRadius: '50%' }}
                />
              </td>
              <td>{el?.matricule}</td>
              <td>
                {el?.name} {el?.lastname}
              </td>
              <td>{el?.email}</td>
              <td>{el?.category}</td>
            
              <td>{el?.phone}</td>
            
              <td>
                {el?.status === 'active' ? (
                  <span class="status active">Activé</span>
                ) : (
                  <span class="status disabled">Desactivé</span>
                )}
              </td>
              <td style={{ textAlign: 'center' }}>
                <Edituser el={el} ping={ping} setping={setping} />
              </td>
              <td style={{ textAlign: 'center' }}>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  onClick={() => {
                    dispatch(deleteuser(el?._id));
                    Swal.fire({
                   title: 'archivé!',
                          text: "l'utilstaeur est bien archivé.",
                          icon: 'success',
                    });
                    setping(!ping);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{ width: '15px', fill: 'red' }}
                  >
                    <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                  </svg>
                </button>
              </td>
              <td style={{ textAlign: 'center' }}>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  onClick={() => handleNotify(el?.email)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{ width: '15px', fill: 'green' }}
                  >
                    <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>

            ) : null}
          </div>
        ) : tasks == "clubs" ? (
          <div class="app-content">
            <div class="app-content-header">
              <h1 class="app-content-headerText">Tableau de bord Administrateur</h1>

              <AddClub ping={ping} setping={setping} />
            </div>
            <div class="app-content-actions">
              <input
                class="search-bar"
                placeholder="Rechercher..."
                type="text"
                onChange={(e) => settext(e.target.value)}
              />
            </div>
            {/* ****************tables********* */}
            <div className="club-container">
              {clubs
                ?.filter((el) =>
                  el?.name_club.toLowerCase().includes(text.toLocaleLowerCase())
                )
                .map((el) => (
                  <Card style={{ width: "15rem", margin: "10px" }}>
                    <Card.Img
                      variant="top"
                      src={el?.image}
                      style={{
                        minHeight: "200px",
                        maxHeight: "200px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{el?.name_club}</Card.Title>
                      <Card.Text></Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <EditClub el={el} ping={ping} setping={setping} />
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => {
                            dispatch(deleteclub(el?._id));
                            setping(!ping);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            style={{ width: "15px", fill: "red" }}
                          >
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                          </svg>
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </div>
        ) : tasks == "events" ? (
          <div class="app-content">
            <div class="app-content-header">
              <h1 class="app-content-headerText">Tableau de bord Administrateur</h1>

              <AddEvent ping={ping} setping={setping} />
            </div>
            <div class="app-content-actions">
              <input
                class="search-bar"
                placeholder="Rechercher..."
                type="text"
                onChange={(e) => settext(e.target.value)}
              />
            </div>
            {/* ****************tables********* */}
            <div className="club-container">
              {" "}
              {events
                ?.filter((el) =>
                  el?.name_event
                    .toLowerCase()
                    .includes(text.toLocaleLowerCase())
                )
                .map((el) => (
                  <Card style={{ width: "15rem", margin: "10px" }}>
                    <Card.Img
                      variant="top"
                      src={el?.image}
                      style={{
                        minHeight: "200px",
                        maxHeight: "200px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{el?.name_event}</Card.Title>
                      <Card.Text></Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <EditEvent el={el} ping={ping} setping={setping} />
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => {
                            dispatch(deleteevent(el?._id));
                            setping(!ping);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            style={{ width: "15px", fill: "red" }}
                          >
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                          </svg>
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </div>
        ) : tasks == "schedule" ? (
          <div class="app-content">
            <div class="app-content-header">
              <h1 class="app-content-headerText">Tableau de bord Administrateur</h1>
            </div>
            <div class="app-content-actions"></div>
            {/* ****************tables********* */}
            <AdminPdf/>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dashbord;
