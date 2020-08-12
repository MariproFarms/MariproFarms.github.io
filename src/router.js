import Vue from "vue"
import Router from "vue-router"

import HomePage from "@/components/pages/HomePage.vue"
import AboutPage from "@/components/pages/AboutPage.vue"
import ContactPage from "@/components/pages/ContactPage.vue"
import SustainabilityPage from "@/components/pages/SustainabilityPage.vue"

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
			},
			component: AboutPage
		},
		{
			path: "/contact",
			name: "Contact",
			meta: {
				title: "MariPro | Contact"
			},
			component: ContactPage
		},
		{
			path: "/sustainability",
			name: "Sustainability",
			meta: {
				title: "MariPro | Sustainability"
			},
			component: SustainabilityPage
		}
	],
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})

export default router
