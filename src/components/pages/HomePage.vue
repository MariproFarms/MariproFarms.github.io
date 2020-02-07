<script>
export default {
	name: "HomePage"
}
</script>

<template>
	<div>
		<div class="above-fold">
			<h1 class="header-text">Fresh. Sustainable. Local.</h1>
		</div>
		<div class="test" />
	</div>
</template>

<style lang="scss" scoped>
.test {
	height: 100vh;
}
.above-fold {
	background-size: cover;
	background-repeat: none;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: showBackground 700ms ease-in both;
}

.header-text {
	color: $white;
	font-family: "Montserrat", sans-serif;
	font-size: 3rem;
}

@keyframes showBackground {
	0% {
		background-image: linear-gradient(
				rgba(4, 150, 241, 0.55),
				rgba(4, 150, 241, 0.55)
			),
			url("~@/assets/fishcopy.jpg");
		filter: blur(10px);
	}
	50% {
		background-image: linear-gradient(
				rgba(4, 150, 241, 0.55),
				rgba(4, 150, 241, 0.55)
			),
			url("~@/assets/fish.jpg"), url("~@/assets/fishcopy.jpg");
		filter: blur(5px);
	}
	100% {
		background-image: linear-gradient(
				rgba(4, 150, 241, 0.55),
				rgba(4, 150, 241, 0.55)
			),
			url("~@/assets/fish.jpg");
	}
}
</style>
