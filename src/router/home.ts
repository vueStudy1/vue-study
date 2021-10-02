import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Home from '@/page/Home.vue';

const route = [
  {
    path: '/',
    redirect: '/index',
    component: BaseContainer,
    children: [
      {
        path: 'index',
        name: 'Home',
        component: Home,
      },
    ],
  },
] as RouteConfig[];

export default route;