import React from "react";
import im1 from "../proud-teacher-with-her-elementary-students.jpg";
import im3 from "../smiling-students-with-backpacks_1098-1220.jpg";
import im2 from "../be-focus-patient-while-teaching-new-things.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {/* Carousel Start */}

      <Carousel activeIndex={index} onSelect={handleSelect} className="caro">
        <Carousel.Item>
          <img className="d-block w-100 caroimg" src={im1} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 caroimg" src={im2} alt="First slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 caroimg" src={im3} alt="First slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ********************sevices **********/}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Services d'École</h1>
            <p>
             L'école offre une gamme étendue de services conçus pour soutenir les étudiants dans leur parcours académique et personnel. 
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="facility-item">
                <div className="facility-icon bg-primary">
                  <span className="bg-primary"></span>
                  <i className="fa fa-bus-alt fa-3x text-primary"></i>
                  <span className="bg-primary"></span>
                </div>
                <div className="facility-text bg-primary">
                  <h3 className="text-primary mb-3">Bus scolaire</h3>
                  <p className="mb-0">
                   Le service de bus scolaire offre une solution pratique et sécurisée pour le transport des élèves entre leur domicile et l'école.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="facility-item">
                <div className="facility-icon bg-success">
                  <span className="bg-success"></span>
                  <i className="fa fa-futbol fa-3x text-success"></i>
                  <span className="bg-success"></span>
                </div>
                <div className="facility-text bg-success">
                  <h3 className="text-success mb-3">Cour de récréation</h3>
                  <p className="mb-0">
                    Espace essentiel où les élèves peuvent jouer, se détendre et interagir entre eux pendant les pauses scolaires.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="facility-item">
                <div className="facility-icon bg-warning">
                  <span className="bg-warning"></span>
                  <i className="fa fa-home fa-3x text-warning"></i>
                  <span className="bg-warning"></span>
                </div>
                <div className="facility-text bg-warning">
                  <h3 className="text-warning mb-3">Cantine saine</h3>
                  <p className="mb-0">
                    La cantine de l'école propose des repas sains et équilibrés afin de promouvoir la santé et le bien-être des élèves.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="facility-item">
                <div className="facility-icon bg-info">
                  <span className="bg-info"></span>
                  <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
                  <span className="bg-info"></span>
                </div>
                <div className="facility-text bg-info">
                  <h3 className="text-info mb-3">Apprentissage positif</h3>
                  <p className="mb-0">
                   L'école favorise un environnement d'apprentissage positif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****************about ************/}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-4">
                Apprenez-en davantage sur notre travail et nos activités culturelles
              </h1>
              <p>
                Nous vous invitons à explorer davantage notre travail et nos activités culturelles qui enrichissent l'expérience éducative de nos élèves. 
              </p>
              <p className="mb-4">
               Au sein de notre école, nous mettons un accent particulier sur la promotion de la culture, de l'art et de la créativité. Nos élèves participent à une variété d'activités culturelles telles que des spectacles de théâtre, des expositions d'art, des concerts musicaux et des événements littéraires. Ces initiatives visent à encourager l'expression individuelle, la collaboration et l'appréciation de la diversité culturelle, tout en renforçant les liens communautaires au sein de notre école.
              </p>
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 about-img wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    className="img-fluid w-75 rounded-circle bg-light p-3"
                    src="img/about-1.jpg"
                    alt=""
                    height="250"
                  />
                </div>
                <div
                  className="col-6 text-start"
                  style={{ marginTop: "-150px" }}
                >
                  <img
                    className="img-fluid w-100 rounded-circle bg-light p-3"
                    src="img/about-2.jpg"
                    alt=""
                    style={{ height: "250px" }}
                  />
                </div>
                <div className="col-6 text-end" style={{ marginTop: "-150px" }}>
                  <img
                    className="img-fluid w-100 rounded-circle bg-light p-3"
                    src="img/about-3.jpg"
                    alt=""
                    style={{ height: "250px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***** * potential */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src="img/call-to-action.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Devenir professeur</h1>
                  <p className="mb-4">
                    Pour devenir professeur, il est généralement nécessaire d'obtenir un diplôme universitaire dans le domaine d'enseignement souhaité, suivi d'une formation pédagogique ou d'un programme de formation des enseignants. Après avoir obtenu les qualifications nécessaires, les candidats peuvent postuler à des postes d'enseignement dans les écoles primaires, secondaires ou supérieures.
                  </p>
                  <a className="btn btn-primary py-3 px-5" href="">
                    Commencez maintenant<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *****gallery */}
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="mb-3">Notre galerie</h1>
        <p>
          Découvrez notre galerie, un espace dédié à l'art et à la créativité où vous pourrez explorer une variété d'œuvres réalisées par nos élèves ainsi que des projets artistiques inspirants.
        </p>
      </div>
      <div className="gallery">
        <div id="mz-gallery-container">
          <div id="mz-gallery">
            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/00/95/26/08/1000_F_95260823_vPULCyav0lMeEZuKWGMCewJoxlUhbLGN.jpg"
                alt="Statue of Liberty"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as2.ftcdn.net/v2/jpg/06/58/25/39/1000_F_658253939_kTaWt511Zxs1a8zz6wp1Svs8l5Oi4OAT.jpg"
                alt="Night Sky"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/02/64/23/97/240_F_264239755_KcH3URDtyQ4sF87udRmieSe2kCQgcqln.jpg"
                alt="Ravine Between Rocks"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as2.ftcdn.net/v2/jpg/06/64/80/15/1000_F_664801587_nzHCQyLpPeC5mqMlLVXkHcCYeg3cMOzF.jpg"
                alt="Wheat Farm"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/02/67/09/10/1000_F_267091019_M0QtCl2Y6pqALH8gpmFztQ7icrCgzs8C.jpg"
                alt="City Street"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/07/06/85/10/1000_F_706851013_AeyTXixl5drXjp1ZMhxoFXnSrD1G1llQ.jpg"
                alt="Crumbling Pier"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/07/06/94/57/240_F_706945732_C2Cr9VAIk8zBbOLXavtfaTH3GKUbr6MP.jpg"
                alt="Foggy Mountains"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://t3.ftcdn.net/jpg/05/81/46/42/240_F_581464274_mDDxV1PdNg5ikKhWgqFRZlVIEHWqKHQV.jpg"
                alt="Dense Forest"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://t3.ftcdn.net/jpg/03/34/42/00/240_F_334420076_U0R9VbSTnyGeHgW6duEQPC4pRmFo7J1S.jpg"
                alt="Sunset Over Mountains"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/06/63/53/95/240_F_663539511_ANRYz0Y55YQVM8F0IWx7JZZPBZcNXmGl.jpg"
                alt="SUV in Front of Building"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/97/20/56/1000_F_397205638_tkZUeB3rZgkYeqJ9OJKWqP2FxuXNt6Pd.jpg"
                alt="Classic Vehicle"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/01/24/58/1000_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.jpg"
                alt="Stacked Rocks"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/00/53/04/84/1000_F_53048436_7uKgLgRO5kcfcZc6glMF37YB0JrJCrRA.jpg"
                alt="Brick Wall"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/00/64/31/88/1000_F_64318809_ITSUqjOWcitQKYIPMIi1XFM3pDWU5JDD.jpg"
                alt="Waterfront"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/01/13/01/69/240_F_113016975_IxkOW3gz4THdUOUC64AlJsCy8IUWjN5r.jpg"
                alt="Overgrown Buildings"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as1.ftcdn.net/v2/jpg/01/41/82/22/1000_F_141822242_6RbMrHTckcvmiewesKIV3FXNDDeGqytm.jpg"
                alt="Dying Trees"
                width="700"
                height="700"
              />
            </figure>

            <figure>
              <img
                src="https://as2.ftcdn.net/v2/jpg/04/55/00/73/1000_F_455007359_zSW8axVn76visiSKflnKua7weUp54EoU.jpg"
                alt="Ocean View"
                width="700"
                height="700"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
