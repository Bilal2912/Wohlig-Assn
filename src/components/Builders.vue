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
          src="../assets/builders-cover.jpg"
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
            BUILDERS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="Builders" title2="Satisfaction Guaranteed" title3="From Driveways to Foundations" title4="Bannerman Build Ltd Only Hire the Best" content1="Are you looking for experienced, qualified builders? Then look no further than Bannerman Build Ltd. We’re a construction company that offers our clients years of experience within the industry, covering projects from home extensions to commercial groundworks and everything in between." content2="With our continual efforts to keep up with the latest technologies, innovations and materials, we ensure a quality job is carried out each and every time. Our high standards and professionalism are paramount and it’s for this reason that our clients are guaranteed satisfaction each and every time, just take a look at our reviews!" content3="Our team of experienced builders cover all bases allowing our team to offer high quality finishes in everything from driveways to laying foundations of your new home extension. We build everything to the individual specifications of each individual client, maintaining our high standards every step of the way." content4="Our reputation has been built over a number of years and as such, is incredibly important to us. It’s important that we maintain this and we do so by hiring only the most skilled workers in the area. We also ensure such a varied team of builders that we can keep almost every aspect of any job, in house and therefore, keep each project as efficient as possible." heading1="From Start To Finish" heading2="Building Projects" heading3="Costing" heading4="Builders You Can Trust" para1="Our team is so varied that we can offer expert advice and assistance in almost any matter, which allows us to take each project from the very beginning and see it through until the end." para2="From new builds to home extensions, our builders can and will complete any project you may have with the finest materials, the latest technologies and of course, the most efficient service." para3="Keeping all aspects of the job under one roof helps us to not only keep the best streams of communications during each project but also keep costs down." para4="We know only too well that the trust within the building trade has wavered at times due to an unprecedented number of “cowboy” builders. Thankfully, our past and current client reviews are a testament to the fact that we’re builders you can trust."/>
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
    export default {
        name:"Builders",
        components:{
            Navbar,
            AllServices,
            Footer
        }
    }
</script>

<style>


</style>