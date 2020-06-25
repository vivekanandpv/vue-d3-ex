import Home from '../components/Home.vue';
// import About from '../components/About.vue';
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
    //contact and bar point to same component
    path: '/contact',
    component: Contact,
    alias: '/bar',
  },
  {
    //foo will direct to about
    path: '/foo',
    redirect: '/about',
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
