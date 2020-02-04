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

<style>
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
