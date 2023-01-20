<script>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });

import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Header,
    Card,
    Footer,
    Navbar,
  },
  data() {
    return {
      images: [
        "../assets/card1.jpg",
        "../assets/card2.jpg",
        "../assets/card3.jpg",
        "../assets/card4.jpg",
        "../assets/card5.jpg",
        "../assets/card6.jpg",
      ],
    };
  },
};
</script>

<style>
.myicon {
  cursor: pointer;
  color: #0275d8;
}
.myicon:hover {
  color: #004784;
}
@media only screen and (min-width:1400px) {
  .card{
    height: 80%;
  }
}
@media only screen and (min-width:1200px) and (max-width:1400px) {
  .card{
    height: 90%;
  }
}
</style>

<template>
  <!-- Navbar -->

  <Navbar />

  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
    data-interval="100"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active bg-primary"
        aria-current="true"
        aria-label="Slide 1"
        style="width: 7%"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="bg-primary"
        style="width: 7%"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="bg-primary"
        style="width: 7%"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/img2.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/img3.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>

  <div class="container mt-4 mt-lg-5">
    <Header title="WHO ARE WE" />
    <p class="lead">
      Welcome to Bannerman Build Ltd, a premium rated construction company,
      where we cover every aspect of construction, from basements to loft
      extensions. In our many years of experience, we’ve worked with a huge
      range of clients including private, housing associations and even on
      behalf of building consultants. We’re a diverse contractor, with
      experience in both residential, commercial and even the educational
      industry sectors. We pride ourselves on the variety of our projects as
      well as the high quality of work we deliver along, of course, with the
      continual positive feedback we receive from our clients.
    </p>
  </div>

  <div class="container mt-lg-5 pt-lg-3 mt-4" style="height: 45rem">
    <Header title="WHAT WE DO"/>
    <div class="row mt-3 justify-content-center">
      <div
        class="col-12 d-flex justify-content-end px-4 mb-2 d-none d-lg-flex"
        style="width: 95%"
      >
        <font-awesome-icon
          icon="fa-solid fa-caret-square-left"
          class="fs-1 myicon"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        />
        <font-awesome-icon
          icon="fa-solid fa-caret-square-right"
          class="fs-1 ms-2 myicon"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        />
      </div>
      <div class="col-12">
        <div
          id="carouselExampleControls"
          class="carousel slide d-lg-block d-none"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row g-0">
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="card" style="width: 90%">
                    <img
                      src="../assets/card1.jpg"
                      class="card-img-top"
                      alt="..."
                      style="height: 50%"
                    />
                    <div class="card-body">
                      <h5 class="card-title fs-4">BATHROOMS</h5>
                      <p class="card-text fw-light" style="font-size: large">
                        Are you looking for expert bathroom fitters? <br />
                        Then look no further as you’ve come through to the right
                        place.
                      </p>
                      <RouterLink to="/services/bathrooms" class="btn btn-primary">Service Details</RouterLink>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="card" style="width: 90%">
                    <img
                      src="../assets/card2.jpg"
                      class="card-img-top"
                      alt="..."
                      style="height: 50%"
                    />
                    <div class="card-body">
                      <h5 class="card-title fs-4">KITCHENS</h5>
                      <p class="card-text fw-light" style="font-size: large">
                        For years our expert team of kitchen fitters have been
                        installing kitchens of all shapes and styles, to the
                        highest standards.
                      </p>
                      <RouterLink to="/services/kitchens" class="btn btn-primary">Service Details</RouterLink>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="card" style="width: 90%">
                    <img
                      src="../assets/card3.jpg"
                      class="card-img-top"
                      alt="..."
                      style="height: 50%"
                    />
                    <div class="card-body">
                      <h5 class="card-title fs-4">GROUNDWORKS</h5>
                      <p class="card-text fw-light" style="font-size: large">
                        We provide a full range of groundworks and civil
                        engineering services from foundation construction to
                        roads, drainage and even servicing.
                      </p>
                      <RouterLink to="/services/groundworks" class="btn btn-primary">Service Details</RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row g-3">
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="card" style="width: 90%">
                    <img
                      src="../assets/card4.jpg"
                      class="card-img-top"
                      alt="..."
                      style="height: 50%"
                    />
                    <div class="card-body">
                      <h5 class="card-title fs-4">NEW BUILDS</h5>
                      <p class="card-text fw-light" style="font-size: large">
                        With the ever increasing demand for housing, new builds
                        are becoming more and more common and as such, our
                        ability within this sector is being called upon more and
                        more.
                      </p>
                      <RouterLink to="/services/new-builds" class="btn btn-primary">Service Details</RouterLink>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="card" style="width: 90%">
                    <img
                      src="../assets/card5.jpg"
                      class="card-img-top"
                      alt="..."
                      style="height: 50%"
                    />
                    <div class="card-body">
                      <h5 class="card-title fs-4">BUILDERS</h5>
                      <p class="card-text fw-light" style="font-size: large">
                        At Bannerman Build Ltd, we pride ourselves on hiring
                        only the best builders in the industry to ensure the
                        quality of every project is of the very highest calibre.
                      </p>
                      <RouterLink to="/services/builders" class="btn btn-primary">Service Details</RouterLink>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="card" style="width: 90%">
                    <img
                      src="../assets/card6.jpg"
                      class="card-img-top"
                      alt="..."
                      style="height: 50%"
                    />
                    <div class="card-body">
                      <h5 class="card-title fs-4">LOFT CONVERSIONS</h5>
                      <p class="card-text fw-light" style="font-size: large">
                        With the ever increasing demand for housing are you
                        looking for that extra room but don’t have the ability
                        to extend outward? Then a loft extension could be the
                        perfect choice for you.
                      </p>
                      <RouterLink to="/services/loft-conversions" class="btn btn-primary">Service Details</RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          id="carouselExampleControlsSmallScreen"
          class="carousel slide d-block d-lg-none carousel-dark mt-3"
          data-bs-ride="carousel "
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="cards-wrapper d-flex justify-content-center">
                <div class="card mx-3" style="width:28rem">
                  <img src="../assets/card1.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">BATHROOMS</h5>
                    <p class="card-text fw-light">
                      Are you looking for expert bathroom fitters? <br>
                      Then look no further as you’ve come through to the right place.
                    </p>
                    <RouterLink to="/services/bathrooms" class="btn btn-primary">Service Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex justify-content-center">
                <div class="card mx-3" style="width:28rem">
                  <img src="../assets/card2.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">KITCHENS</h5>
                    <p class="card-text fw-light">
                      For years our expert team of kitchen fitters have been installing kitchens of all shapes and styles, to the highest standards.
                    </p>
                    <RouterLink to="/services/kitchens" class="btn btn-primary">Service Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex justify-content-center">
                <div class="card mx-3" style="width:28rem">
                  <img src="../assets/card3.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">GROUNDWORKS</h5>
                    <p class="card-text fw-light">
                      We provide a full range of groundworks and civil engineering services from foundation construction to roads, drainage and even servicing.
                    </p>
                    <RouterLink to="/services/groundworks" class="btn btn-primary">Service Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex justify-content-center">
                <div class="card mx-3" style="width:28rem">
                  <img src="../assets/card4.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">NEW BUILDS</h5>
                    <p class="card-text fw-light">
                      With the ever increasing demand for housing, new builds are becoming more and more common and as such, our ability within this sector is being called upon more and more.
                    </p>
                    <RouterLink to="/services/new-builds" class="btn btn-primary">Service Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex justify-content-center">
                <div class="card mx-3" style="width:28rem">
                  <img src="../assets/card5.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">BUILDERS</h5>
                    <p class="card-text fw-light">
                      At Bannerman Build Ltd, we pride ourselves on hiring only the best builders in the industry to ensure the quality of every project is of the very highest calibre.
                    </p>
                    <RouterLink to="/services/builders" class="btn btn-primary">Service Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex justify-content-center">
                <div class="card mx-3" style="width:28rem">
                  <img src="../assets/card6.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">LOFT CONVERSIONS</h5>
                    <p class="card-text fw-light">
                      With the ever increasing demand for housing are you looking for that extra room but don’t have the ability to extend outward? Then a loft extension could be the perfect choice for you.
                    </p>
                    <RouterLink to="/services/loft-conversions" class="btn btn-primary">Service Details</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsSmallScreen"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsSmallScreen"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5 mt-lg-0 pt-4 pt-lg-5">
    <div class="container">
      <Header title="WORKING WITH US" />
      <h2 class="fw-lighter fs-3">COMPLETE BUILD SOLUTIONS</h2>
      <p class="mt-4">
        Just one of the reasons why so many clients choose our construction
        company is down to the fact that we offer a complete build solution,
        from the initial groundworks all the way through to the client handover.
        We ensure that every single project is delivered within budget, on time
        and always exceeds our clients expectations; it’s with standards like
        this that we ensure our clients not only return to us again and again,
        but recommend us too.
      </p>
      <p class="">
        As with anything in life, as time moves on, so too do technologies,
        materials and techniques which is why we’re committed to constantly
        improving our business performance from timing to techniques, and even
        cross-functional collaborations across the industry. We embrace new
        technologies, new innovations, investing in our clients future and ours,
        with the best building solutions available.
      </p>
      <RouterLink to="/contact"
        ><button class="btn btn-primary px-5 mt-4 mb-5">
          GET A QUOTE
        </button></RouterLink
      >
    </div>
  </div>

  <Footer />
</template>
