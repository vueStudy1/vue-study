import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Home from '@/page/Home.vue';

const route = [
  {
    path: '/',
    redirect: '/home',
    component: BaseContainer,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
    ],
  },
] as RouteConfig[];

export default route;