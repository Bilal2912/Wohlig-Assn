<template>
  <Navbar />
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/services.jpg"
          class="d-block w-100 opacity-50"
          alt="..."
        />
        <div class="d-lg-block">
          <h1
            class="
              text-black
              fw-bold
              position-absolute
              translate-middle
              start-50
              bottom-50
              display-5
              heading
            "
          >
            SERVICES
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="row g-5">
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/bathrooms.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">BATHROOMS</h5>
            <p class="card-text">
                Are you looking for expert bathroom fitters? <br>
                Then look no further as you’ve come through to the right place.
            </p>
            <RouterLink to="/services/bathrooms" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/kitchens.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">KITCHENS</h5>
            <p class="card-text">
                For years our expert team of kitchen fitters have been installing kitchens of all shapes and styles, to the highest standards.
            </p>
            <RouterLink to="/services/kitchens" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/groundworks.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">GROUNDWORKS</h5>
            <p class="card-text">
                We provide a full range of groundworks and civil engineering services from foundation construction to roads, drainage and even servicing.
            </p>
            <RouterLink to="/services/groundworks" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6 d-lg-none">
        <div class="card m-1" style="">
          <img src="../assets/new-builds.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center px-4">
            <h5 class="card-title">NEW BUILDS</h5>
            <p class="card-text">
                With the ever increasing demand for housing, new builds are becoming more and more common and as such, our ability within this sector is being called upon more and more.
            </p>
            <RouterLink to="/services/new-builds" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-5 mt-2">
      <div class="col-12 col-lg-4 col-md-6 d-none d-lg-block">
        <div class="card m-1" style="">
          <img src="../assets/new-builds.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center px-4">
            <h5 class="card-title">NEW BUILDS</h5>
            <p class="card-text">
                With the ever increasing demand for housing, new builds are becoming more and more common and as such, our ability within this sector is being called upon more and more.
            </p>
            <RouterLink to="/services/new-builds" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/builders.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center px-4">
            <h5 class="card-title">BUILDERS</h5>
            <p class="card-text">
                At Bannerman Build Ltd, we pride ourselves on hiring only the best builders in the industry to ensure the quality of every project is of the very highest calibre.
            </p>
            <RouterLink to="/services/builders" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/loft-conversions.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center px-4">
            <h5 class="card-title">LOFT CONVERSIONS</h5>
            <p class="card-text">
                Looking for that extra room but don’t have the ability to extend outward? <br>
                Then a loft extension could be the perfect choice for you.
            </p>
            <RouterLink to="/services/groundworks" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-5 mt-2">
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/basements.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center px-4">
            <h5 class="card-title">BASEMENTS</h5>
            <p class="card-text">
                We’ve completed a number of basement projects over a number of years and as such, boasting huge experience in creating that extra, much-needed space in your home without extending the outer dimensions.
            </p>
            <RouterLink to="/services/basements" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6">
        <div class="card m-1" style="">
          <img src="../assets/extensions.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-center px-4">
            <h5 class="card-title">EXTENSIONS</h5>
            <p class="card-text">
                From the more common single kitchen extensions to double storey extensions to the sides, rear and front of your home, we’ve the ability, knowledge and experience to carry out anything you require.
            </p>
            <RouterLink to="/services/extensions" class="btn btn-primary">Service Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: "Services",
  components: {
    Navbar,
    Footer,
    Header,
  },
};
</script>

<style>

</style>