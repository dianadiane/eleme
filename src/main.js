// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import Header from './components/Header/Header.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
/*import goods from './components/goods/goods.vue'
import patings from './components/patings/patings.vue'
import seller from './components/seller/seller.vue'*/

Vue.use(VueRouter);
/* eslint-disable no-new */
const RouterConfig = {
  mode: 'history',
  routes: router
};

  const routes = [
 { path: '/goods', component: goods },
 { path: '/Header', component: Header },
 { path: '/ratings', component: ratings },
 { path: '/seller', component: seller },
 ];

const router = new VueRouter({
  linkActiveClass:'active',
  routes
});

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',

});
