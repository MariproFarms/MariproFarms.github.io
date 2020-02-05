<script>
import NavBar from "@/components/NavBar"
export default {
	name: "app",
	components: {
		NavBar
	}
}
</script>

<template>
	<div id="app">
		<NavBar />
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
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	font-family: "Montserrat", sans-serif;
	animation-name: appear;
	animation-duration: 2s;
}

main {
	height: 100vh;
}
</style>
