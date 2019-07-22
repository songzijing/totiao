import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pags/Home'
import Detail from './../pags/Detail'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})