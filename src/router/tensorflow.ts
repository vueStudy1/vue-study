import { RouteConfig } from 'vue-router';
import BaseContainer from '@/containers/Full.vue';

import Tensorflow from '@/page/Tensorflow.vue';

const route = [
  {
    path: '/',
    redirect: '/tensorflow',
    component: BaseContainer,
    children: [
      {
        path: 'tensorflow',
        name: 'Tensorflow',
        component: Tensorflow,
      },
    ],
  },
] as RouteConfig[];

export default route;