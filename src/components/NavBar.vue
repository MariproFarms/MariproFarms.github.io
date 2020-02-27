<script>
import Logo from "../assets/logo.svg"
export default {
	name: "NavBar",
	components: {
		Logo
	},
	data() {
		return {
			scrolling: false
		}
	},
	mounted() {
		document.addEventListener("scroll", this.getNavStyle)
	},
	beforeDestroy() {
		document.removeEventListener("scroll", this.getNavStyle)
	},
	computed: {
		scrollingClass() {
			return this.scrolling ? "scrolling" : ""
		}
	},
	methods: {
		getNavStyle() {
			this.scrolling = window.pageYOffset > 30
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

	&.scrolling {
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

		.scrolling {
			animation: scrollShrink 2s forwards;
		}
	}

	li {
		margin: $spacer;
		line-height: 100%;

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
