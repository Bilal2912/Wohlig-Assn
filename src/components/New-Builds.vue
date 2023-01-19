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
          src="../assets/new-builds-cover.jpg"
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
            NEW BUILDS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="New Builds" title2="Varied New Build Projects" title3="We Get To Know Our Clients" title4="Bannerman Build Ltd Only Hire the Best" content1="We carry out New Build projects and have been doing so for a number of years. We’ve gained an excellent reputation for quality of work, innovation and delivering projects on time, every time, most notably within budget too. While we boast a strong, local presence, we’re also called upon in the surrounding areas of the UK too thanks to the beauty of word of mouth." content2="We’ve completed a wide variety of projects when it comes to new builds. From education industries to food, medical and industrial, and even retail and leisure, along with residential and commercial. This has allowed our team and the company as a whole to gain a very specialist knowledge when it comes to new builds." content3="At Bannerman Build Ltd, we believe we offer a different service; the difference being “our people”. We operate as a construction company by not only understanding, but building relationships with our clients, ensuring a fully open channel of communication during even the very early stages of each project." content4="We work with our clients openly from start to finish, offering them a partner within each project which means we can offer real innovative ideas, along with alternative solutions and even ideas for better value should it be appropriate. It’s for reasons such as this that we’ve gained a huge amount of repeat custom, which as you’ll no doubt agree, speaks volumes." heading1="From Start To Finish" heading2="New Builds" heading3="We Look After Our Clients Now" heading4="Builders You Can Trust" para1="Our expertise within the new builds sector means that we’re capable of taking on any project from start to finish. From plans all the way through building and final inspections, ensuring quality every step of the way." para2="From residential new build projects to much larger scale, commercial new builds, our team has the expertise and knowledge to take on any project with confidence and exceed each and every client's expectations." para3="While many companies may grapple for the most projects in any given time, our aim is to focus and ensure the happiness of the clients we’re working with now." para4="With Bannerman Build Ltd, your guaranteed builders you can trust; builders who’ll not only listen to their client’s needs, but who’ll offer constructive advice, solutions to problems and invaluable insight."/>
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
    export default {
        name:"New-Builds",
        components:{
            Navbar,
            Footer,
            AllServices
        }
    }
</script>

<style lang="scss" scoped>

</style>