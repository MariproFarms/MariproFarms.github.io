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
	<nav>
		<Logo class="logo" width="190" height="150" />
		<ul>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	position: absolute;
}

.logo {
	margin-left: 20px;
}
</style>
