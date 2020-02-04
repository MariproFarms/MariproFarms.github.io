import Vue from "vue"
import Router from "vue-router"

import HomePage from "@/components/pages/HomePage.vue"

Vue.use(Router)

const router = new Router({
	mode: "history",
	base: "/",
	routes: [
		{
			path: "/",
			name: "Home",
			meta: {
				title: "MariPro | Home"
			},
			component: HomePage
		}
	]
})

export default router
