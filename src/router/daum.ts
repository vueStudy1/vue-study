import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Daum from '@/page/Daum.vue';

const route = [
  {
    path: '/',
    redirect: '/daum',
    component: BaseContainer,
    children: [
      {
        path: 'daum',
        name: 'Daum',
        component: Daum,
      },
    ],
  },
] as RouteConfig[];

export default route;