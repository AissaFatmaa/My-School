import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { logout } from "../JS/userSlice/userSlice";

function Navbarr() {
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 navo">
      <a href="index.html" class="navbar-brand">
        <h1 class="m-0 text-primary2">
          <i class="fa fa-book-reader me-3"></i>MySchool
        </h1>
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <a class="nav-item nav-link active">Acceuil</a>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <a class="nav-item nav-link">Établissement</a>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            {" "}
            <a href="" class="nav-item nav-link">
              Services
            </a>
          </Link>
          <Link to="/clubs" style={{ textDecoration: "none" }}>
            {" "}
            <a href="#" class="nav-link ">
              Clubs
            </a>
          </Link>
          <Link to="/events" style={{ textDecoration: "none" }}>
            {" "}
            <a href="#" class="nav-item nav-link">
              Évenements
            </a>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            {" "}
            <a href="" class="nav-item nav-link">
              Contact
            </a>
          </Link>
          {user?.category == "teacher"  && user?.status=="active" ? (
            <Link to="/dashTeacher" style={{ textDecoration: "none" }}>
              {" "}
              <a href="" class="nav-item nav-link">
                Espace Enseignant
              </a>
            </Link>
          ):user?.category == "inspector"  && user?.status=="active" ? (
            <Link to="/dashInspector" style={{ textDecoration: "none" }}>
              {" "}
              <a href="" class="nav-item nav-link">
                Espace Inspecteur
              </a>
            </Link>) :user?.category == "student" && user?.status=="active"? (
            <Link to="/espace_eleve" style={{ textDecoration: "none" }}>
              {" "}
              <a href="" class="nav-item nav-link">
                Espace Élève
              </a>
            </Link>) : null}
        </div>
        {user?.status == "active" ? (
          <>
            <Link to="/profil" style={{ textDecoration: "none" }}>
              {" "}
              <a
                href=""
                style={{ marginRight: "13px" }}
                class="btn btn-primary rounded-pill px-3 d-none d-lg-block"
              >
                {user?.name} {user?.lastname}
                <FaUser style={{ marginLeft: "7px", marginTop: "-5px" }} />
              </a>
            </Link>
            <button
              style={{ backgroundColor: "white", border: "none" }}
              onClick={() => {
                dispatch(logout());

                navigate("/register");
              }}
            >
              <svg
                style={{ width: "20px", fill: "#fe5d37" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </button>
          </>
        ) : (
          <Link to="/register" style={{ textDecoration: "none" }}>
            {" "}
            <a
              href=""
              class="btn btn-primary rounded-pill px-3 d-none d-lg-block"
            >
              Rejoignez-nous<i class="fa fa-arrow-right ms-3"></i>
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbarr;
