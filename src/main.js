import Vue from "vue"
import App from "./App.vue"
import router from "./router.js"
import VueProgressiveImage from "vue-progressive-image"
import "./directives/clickOutside"

Vue.config.productionTip = false

Vue.use(VueProgressiveImage)

var handleOutsideClick

Vue.directive("click-outside", {
	bind(el, binding, vNode) {
		console.log(el, binding, vNode)
		handleOutsideClick = (e) => {
			e.stopPropagation()

			if (!el.contains(e.target)) {
				vNode.context[binding.expression]()
			}
		}

		document.addEventListener("click", handleOutsideClick)
	},

	unbind() {
		document.removeEventListener("click", handleOutsideClick)
	}
})

new Vue({
	router,
	render: (h) => h(App)
}).$mount("#app")
