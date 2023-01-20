<template>
    <div class="container-fluid container-lg">
    <div class="row">
      <div class="col-12 col-md-6 px-5 py-5">
        <Header :title="title1" />
        <p class="lead mt-2">
          {{ content1 }}
        </p>
      </div>
      <div class="col-12 col-md-6 px-5 pb-5 pt-md-5">
        <Header :title="title2" />
        <p class="lead mt-2">
          {{ content2 }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 px-5 pb-5">
        <Header :title="title3" />
        <p class="lead mt-2">
          {{ content3 }}
        </p>
      </div>
      <div class="col-12 col-md-6 px-5 pb-5">
        <Header :title="title4" />
        <p class="lead mt-2">
          {{ content4 }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col px-5 py-3">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button bg-primary text-white fs-6"
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
                {{ para1 }}
              </div>
            </div>
          </div>
          <div class="accordion-item mt-4 border-0">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed bg-primary text-white rounded-top fs-6"
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
                {{ para2 }}
              </div>
            </div>
          </div>
          <div class="accordion-item mt-4 border-0">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed bg-primary text-white rounded-top fs-6"
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
                {{ para3 }}
              </div>
            </div>
          </div>
          <div class="accordion-item my-4 border-0">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed bg-primary text-white rounded-top rounded-0 fs-6"
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