import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Youngkyun from '@/page/youngkyun/Youngkyun.vue';
import Youngkyun1 from '@/page/youngkyun/Youngkyun1.vue';
import Youngkyun2 from '@/page/youngkyun/Youngkyun2.vue';

const route = [
  {
    path: '/youngkyun',
    redirect: '/youngkyun/youngkyun',
    component: BaseContainer,
    children: [
      {
        path: 'youngkyun',
        name: 'Youngkyun',
        component: Youngkyun,
      },
      {
        path: 'youngkyun1',
        name: 'Youngkyun1',
        component: Youngkyun1,
      },
      {
        path: 'youngkyun2',
        name: 'Youngkyun2',
        component: Youngkyun2,
      },
    ],
  },
] as RouteConfig[];

export default route;