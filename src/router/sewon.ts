import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Sewon from '@/page/sewon/Sewon.vue';
import Sewon1 from '@/page/sewon/Sewon1.vue';
import Sewon2 from '@/page/sewon/Sewon2.vue';

const route = [
  {
    path: '/sewon',
    redirect: '/sewon/sewon',
    component: BaseContainer,
    children: [
      {
        path: 'sewon',
        name: 'Sewon',
        component: Sewon,
      },
      {
        path: 'sewon1',
        name: 'Sewon1',
        component: Sewon1,
      },
      {
        path: 'sewon2',
        name: 'Sewon2',
        component: Sewon2,
      },
    ],
  },
] as RouteConfig[];

export default route;