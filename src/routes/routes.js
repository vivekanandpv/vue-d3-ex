import Home from '../components/Home.vue';
import About from '../components/About.vue';
import News from '../components/News.vue';
import Contact from '../components/Contact.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        path: ':city',
        component: News,
      },
      {
        path: ':city/:year',
        component: News,
      },
    ],
  },

  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
