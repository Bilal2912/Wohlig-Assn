<template>
  <Navbar />
  <!-- <div
  :style="{
      'background-image': 'url(require(~@/assets/about.jpg))',
      height:'90vh'
    }"
    class="d-flex justify-content-center align-items-center"
  >
    <div class="d-flex justify-content-center align-items-center fs-1 fw-bold">ABOUT US</div>
  </div> -->
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/about.jpg"
          class="d-block w-100 opacity-50"
          alt="..."
        />
        <div class="d-none d-md-block">
          <h1
            class="
              text-black
              fw-bold
              position-absolute
              translate-middle
              start-50
              bottom-50
              display-4
              heading
            "
          >
            ABOUT US
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5 py-5">
    <Header title="WHAT WE DO" />
    <p class="">
      Just one of the reasons why so many clients choose our construction
      company is down to the fact that we offer a complete build solution, from
      the initial groundworks all the way through to the client handover. We
      ensure that every single project is delivered within budget, on time and
      always exceeds our clients expectations; it’s with standards like this
      that we ensure our clients not only return to us again and again, but
      recommend us too.
    </p>
    <p class="mt-4">
      As with anything in life, as time moves on, so too do technologies,
      materials and techniques which is why we’re committed to constantly
      improving our business performance from timing to techniques, and even
      cross-functional collaborations across the industry. We embrace new
      technologies, new innovations, investing in our clients future and ours,
      with the best building solutions available.
    </p>
  </div>
  <div class="d-flex justify-content-center">
    <div class="container row g-5 mb-5 pb-5">
      <div class="col-6">
        <img src="../assets/about1.jpg" alt="" class="" style="width: 100%" />
        <div class="mt-4">
          <Header title="COMPLETE BUILDING SOLUTIONS" class="mt-4" />
          <p>
            Many people can find building/renovation projects to be stressful,
            this is mainly due to having to arrange different contractors for
            specific tasks such as groundwork, plumbing, roofing etc.
          </p>
          <p class="mt-4">
            Through many years in the construction industry, we have built a
            highly skilled team whose expertise span across each and every
            building trade. This means we can efficiently complete your whole
            project from start to finish ourselves making it extremely easy and
            stress-free for the customer!
          </p>
        </div>
      </div>
      <div class="col-6">
        <img src="../assets/about2.jpg" alt="" style="width: 100%" />
        <div class="mt-4">
          <Header title="NO JOB TOO BIG OR SMALL" />
          <p>
            We are a versatile company and we reflect that in the industries we
            cover. We are willing and able to carry out all works within the
            commercial, residential and educational sectors.
          </p>
          <p>
            We are able to come on-site, whether that be your house, school, or
            office and provide a quick no-hassle quote.
          </p>
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
export default {
  name: "About",
  components: {
    Footer,
    Navbar,
    Header,
  },
};
</script>

<style>
.heading{
   font-family: "Roboto", sans-serif;
}
</style>