
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
function Contact() {
   const notify = () => {
    toast.success("Message envoyée !", {
      position: "top-right",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s9na5ye",
        "template_a4yeasb",
        form.current,
        "eNs4B-Sa-TVGmh1T4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div class="container-xxl py-5 page-header position-relative mb-5">
        <div class="container py-5">
          <h1 class="display-2 text-white animated slideInDown mb-4">
            Contactez-nous
          </h1>
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
            <h1 class="mb-3">École primaire OUED ENNOUR</h1>
            <p>
             Pour toute question ou information supplémentaire, n'hésitez pas à nous contacter. Vous pouvez nous joindre par téléphone, par e-mail ou en utilisant le formulaire de contact sur notre site web. Nous sommes là pour vous aider et répondre à toutes vos demandes.
            </p>
          </div>
          <div class="row g-4 mb-5">
            <div
              class="col-md-6 col-lg-4 text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "75px", height: "75px" }}
              >
                <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
              </div>
              <h6>École primaire OUED ENNOUR N° 137 ELHAMMA Gabes-Tunisie 6020</h6>
            </div>
            <div
              class="col-md-6 col-lg-4 text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div
                class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "75px", height: "75px" }}
              >
                <i class="fa fa-envelope-open fa-2x text-primary"></i>
              </div>
              <h6>info@example.com</h6>
            </div>
            <div
              class="col-md-6 col-lg-4 text-center wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div
                class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "75px", height: "75px" }}
              >
                <i class="fa fa-phone-alt fa-2x text-primary"></i>
              </div>
              <h6>+(216) 98930244</h6>
            </div>
          </div>
          <div class="bg-light rounded">
            <div class="row g-0">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <p class="mb-4">
                                 L’école primaire OUED ENNOUR est fondée en 10 octobre 1983 à EL HAMMA orientale 2, 
L’école a ouvert ses portes en 1983 avec 83 élèves en 2 classes de 1ère année et une salle de classe
 Aujourd’hui, c’est une école primaire qui compte 1024 élèves en 17 salles de classes et 33 classes 

                    .
                  </p>
                 <form className="form" ref={form} onSubmit={sendEmail}>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="name"
                              name="user_name"
                            placeholder="Your Name"
                          />
                          <label for="name">Votre nom</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control border-0"
                            id="email"
                            name="user_email"
                            placeholder="Your Email"
                          />
                          <label for="email">Votre e-mail</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="phone"
                                name="user_phone"
                            placeholder="Your phone"
                          />
                          <label for="subject">Votre téléphone</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <textarea
                            class="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            name="message"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label for="message">Votre message</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button
                          class="btn btn-primary w-100 py-3"
                          type="submit"
                          onClick={notify}
                        >
                          Envoyer le message
                        </button>
                         <ToastContainer />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: "400px" }}
              >
                <div class="position-relative h-100">
                  <iframe
                    class="position-relative rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4560520792993!2d9.74299007480611!3d33.87790672691713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12559b3a2345a361%3A0xb120a1f6bf5b7110!2sOued%20ennour%20El%20hamma!5e0!3m2!1sen!2stn!4v1717961822107!5m2!1sen!2stn"
                    frameborder="0"
                    style={{ minHeight: "400px", border: "0" }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
