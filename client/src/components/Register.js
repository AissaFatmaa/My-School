import React, { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userCurrent,
  userRegister,
  userlogin,
} from "../JS/userSlice/userSlice";
import Swal from "sweetalert2";
function Register({ping, setping}) {
  const user = useSelector((state) => state.user?.user);
  const [register, setregister] = useState({
    matricule: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    datenais: "",
    parentName: "",
    phone: "",
    address: "",
    grade: "",
    classe: "",
    sub_class: "",
    status: "non active",
    category: "",
    abs: "",
    nb_abs: 0,
  });
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [ping, setping] = useState(false);
  // useEffect(() => {
  //   dispatch(userCurrent());
  // }, [ping]);

  useEffect(() => {
    // Mimic $(document).ready()
    $(".login-info-box").fadeOut();
    $(".login-show").addClass("show-log-panel");

    // Event handling for radio button change
    $('.login-reg-panel input[type="radio"]').on("change", function () {
      if ($("#log-login-show").is(":checked")) {
        $(".register-info-box").fadeOut();
        $(".login-info-box").fadeIn();
        $(".white-panel").addClass("right-log");
        $(".register-show").addClass("show-log-panel");
        $(".login-show").removeClass("show-log-panel");
      } else if ($("#log-reg-show").is(":checked")) {
        $(".register-info-box").fadeIn();
        $(".login-info-box").fadeOut();
        $(".white-panel").removeClass("right-log");
        $(".login-show").addClass("show-log-panel");
        $(".register-show").removeClass("show-log-panel");
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      $('.login-reg-panel input[type="radio"]').off("change");
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="register-container">
      <div class="login-reg-panel">
        <div class="login-info-box" style={{color:"white"}}>
          <h2>Avoir un compte??</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <label id="label-register" for="log-reg-show">
            Login
          </label>
          <input type="radio" name="active-log-panel" id="log-reg-show" />
        </div>

        <div class="register-info-box" style={{color:"white"}}>
          <h2>Vous n'avez pas de compte ?</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <label id="label-login" for="log-login-show">
            Registre
          </label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>

        <div class="white-panel">
          <div class="login-show">
            <h2>Connexion</h2>
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            />
         
            <button
              className="btn btn-lg btn-primary btn-block"
              style={{ width: "189px", marginLeft: "91px" }}
              onClick={() => {
                dispatch(userlogin(login));
                // setping(!ping);

                if (user && user.status == "active") {
                  navigate("/profil");
                } else if (user.status == "disabled") {
                  // Swal.fire({
                  //   title: "We are sorry",
                  //   text: "Your account is not active, contact the administrator!",
                  // });
                  alert("sorry");
                }
              }}
            >
              se connecter
            </button>
          </div>
          <div class="register-show">
            <h2>Registre</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Élève{" "}
              <input
                type="radio"
                name="catego"
                value="student"
                onChange={(e) =>
                  setregister({ ...register, category: e.target.value })
                }
              />{" "}
              Enseignant{" "}
              <input
                type="radio"
                name="catego"
                value="teacher"
                onChange={(e) =>
                  setregister({ ...register, category: e.target.value })
                }
              />{" "}
              Inspecteur{" "}
              <input
                type="radio"
                name="catego"
                value="inspector"
                onChange={(e) =>
                  setregister({ ...register, category: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Matricule"
              required
              onChange={(e) =>
                setregister({ ...register, matricule: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Prénom"
              required
              onChange={(e) =>
                setregister({ ...register, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nom"
              required
              onChange={(e) =>
                setregister({ ...register, lastname: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) =>
                setregister({ ...register, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Mot de passe"
              required
              onChange={(e) =>
                setregister({ ...register, password: e.target.value })
              }
            />
            <button
              className="btn btn-lg btn-primary btn-block"
              style={{ width: "189px", marginLeft: "91px" }}
              onClick={() => {
                dispatch(userRegister(register));
                setping(!ping);

                Swal.fire({
                  title: "Merci",
                  text: "Merci pour votre incription, vous recevrez bientôt un e-mail de confirmation !",
                });
                navigate("/");
              }}
            >
              Registre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
