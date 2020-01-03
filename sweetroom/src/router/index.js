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
				component: _import('mainPage'),
				redirect: 'mainPage/friends',
				children: [
					{
						path: 'friends',
						name: 'friends',
						component: _import('friendsWrap'),
						redirect: 'friends/own/',
						children: [
							{
								path: 'own',
								name: 'ownFriend',
								component: _import('friendsMoudle/myFriends')
							}
						]
					},
					{
						path: 'group',
						name: 'group',
						component: _import('groupWrap'),
					}
				]
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
