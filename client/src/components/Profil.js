import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { edituser } from "../JS/userSlice/userSlice";

function Profil({ ping, setping }) {
  const user = useSelector((state) => state.user?.user);
  const [edited, setedited] = useState({
    image: user?.image,
    matricule: user?.matricule,
    name: user?.name,
    lastname: user?.lastname,
    email: user?.email,
    password: user?.password,
    datenais: user?.datenais,
    parentName: user?.parentName,
    phone: user?.phone,
    address: user?.address,
    grade: user?.grade,
    classe: user?.classe,
    sub_class: user?.sub_class,
    status: user?.status,
    category: user?.category,
  });

  const dispatch = useDispatch();
  return (
    <div className="profil">
      <div class="container">
        <div class="main-body">
          <nav aria-label="breadcrumb" class="main-breadcrumb">
       
          </nav>

          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src={user?.image}
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>
                        {user?.name} {user?.lastname}
                      </h4>

                      <p class="text-muted font-size-sm">{user?.category}</p>
                      {user?.category == "admin" ? (
                        <Link to="/dashbord">
                          <button
                            class="btn btn-primary"
                            style={{ backgroundColor: "blue" }}
                          >
                            Tableau de bord
                          </button>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
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
                        class="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </h6>
                    <span class="text-secondary">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
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
                        class="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Github
                    </h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
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
                        class="feather feather-twitter mr-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
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
                        class="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
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
                        class="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div
                class="card"
                style={{ height: "496px", marginBottom: "16px" }}
              >
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nom</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={user?.name}
                        onChange={(e) =>
                          setedited({ ...edited, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nom de famille</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={user?.lastname}
                        onChange={(e) =>
                          setedited({ ...edited, lastname: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">E-mail</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={user?.email}
                        onChange={(e) =>
                          setedited({ ...edited, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mot de passe</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="password"
                        class="form-control"
                        placeholder={user?.password}
                        onChange={(e) =>
                          setedited({ ...edited, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div class="row mb-3" style={{ marginTop: "-22px" }}>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Image</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={user?.image}
                        onChange={(e) =>
                          setedited({ ...edited, image: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                      <button
                        onClick={() => {
                          dispatch(edituser({ id: user?._id, edited }));
                          setping(!ping);
                        }}
                        class="btn btn-primary px-4"
                        style={{ marginTop: "30px" }}
                      >
                        Sauvegarder les modifications
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="card" style={{ height: "204px" }}>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary"></div>
                  </div>
                </div>
              </div> */}
            </div>

            <div class="row gutters-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
