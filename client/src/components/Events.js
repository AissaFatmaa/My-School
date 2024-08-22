import React from "react";
import { useSelector } from "react-redux";

function Events() {
  const events = useSelector((state) => state.event?.eventList);
  return (
    <div>
      <div class="container-xxl py-5 page-header position-relative mb-5">
        <div class="container py-5">
          <h1 class="display-2 text-white animated slideInDown mb-4">Événements</h1>
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
            <h1 class="mb-3">Événements scolaires</h1>
            <p>
              Les événements scolaires sont des moments forts de la vie de notre établissement, offrant aux élèves, aux enseignants et aux familles des occasions de se rassembler et de célébrer.
            </p>
          </div>
          <div class="row g-4">
            {events?.map((el) => (
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="classes-item">
                  <div class="bg-light rounded-circle">
                    <img class="img-fluid imgevent" src={el?.image} alt="" />
                  </div>
                  <div class="bg-light rounded p-4">
                    <a class="d-block text-center h3 mt-3 mb-4" href="">
                      {el?.name_event}
                    </a>

                    <div class="row g-1">
                      <p> {el?.Description}</p>
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

export default Events;
