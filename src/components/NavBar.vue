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
		<ul>
			<li :class="scrollingClass">
				<router-link to="/">
					<Logo width="100%" height="100%" />
				</router-link>
			</li>
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
	z-index: 10;

	&.light-theme {
		animation: scrollColor 500ms forwards linear;

		a {
			animation: scrollColor 500ms forwards ease-in;
		}
	}

	ul {
		display: flex;
		justify-content: flex-end;
		width: 100vw;
		position: relative;

		.light-theme {
			animation: scrollShrink 2s forwards;
		}
	}

	li {
		margin: $spacer;

		&:first-of-type {
			margin: $spacer/2;
			margin-right: auto;
		}

		a {
			font-size: 1.3rem;
		}
	}
}

@keyframes scrollShrink {
	0% {
		width: 250px;
	}
	100% {
		width: 120px;
	}
}

@keyframes scrollColor {
	0% {
		background: rgba(0, 0, 0, 0);
		color: $ocean95;
	}

	100% {
		background: white;
		color: $ocean95;
	}
}
</style>
