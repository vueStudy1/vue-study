import Vue from 'vue';
import Router, { RawLocation, Route, RouteConfig, RouterOptions } from 'vue-router';

import homeRoute from './home';
import currentMonthRoutem from './current month';
import customers from './customers';
import daum from './daum';
import krx from './krx';
import tensorflow from './tensorflow';

import PageNotFound from '../components/PageNotFound.vue';
import PageCant from '../components/PageCant.vue';
import NotSupported from '../components/NotSupported.vue';

const originalPush = Router.prototype.push;
Router.prototype.push = async function push(location: RawLocation) {
  let route: any;
  try {
    route = await originalPush.call<Router, [RawLocation], Promise<Route>>(this, location);
  } catch (err) {
    if (err.name !== 'NavigationDuplicated') throw err;
  }

  return route;
};

Vue.use(Router);

//const baseURL = window.env.IPR_BASE_ROUTE !== undefined ? window.env.IPR_BASE_ROUTE + '/' : '';

function isSupport() {
  const test = function(regexp: RegExp) {
    return regexp.test(window.navigator.userAgent);
  };
  switch (true) {
    case test(/edg/i):
      return true; // 'Microsoft Edge'
    case test(/trident/i):
      return false; // 'Microsoft Internet Explorer';
    case test(/firefox|fxios/i):
      return true; //'Mozilla Firefox';
    case test(/opr\//i):
      return false; //'Opera';
    case test(/ucbrowser/i):
      return false; //'UC Browser';
    case test(/samsungbrowser/i):
      return false; //'Samsung Browser';
    case test(/chrome|chromium|crios/i):
      return true; //'Google Chrome';
    case test(/safari/i):
      return true; //'Apple Safari';
    default:
      return false; //'Other';
  }
}

const routerOptions: RouterOptions = {
  mode: 'history',
  //base: baseURL,
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [] as RouteConfig[]
};

if (isSupport()) {
  routerOptions.routes = [
  ...homeRoute,
  ...currentMonthRoutem,
  ...customers,
  ...daum,
  ...krx,
  ...tensorflow,
  {
    path: '/cant',
    component: PageCant
  }, {
    path: '*',
    component: PageNotFound
  }];
} else {
  routerOptions.routes = [{
    path: '/not-supported',
    component: NotSupported
  },{
    path: '*',
    redirect: '/not-supported'
  }];
}

const router = new Router(routerOptions);

export default router;