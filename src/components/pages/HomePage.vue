<script>
import image from "@/assets/underwater.jpg"
export default {
	name: "HomePage",
	data() {
		return {
			image
		}
	}
}
</script>

<template>
	<div class="above-fold"></div>
</template>

<style>
.above-fold {
	background: linear-gradient(
			rgba(4, 150, 241, 0.55),
			rgba(4, 150, 241, 0.55)
		),
		url("~@/assets/fish.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
}
</style>
