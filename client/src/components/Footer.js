import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      {/* ******footer */}
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Contactez-nous</h3>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>École primaire OUED ENNOUR N° 137 ELHAMMA Gabès-Tunisie 6020
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+(216) 98930244
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Liens rapides</h3>
              <a className="btn btn-link text-white-50" href="">
                À propos de nous
              </a>
              <a className="btn btn-link text-white-50" href="">
                Contactez-nous
              </a>
              <a className="btn btn-link text-white-50" href="">
                Nos Services
              </a>
              <a className="btn btn-link text-white-50" href="">
                politique de confidentialité
              </a>
              <a className="btn btn-link text-white-50" href="">
                Termes et conditions
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Galerie de photos</h3>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-1.avif"
                    alt=""
                    style={{ height: "76px" }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-2.avif"
                    alt=""
                    style={{ height: "76px" }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-3.jpg"
                    alt=""
                    style={{ height: "76px" }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-4.jpg"
                    alt=""
                    style={{ height: "76px", width: "100%" }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-5.jpg"
                    alt=""
                    style={{ height: "76px" }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-6.avif"
                    alt=""
                    style={{ height: "76px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Messagerie</h3>
              <p>Utilisez notre service de messagerie pour rester en contact avec l'école</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
