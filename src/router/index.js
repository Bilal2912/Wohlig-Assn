import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Basements from '../components/Basements.vue'
import Bathrooms from '../components/Bathrooms.vue'
import Builders from '../components/Builders.vue'
import Extensions from '../components/Extensions.vue'
import Groundworks from '../components/Groundworks.vue'
import Kitchens from '../components/Kitchens.vue'
import LoftConversions from '../components/Loft-Conversions.vue'
import NewBuilds from '../components/New-Builds.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
    {
      path:'/services',
      name:'services',
      component: Services
    },
    {
      path:'/services/basements',
      name:'basements',
      component: Basements
    },
    {
      path:'/services/bathrooms',
      name:'bathrooms',
      component: Bathrooms
    },
    {
      path:'/services/builders',
      name:'builders',
      component: Builders
    },
    {
      path:'/services/extensions',
      name:'extensions',
      component: Extensions
    },
    {
      path:'/services/groundworks',
      name:'groundworks',
      component: Groundworks
    },
    {
      path:'/services/kitchens',
      name:'kitchens',
      component: Kitchens
    },
    {
      path:'/services/loft-conversions',
      name:'loft-conversions',
      component: LoftConversions
    },
    {
      path:'/services/new-builds',
      name:'new-builds',
      component: NewBuilds
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
