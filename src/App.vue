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
			<Logo width="150" />
		</nav>
		<router-view />
	</div>
</template>

<style>
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

.nav-bar {
	position: absolute;
	top: 0;
}
</style>
