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
	background-image: url("~@/assets/underwater.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
}
</style>
