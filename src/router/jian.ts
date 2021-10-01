import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Jian from '@/page/jian/Jian.vue';
import Jian1 from '@/page/jian/Jian1.vue';
import Jian2 from '@/page/jian/Jian2.vue';

const route = [
  {
    path: '/jian',
    redirect: '/jian/jian',
    component: BaseContainer,
    children: [
      {
        path: 'jian',
        name: 'Jian',
        component: Jian,
      },
      {
        path: 'jian1',
        name: 'Jian1',
        component: Jian1,
      },
      {
        path: 'jian2',
        name: 'Jian2',
        component: Jian2,
      },
    ],
  },
] as RouteConfig[];

export default route;