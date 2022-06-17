import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: () => import( /* webpackChunkName: "about" */ '../views/category/category.vue')
    }, {
      path: '/cart',
      name: 'cart',
      component: () => import( /* webpackChunkName: "about" */ '../views/cart/cart.vue')
    }, {
      path: '/profile',
      name: 'profile',
      component: () => import( /* webpackChunkName: "about" */ '../views/profile/profile.vue')
    }
  ],
  mode: 'history'
})