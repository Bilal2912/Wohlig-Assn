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
          src="../assets/bathrooms-cover.jpg"
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
            BATHROOMS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="Groundworks" title2="The Importance of Getting it Right" title3="From Driveways to Foundations" title4="Save £££’s" content1="Here at Bannerman Build Ltd, we cover a variety of groundworks projects. With our team of fully qualified groundworkers, we have the ability to offer a huge variety of groundwork services, covering both the domestic and commercial clients." content2="For many, groundworks may not seem important, especially when it comes to the foundations in home extensions. Out of sight out of mind seems to be an all too common mantra however, at Bannerman Build Ltd, we know only too well the importance of foundations. The importance of getting it right from the very beginning cannot be emphasized. This goes for driveways and footpaths too. Not only must they look great but they must serve a purpose. We ensure they stand up to the job." content3="Groundworks cover quite a broad spectrum of services, as mentioned above, covering both commercial and domestic. From dropped kerbs to foundations within home extensions, to driveways and even public footpaths. Our team has gained a huge amount of experience in a range of projects over a number of years and as such, have become the team to work with." content4="With an experienced team ready to take you through every single stage of any work carried out, you can rest assured knowing that you’re dealing with one company, cutting out a string of different experts, thus saving you money in the long run." heading1="From Start To Finish" heading2="Efficient And Stress Free" heading3="Costing" heading4="The Finished Product" para1="We’re pleased to boast the ability to offer you a complete service. From planning stages to the finished product, we’ll be with you every single step of the way, bringing our experience and knowledge to show you the most effective options without leaving you to deal with a myriad of different trades people." para2="Our bathroom fitters are known for being not only to a high-standard but efficient and stress-free too. We’ll handle everything from planning to installation and even those last minute finishing touches with the least interruption to you." para3="Budgets are important. If they weren’t, there wouldn’t be a budget set out in the first place, right? That’s why we’ll discuss costing with you every step of the way. If we’re concerned one area may go over budget, we’ll do our best to advise solutions to ensure it remains within budget. On that, you can rely." para4="When it comes to the finished product, we’ll go out of our way to ensure it not only meets your expectations but exceeds them too. We want you to be blown away by your bathroom and enjoy using it, as much as we enjoyed creating it."/>
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
    export default {
        name:"Bathrooms",
        components:{
            AllServices,
            Navbar,
            Footer
        }
    }
</script>

<style>

</style>