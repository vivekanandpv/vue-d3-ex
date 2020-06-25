import Home from '../components/Home.vue';
// import About from '../components/About.vue';
import News from '../components/News.vue';
import Contact from '../components/Contact.vue';
import NotFound from '../components/NotFound.vue';
import Registration from '../components/Registration.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: () => import('../components/About.vue'),
  },
  {
    path: '/news',
    component: News,
    props: true,
    children: [
      {
        path: ':city',
        component: News,
        props: true,
      },
      {
        path: ':city/:year',
        component: News,
        props: true,
      },
    ],
  },

  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/registration',
    component: Registration,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
