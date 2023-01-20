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
          src="../assets/basements-cover.jpg"
          class="d-block w-100 opacity-50 serviceimg"
          alt="..."
        />
        <div class="d-lg-block">
          <h1
            class="
              text-black
              fw-bold
              translate-middle
              start-50
              text-center
              display-5
              heading
            "
          >
            BASEMENTS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="Basement Construction" title2="Bannerman Basement Construction" title3="All Factors Considered" title4="Gain Valuable Space By Digging Deep" content1="Here at Bannerman Build Ltd, we’ve worked on a number of basement construction projects over the years and as such, we have gained an invaluable amount of knowledge, giving us the ability to undertake all aspects of your project from excavations to formwork, steel reinforcement and more." content2="Here at Bannerman Build Ltd, our expert team produce basements that are light, airy and have the ability to be used for many purposes. Not only will they offer you that much-needed extra space, but they can also increase the value of your home, more than many realize, giving you further possibilities for modern living and of course, extra square footage." content3="Unlike regular home extensions, basement construction requires specific factors being considered. From site conditions to soil type, proposed use of basement to the basement construction type and even the necessity to protect against contaminants within the soil and ground gasses." content4="Bannerman’s basement construction services allow you to create extra space in your home that you may have never thought possible. We can plan, construct and complete your vision from start to finish by digging within the current footprint of your home." heading1="Increase the value of your home" heading2="Costing" heading3="Building Projects" heading4="Satisfaction Guaranteed" para1="Basement construction gives you the ability to gain extra square footage within the confines of your home's current footprint and gain, in some cases, a whopping 30% increase in value." para2="We understand only too well that budgets are important, especially for our domestic clients and as such, we discuss costing from the very beginning, keeping you updated at all times along the way." para3="Our building projects take us all around the UK. We’ve become the go-to construction company thanks to our team of experts." para4="With our expertise in the area of basement construction, we’ve become familiar with local soils, local councils and restrictions as well as the associated legalities and as such, can plan from the very beginning to ensure a smooth sailing project."/>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import AllServices from "../components/AllServices.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "Basements",
  components: {
    Navbar,
    Footer,
    Header,
    AllServices,
  },
};
</script>

<style>
.accordion-button::after{
    width:0
}
.accordion-button :focus{
    outline:none !important
}

</style>