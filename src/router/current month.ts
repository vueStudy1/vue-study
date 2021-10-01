import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import CurrentMonth from '../page/CurrentMonth.vue';

const route = [
  {
    path: '/',
    redirect: '/currentMonth',
    component: BaseContainer,
    children: [
      {
        path: 'currentMonth',
        name: 'CurrentMonth',
        component: CurrentMonth,
      },
    ],
  },
] as RouteConfig[];

export default route;