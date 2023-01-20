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
          src="../assets/extensions-cover.jpg"
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
            EXTENSIONS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="House Extensions" title2="We're Always On Hand" title3="We Work With You" title4="Bannerman Build Ltd Home Extensions" content1="Welcome to Bannerman Build Ltd, a specialist construction company offering expertise within home extensions. We have a vast and extensive back catalogue of home extensions that we’ve completed over the years and realise that no two builds are ever the same. We’ve gained a wealth of experience within this sector specifically and as such, bring this knowledge to each project we take on." content2="We pride ourselves on being available at all times. We’re always on hand to discuss all aspects of each project and answer any questions you may have and even ideas you may wish to explore. Whether we’re working on your own or with our in-house architects to bring your drawings to life, we will ensure your build complies with regulations and of course, meets your expectations." content3="It’s important to us, to our entire team that we work with you every step of the way, making sure that you’re confident at each stage of the project. Our team of experts have the ability to take you from the very early planning stages all the way through to construction and of course, final inspections." content4="We use only the very best in-house tradesman to cover the necessary paperwork such as Gas Safe and NIC certificates. We will not leave a single stone unturned, ensuring every aspect of a project is taken care of. With Bannerman Build Ltd’s Home Extensions, you’re in good hands." heading1="Property Type" heading2="Gain Space And Retain Features" heading3="Increase Your Property Value" heading4="Quality Workmanship" para1="We’ve worked on a variety of projects over the years and as such, have gained a real understanding of the structure of a multitude of different projects, from period properties to more contemporary homes." para2="Our knowledge and ability allows us to help you create space, taking advantage of things such as natural light, while also ensuring we do not compromise on the important features of your home." para3="A home extension doesn’t just offer your family extra space in which to grow, it also increases the value of your property too without the unnecessary costs of selling and subsequently buying a bigger home." para4="With Bannerman Build Ltd, we guarantee quality workmanship every single step of the way and with a high rate of return clients; our promise to exceed your expectations is always delivered. From groundworks to final inspections, we’ll be there every step of the way."/>
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
    export default {
        name:"Extensions",
        components:{
            Navbar,
            Footer,
            AllServices
        }
    }
</script>

<style>

</style>