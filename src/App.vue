<script>
import Logo from "@/components/Logo.vue"

export default {
	name: "app",
	components: {
		Logo
	}
}
</script>

<template>
	<div id="app">
		<Logo alt="Maripro logo" width="500" />
	</div>
</template>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
