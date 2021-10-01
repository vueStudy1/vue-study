import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Jaeeun from '@/page/jaeeun/Jaeeun.vue';
import Jaeeun1 from '@/page/jaeeun/Jaeeun1.vue';
import Jaeeun2 from '@/page/jaeeun/Jaeeun2.vue';

const route = [
  {
    path: '/jaeeun',
    redirect: '/jaeeun/jaeeun',
    component: BaseContainer,
    children: [
      {
        path: 'jaeeun',
        name: 'Jaeeun',
        component: Jaeeun,
      },
      {
        path: 'jaeeun1',
        name: 'Jaeeun1',
        component: Jaeeun1,
      },
      {
        path: 'jaeeun2',
        name: 'Jaeeun2',
        component: Jaeeun2,
      },
    ],
  },
] as RouteConfig[];

export default route;