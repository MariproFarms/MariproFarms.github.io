<script>
import Logo from "../assets/logo.svg"
export default {
	name: "NavBar",
	components: {
		Logo
	},
	data() {
		return {
			isScrolling: false,
			isHomePage: true
		}
	},
	watch: {
		$route(to) {
			this.isHomePage = to.name === "Home"
		}
	},
	mounted() {
		document.addEventListener("scroll", this.getNavStyle)
		this.getNavStyle()
	},
	beforeDestroy() {
		document.removeEventListener("scroll", this.getNavStyle)
	},
	computed: {
		isLightTheme() {
			return this.isScrolling || !this.isHomePage
		},
		scrollingClass() {
			return this.isLightTheme ? "light-theme" : ""
		}
	},
	methods: {
		getNavStyle() {
			this.isScrolling = window.pageYOffset > 30
			this.isHomePage = this.$route.name === "Home"
		}
	}
}
</script>

<template>
	<nav :class="`${scrollingClass} nav`">
		<router-link to="/">
			<Logo width="150px" />
		</router-link>
		<ul class="nav__list">
			<li>
				<router-link to="/about">
					About
				</router-link>
			</li>
			<li>
				<router-link to="/contact">
					Contact
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.nav {
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100vw;
	z-index: 10;
	padding: $spacer * 1.5;

	&__list {
		display: flex;
		position: relative;

		li {
			text-transform: uppercase;
			display: flex;
			align-items: center;
			margin-left: $spacer * 2;
		}
	}
}
</style>
