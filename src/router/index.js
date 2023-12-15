import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
// import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue';
import Details from '../views/Details.vue';
import Resources from '../views/Resources.vue';
// import Study from '../views/Study.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home
  },
  {
    path: '/posts/:book/:path',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/:catchaAll(.*)',
    name: 'NotFound',
    component: NotFound,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
