<script>
export default {
	name: "HomePage"
}
</script>

<template>
	<div class="above-fold">
		<h1 class="header-text">Fresh. Sustainable. Local.</h1>
	</div>
</template>

<style lang="scss" scoped>
.above-fold {
	background: linear-gradient(
			rgba(4, 150, 241, 0.55),
			rgba(4, 150, 241, 0.55)
		),
		url("~@/assets/fish.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.header-text {
	color: $white;
	font-family: "Montserrat", sans-serif;
	font-size: 3rem;
}
</style>
