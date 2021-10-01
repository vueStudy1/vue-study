import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Customers from '../page/Customers.vue';

const route = [
  {
    path: '/',
    redirect: '/customers',
    component: BaseContainer,
    children: [
      {
        path: 'customers',
        name: 'Customers',
        component: Customers,
      },
    ],
  },
] as RouteConfig[];

export default route;