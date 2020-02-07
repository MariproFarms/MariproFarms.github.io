<script>
import Logo from "@/components/Logo"
export default {
	name: "NavBar",
	components: {
		Logo
	}
}
</script>

<template>
	<nav class="nav">
		<router-link to="/"
			><Logo class="nav__logo" width="190" height="120"
		/></router-link>
		<ul class="nav__list">
			<li>
				<router-link class="nav__link" to="/about">
					About
				</router-link>
			</li>
			<li>
				<router-link class="nav__link" to="/contact">
					Contact
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.nav {
	position: absolute;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__logo {
		margin-left: 20px;
	}

	&__list {
		display: flex;
	}

	&__link {
		margin: 0 $spacer;
		font-size: 1.5rem;
		text-decoration: none;
		text-transform: uppercase;
		transform: translateY(50%);
		color: $chineseWhite88;
		letter-spacing: 2px;
	}
}
</style>
