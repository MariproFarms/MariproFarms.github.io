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
			this.scrolling = window.pageYOffset > 60
		}
	}
}
</script>

<template>
	<nav :class="`${scrollingClass} nav`">
		<ul class=" nav__list">
			<li>
				<router-link to="/" class="nav__link">
					<Logo :class="`${scrollingClass} nav__logo`" :height="50" />
				</router-link>
			</li>
			<li>
				<router-link :class="`${scrollingClass} nav__link`" to="/about">
					About
				</router-link>
			</li>
			<li>
				<router-link
					:class="`${scrollingClass} nav__link`"
					to="/contact"
				>
					Contact
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.nav {
	position: fixed;
	width: 100vw;
	padding: $spacer/3;

	&.scrolling {
		box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.2);
		background: $chineseWhite96;
	}
	&__logo {
		color: $chineseWhite88;
	}

	&__link {
		font-size: 1.2rem;
		text-decoration: none;
		text-transform: uppercase;
		color: $chineseWhite88;
		letter-spacing: 2px;
	}
	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 50px;
		padding-right: $spacer;

		li {
			margin: 0 $spacer * 1.5;
			height: 100%;
			line-height: 50px;

			&:first-child {
				margin-left: 5px;
				margin-right: auto;
			}
		}
	}
}

.scrolling {
	color: $ocean95;
}
</style>
