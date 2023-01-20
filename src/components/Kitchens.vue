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
          src="../assets/kitchens-cover.jpg"
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
            KITCHENS
          </h1>
        </div>
      </div>
    </div>
  </div>
  <AllServices title1="Kitchen Fitters" title2="The Heart Of Your Home" title3="The Importance of Getting it Right" title4="Save £££’s" content1="Here at Bannerman Build Ltd, we’ve become the go-to kitchen fitters and for good reason too. For years our expert team of kitchen fitters have been installing kitchens of all shapes and styles, to the highest standards. From small apartments, to larger, open plan homes, whether you’re looking for off the shelf or something more bespoke, Bannerman Build Ltd can help." content2="Our kitchens are known as the heart of our home and for good reason too; it’s where we prepare food and often eat, it’s where we prepare drinks and more often than not it’s where we tend to congregate at parties, or so the lyrics go. With this in mind, ensuring your kitchen looks and feels perfect is essential." content3="Our team of experts have the experience and knowledge to ensure your kitchen installation is carried out to the highest standard, ensuring even the smallest detail is given the attention it deserves. From the essential prep work to the finishing touches, we get it right the first time, every time." content4="As you may know, our team of experts provide a multitude of services, from extensions to groundworks and of course, interior work such as bathroom installations and of course, kitchens. The fact that we use our own team for each and every client means a lack of outside services. We provide everything you need for the entire job and as a result of keeping things in-house, will save you money from start to finish." heading1="From Start To Finish" heading2="Plans And Action" heading3="Costing" heading4="The Finished Product" para1="We provide a complete service, handling your every need from the very first phone call, all the way through to the finished item. That means a stress-free experience for you with a distinct lack of having to deal with a multitude of people. Isn’t that what we all want?" para2="Just one of the reasons clients come back to us time and again is for the simple fact that we listen to you. We listen to your vision, the style you’re wanting to achieve and we ensure that’s exactly what we provide. From the planning stage, through to installation, our kitchen fitters have it all covered." para3="At Bannerman Build Ltd, we understand more than anyone that the budget set out at the beginning isn’t merely a guide but a must. That’s why we communicate with you every step of the way, taking costing as seriously as you would." para4="With years of expertise and a great deal of knowledge under our belts, we can guarantee that you’ll quite simply love the finished product. We go above and beyond to not only meet your expectations but exceed them."/>
  <Footer />
</template>

<script>
import AllServices from "../components/AllServices.vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
    export default {
        name:"Kitchens",
        components:{
            Navbar,
            Footer,
            AllServices
        }
    }
</script>

<style lang="scss" scoped>

</style>