<template>
    <div class="container">
    <div class="row">
      <div class="col p-5">
        <Header :title="title1" />
        <p class="lead mt-2">
          <!-- Here at Bannerman Build Ltd, we’ve worked on a number of basement
          construction projects over the years and as such, we have gained an
          invaluable amount of knowledge, giving us the ability to undertake all
          aspects of your project from excavations to formwork, steel
          reinforcement and more. -->
          {{ content1 }}
        </p>
      </div>
      <div class="col p-5">
        <Header :title="title2" />
        <p class="lead mt-2">
          <!-- Here at Bannerman Build Ltd, our expert team produce basements that
          are light, airy and have the ability to be used for many purposes. Not
          only will they offer you that much-needed extra space, but they can
          also increase the value of your home, more than many realize, giving
          you further possibilities for modern living and of course, extra
          square footage. -->
          {{ content2 }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col p-5">
        <Header :title="title3" />
        <p class="lead mt-2">
          <!-- Unlike regular home extensions, basement construction requires
          specific factors being considered. From site conditions to soil type,
          proposed use of basement to the basement construction type and even
          the necessity to protect against contaminants within the soil and
          ground gasses. -->
          {{ content3 }}
        </p>
      </div>
      <div class="col p-5">
        <Header :title="title4" />
        <p class="lead mt-2">
          <!-- Bannerman’s basement construction services allow you to create extra
          space in your home that you may have never thought possible. We can
          plan, construct and complete your vision from start to finish by
          digging within the current footprint of your home. -->
          {{ content4 }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col p-5">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button bg-primary text-white fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {{ heading1 }}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-4">
                <!-- Basement construction gives you the ability to gain extra square footage within the confines of your home's current footprint and gain, in some cases, a whopping 30% increase in value -->
                {{ para1 }}
              </div>
            </div>
          </div>
          <div class="accordion-item mt-4 border-0">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed bg-primary text-white rounded-top fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {{ heading2 }}
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-4">
                <!-- We understand only too well that budgets are important, especially for our domestic clients and as such, we discuss costing from the very beginning, keeping you updated at all times along the way -->
                {{ para2 }}
              </div>
            </div>
          </div>
          <div class="accordion-item mt-4 border-0">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed bg-primary text-white rounded-top fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {{ heading3 }}
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-4">
                <!-- Our building projects take us all around the UK. We’ve become the go-to construction company thanks to our team of experts. -->
                {{ para3 }}
              </div>
            </div>
          </div>
          <div class="accordion-item mt-4 border-0">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed bg-primary text-white rounded-top rounded-0 fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                {{ heading4 }}
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-4">
                <!-- With our expertise in the area of basement construction, we’ve become familiar with local soils, local councils and restrictions as well as the associated legalities and as such, can plan from the very beginning to ensure a smooth sailing project. -->
                {{ para4 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import { RouterLink, RouterView } from "vue-router";
    export default {
        name:"AllServices",
        components:{
            Navbar,
            Footer,
            Header
        },
        props:["title1", "title2", "title3", "title4", "content1", "content2", "content3", "content4", "heading1", "heading2", "heading3", "heading4", "para1", "para2", "para3", "para4"]
    }
</script>

<style>
.accordion-button::after{
    width:0
}
.accordion-button:focus{
    box-shadow: none;
    border-color: rgba(0,0,0,.125);
}
</style>