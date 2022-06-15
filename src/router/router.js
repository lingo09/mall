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
            path: '/about',
            name: 'about',
            component: () => import( /* webpackChunkName: "about" */ '../views/category/About.vue')
        }
    ],
    mode: 'history'
})