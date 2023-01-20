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
          src="../assets/groundworks-cover.jpg"
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
            GROUNDWORKS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="Groundworks" title2="The Importance of Getting it Right" title3="From Driveways to Foundations" title4="Save £££’s" content1="Here at Bannerman Build Ltd, we cover a variety of groundworks projects. With our team of fully qualified groundworkers, we have the ability to offer a huge variety of groundwork services, covering both the domestic and commercial clients." content2="For many, groundworks may not seem important, especially when it comes to the foundations in home extensions. Out of sight out of mind seems to be an all too common mantra however, at Bannerman Build Ltd, we know only too well the importance of foundations. The importance of getting it right from the very beginning cannot be emphasized. This goes for driveways and footpaths too. Not only must they look great but they must serve a purpose. We ensure they stand up to the job." content3="Groundworks cover quite a broad spectrum of services, as mentioned above, covering both commercial and domestic. From dropped kerbs to foundations within home extensions, to driveways and even public footpaths. Our team has gained a huge amount of experience in a range of projects over a number of years and as such, have become the team to work with." content4="With an experienced team ready to take you through every single stage of any work carried out, you can rest assured knowing that you’re dealing with one company, cutting out a string of different experts, thus saving you money in the long run." heading1="From Start To Finish" heading2="Plans And Action" heading3="Costing" heading4="Health And Safety" para1="Whether you’re on the lookout for a driveway to be installed or perhaps a much larger, more in-depth contracted job such as entire groundwork packages for a large estate, we’re here to help." para2="With groundworks, comes a necessity for extremely well drawn out plans and the carrying out of such plans to the finest detail. We’re here to ensure that happens each and every time." para3="As with any project, we understand that budgets aren’t merely a suggestion but an instruction and we intend to ensure a quality job within the budget specified. This will be agreed upon from the beginning and you’ll be kept informed of any and all spending throughout." para4="It should come as no surprise that health and safety is of the utmost importance, especially when it comes to groundwork. Our team possess the necessary qualifications, and continual training to allow them to remain on top of health and safety at all times."/>
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
    export default {
        name:"Groundworks",
        components:{
            Navbar,
            Footer,
            AllServices
        }
    }
</script>

<style>

</style>