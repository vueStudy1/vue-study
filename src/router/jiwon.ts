import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Jiwon from '@/page/jiwon/Jiwon.vue';
import Jiwon1 from '@/page/jiwon/Jiwon1.vue';
import Jiwon2 from '@/page/jiwon/Jiwon2.vue';

const route = [
  {
    path: '/jiwon',
    redirect: '/jiwon/jiwon',
    component: BaseContainer,
    children: [
      {
        path: 'jiwon',
        name: 'Jiwon',
        component: Jiwon,
      },
      {
        path: 'jiwon1',
        name: 'Jiwon1',
        component: Jiwon1,
      },
      {
        path: 'jiwon2',
        name: 'Jiwon2',
        component: Jiwon2,
      },
    ],
  },
] as RouteConfig[];

export default route;