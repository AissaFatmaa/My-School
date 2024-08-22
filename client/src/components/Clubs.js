import React from "react";
import { useSelector } from "react-redux";

function Clubs() {
  const clubs = useSelector((state) => state.club?.clubList);
  return (
    <div>
      <div class="container-xxl py-5 page-header position-relative mb-5">
        <div class="container py-5">
          <h1 class="display-2 text-white animated slideInDown mb-4">Clubs</h1>
          <nav aria-label="breadcrumb animated slideInDown">
       
          </nav>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Clubs scolaires</h1>
            <p>
              Les clubs scolaires offrent aux élèves l'opportunité de poursuivre leurs intérêts et passions en dehors des heures de classe.
            </p>
          </div>
          <div class="row g-4">
            {clubs?.map((el) => (
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="classes-item">
                  <div class="bg-light rounded-circle w-75 mx-auto p-3">
                    <img
                      class="img-fluid rounded-circle imclubs"
                      src={el?.image}
                      alt=""
                    />
                  </div>
                  <div class="bg-light rounded p-4 pt-5 mt-n5">
                    <a class="d-block text-center h3 mt-3 mb-4" href="">
                      {el?.name_club}
                    </a>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                      <div class="d-flex align-items-center">
                        <img
                          class="rounded-circle flex-shrink-0"
                          src="img/user.jpg"
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                        />
                        <div class="ms-3">
                          <h6 class="text-primary mb-1"> {el?.teacher}</h6>
                          <small>Professeur</small>
                        </div>
                      </div>
                      <span
                        class="bg-primary text-white rounded-pill py-2 px-3"
                        href=""
                      >
                        {el?.Price}
                      </span>
                    </div>
                    <div class="row g-1">
                      <div class="col-4">
                        <div class="border-top border-3 border-primary pt-2">
                          <h6 class="text-primary mb-1">Âge:</h6>
                          <small> {el?.level}</small>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="border-top border-3 border-success pt-2">
                          <h6 class="text-success mb-1">Horaires:</h6>
                          <small>{el?.Time}</small>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="border-top border-3 border-warning pt-2">
                          <h6 class="text-warning mb-1">Capacité:</h6>
                          <small>{el?.Capacity}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;
