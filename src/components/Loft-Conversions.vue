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
          src="../assets/loft-conversions-cover.jpg"
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
            LOFT CONVERSIONS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices
    title1="Loft Conversions"
    title2="Optimise Space"
    title3="Everything’s Covered"
    title4="Save £££’s"
    content1="Here at Bannerman Build Ltd, we offer high quality loft conversions. Our experience and knowledge has seen us work on hundreds of loft conversions over the years and as such, we’ve become one the go-to construction companies."
    content2="The reason that many choose a loft conversion is for the simple fact of space, so when planning to convert your loft, we understand only too well the importance when it comes to optimising space while achieving a natural look in your home. Loft conversions allow you to stay in the home you love, the area you love and enjoy that much-needed added space."
    content3="When it comes to loft conversions, you’ll be happy to know that we carry out all of the necessities from design to planning permission and all the way through to managing the most intricate details of the build itself. We know only too well that every conversion is different which means every detail must be considered."
    content4="A loft conversion is often the cheapest, most efficient and in some cases, the easiest way to increase space in the home. It’s also a much more sensible option considering the current climate and rising cost of housing."
    heading1="From Start To Finish"
    heading2="Drawings and Planning Permission Applications"
    heading3="Costing"
    heading4="Final Inspections"
    para1="We’ll ensure everything is covered from start to finish leaving you without any unnecessary stress. Rest assured your project will be in the hands of professionals."
    para2="While some do choose to hire an architect, a steel works drawing officer (if and when needed) along with a construction company, we help you cut costs and time by covering everything from drawings to planning permission."
    para3="We know how important it is to ensure that costs are kept within a certain budget which is why we’ll do our best to keep you as informed as possible when it comes to costing, every step of the way."
    para4="Final inspections are a legal requirement of any build but with our experience and knowledge of the industry, we’ll ensure a smooth and efficient finish during the final inspection."
  />
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Loft-Conversions",
  components: {
    Navbar,
    Footer,
    AllServices,
  },
};
</script>

<style>
 
.heading{
    position:relative;
    bottom:10rem
  }
  @media only screen and (max-width: 576px) {
  .serviceimg {
    height: 17rem;
  }
  .heading{
    position:relative;
    bottom:11rem
  }
} 
  @media only screen and (min-width: 800px) and (max-width: 991px) {
  .heading{
    position:relative;
    bottom:12rem
  }
} 
@media only screen and (min-width: 992px) {
  .heading{
    position:relative;
    bottom:15rem
  }
}
@media only screen and (min-width: 1200px) {
  .heading{
    position:relative;
    bottom:20rem
  }
}
@media only screen and (min-width: 1400px) {
  .heading{
    position:relative;
    bottom:25rem
  }
}
</style>