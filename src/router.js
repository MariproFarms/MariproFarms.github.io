import Vue from "vue"
import Router from "vue-router"

import HomePage from "@/components/pages/HomePage.vue"

Vue.use(Router)

const router = new Router({
	mode: "history",
	base: "/maripro",
	routes: [
		{
			path: "/",
			name: "Home",
			meta: {
				title: "MariPro | Home"
			},
			component: HomePage
		},
		{
			path: "/about",
			name: "About",
			meta: {
				title: "MariPro | About"
			}
			// TODO: Add component for page placeholder
		},
		{
			path: "/contact",
			name: "Contact",
			meta: {
				title: "MariPro | Contact"
			}
			// TODO: Add component for page placeholder
		}
	]
})

export default router
