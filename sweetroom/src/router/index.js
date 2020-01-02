import Vue from 'vue'
import _import from './_import'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: _import('login')
	},
	{
		path: '/home',
		name: 'home',
        component: _import('home'),
        redirect: '/home/mainPage',
        children: [
            {
                path: 'mainPage',
                name: 'mainPage',
                component: _import('mainPage')
            }
        ]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
