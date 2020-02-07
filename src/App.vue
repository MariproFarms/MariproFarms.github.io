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
			<router-view></router-view>
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
}

main {
	height: 100vh;
}
</style>
