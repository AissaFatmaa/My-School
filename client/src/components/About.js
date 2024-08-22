import React from "react";

function About() {
  return (
    <div>
      <div className="container-xxl py-5 page-header position-relative mb-5">
        <div className="container py-5">
          <h1 className="display-2 text-white animated slideInDown mb-4">
            À propos de nous
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
           
          </nav>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-4">
               Apprenez-en davantage sur notre travail et nos activités culturelles
              </h1>
              <p>
               Nous vous invitons à explorer davantage notre travail et nos activités culturelles qui enrichissent l'expérience éducative de nos élèves.


              </p>
              <p class="mb-4">
                Au sein de notre école, nous mettons un accent particulier sur la promotion de la culture, de l'art et de la créativité. Nos élèves participent à une variété d'activités culturelles telles que des spectacles de théâtre, des expositions d'art, des concerts musicaux et des événements littéraires. Ces initiatives visent à encourager l'expression individuelle, la collaboration et l'appréciation de la diversité culturelle, tout en renforçant les liens communautaires au sein de notre école.
              </p>
              <div class="row g-4 align-items-center">
                <div class="col-sm-6">
                  <a class="btn btn-primary rounded-pill py-3 px-5" href="">
                    En savoir plus
                  </a>
                </div>
             
              </div>
            </div>
            <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
              <div class="row">
                <div class="col-12 text-center">
                  <img
                    class="img-fluid w-75 rounded-circle bg-light p-3"
                    src="img/about-1.jpg"
                    alt=""
                  />
                </div>
                {/* <div class="col-6 text-start" style={{ marginTop: "-150px" }}>
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src="img/about-2.jpg"
                    alt=""
                  />
                </div>
                <div class="col-6 text-end" style={{ marginTop: "-150px" }}>
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src="img/about-3.jpg"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* become a teacher */}

      <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-light rounded">
            <div class="row g-0">
              <div
                class="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded"
                    src="img/call-to-action.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 class="mb-4">Devenir professeur</h1>
                  <p class="mb-4">
                    Pour devenir professeur, il est généralement nécessaire d'obtenir un diplôme universitaire dans le domaine d'enseignement souhaité, suivi d'une formation pédagogique ou d'un programme de formation des enseignants. Après avoir obtenu les qualifications nécessaires, les candidats peuvent postuler à des postes d'enseignement dans les écoles primaires, secondaires ou supérieures.
                  </p>
                  <a class="btn btn-primary py-3 px-5" href="">
                    Commencez maintenant<i class="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* teachers */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Professeurs populaires</h1>
            <p>
              Découvrez nos professeurs populaires, des éducateurs dévoués et passionnés qui inspirent et guident nos élèves dans leur parcours d'apprentissage.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative">
                <img
                  class="img-fluid rounded-circle w-75"
                  src="img/team-1.jpg"
                  alt=""
                />
                <div class="team-text">
                  <h3>Nom et prénom</h3>
                  <p>Désignation</p>
                  <div class="d-flex align-items-center">
                    <a class="btn btn-square btn-primary mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item position-relative">
                <img
                  class="img-fluid rounded-circle w-75"
                  src="img/team-2.jpg"
                  alt=""
                />
                <div class="team-text">
                  <h3>Nom et prénom</h3>
                  <p>Désignation</p>
                  <div class="d-flex align-items-center">
                    <a class="btn btn-square btn-primary mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item position-relative">
                <img
                  class="img-fluid rounded-circle w-75"
                  src="img/team-3.jpg"
                  alt=""
                />
                <div class="team-text">
                  <h3>Nom et prénom</h3>
                  <p>Désignation</p>
                  <div class="d-flex align-items-center">
                    <a class="btn btn-square btn-primary mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
