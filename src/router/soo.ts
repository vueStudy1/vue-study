import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Soo from '@/page/soo/Soo.vue';
import Soo1 from '@/page/soo/Soo1.vue';
import Soo2 from '@/page/soo/Soo2.vue';

const route = [
  {
    path: '/soo',
    redirect: '/soo/soo',
    component: BaseContainer,
    children: [
      {
        path: 'soo',
        name: 'Soo',
        component: Soo,
      },
      {
        path: 'soo1',
        name: 'Soo1',
        component: Soo1,
      },
      {
        path: 'soo2',
        name: 'Soo2',
        component: Soo2,
      },
    ],
  },
] as RouteConfig[];

export default route;