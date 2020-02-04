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
	<div class="above-fold">
		<transition name="fade">
			<h1 class="header-text">Fresh. Sustainable. Local.</h1>
		</transition>
	</div>
</template>

<style scoped>
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
	color: rgba(225, 225, 225, 1);
	font-family: "Montserrat", sans-serif;
	font-size: 3rem;
	animation-name: appear;
	animation-duration: 4s;
}

@keyframes appear {
	0% {
		color: rgba(225, 225, 225, 0);
	}
	100% {
		color: rgba(225, 225, 225, 1);
	}
}
</style>
