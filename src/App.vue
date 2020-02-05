<script>
import Logo from "@/components/Logo"
export default {
	name: "app",
	components: {
		Logo
	}
}
</script>

<template>
	<div id="app">
		<nav class="nav-bar">
			<Logo class="logo" width="250" />
		</nav>
		<main>
			<router-view />
		</main>
	</div>
</template>

<style lang="scss">
@import "@/styles/reset.scss";
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
body {
	margin: 0;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	animation-name: appear;
	animation-duration: 2s;
}

nav {
	position: absolute;
}

.logo {
	margin-left: 20px;
}

main {
	height: 100vh;
}
</style>
