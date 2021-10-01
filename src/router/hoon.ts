import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Hoon from '@/page/hoon/Hoon.vue';
import Hoon1 from '@/page/hoon/Hoon1.vue';
import Hoon2 from '@/page/hoon/Hoon2.vue';

const route = [
  {
    path: '/hoon',
    redirect: '/hoon/hoon',
    component: BaseContainer,
    children: [
      {
        path: 'hoon',
        name: 'Hoon',
        component: Hoon,
      },
      {
        path: 'hoon1',
        name: 'Hoon1',
        component: Hoon1,
      },
      {
        path: 'hoon2',
        name: 'Hoon2',
        component: Hoon2,
      },
    ],
  },
] as RouteConfig[];

export default route;