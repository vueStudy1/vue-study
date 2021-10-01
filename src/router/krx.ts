import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Krx from '@/page/Krx.vue';

const route = [
  {
    path: '/',
    redirect: '/krx',
    component: BaseContainer,
    children: [
      {
        path: 'krx',
        name: 'Krx',
        component: Krx,
      },
    ],
  },
] as RouteConfig[];

export default route;