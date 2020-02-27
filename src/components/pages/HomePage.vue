<script>
const backgroundPlaceholder = require("@/assets/fishcopy.jpg")
const backgroundImg = require("@/assets/fish.jpg")

export default {
	name: "HomePage",
	data() {
		return {
			backgroundPlaceholder,
			backgroundImg
		}
	}
}
</script>

<template>
	<progressive-background
		:src="backgroundImg"
		:placeholder="backgroundPlaceholder"
		:blur="20"
		custom-class="background-img"
		@onLoad="load"
	>
		<div class="above-fold" slot="content">
			<h1 class="header-text">Fresh. Sustainable. Local.</h1>
		</div>
	</progressive-background>
</template>

<style lang="scss" scoped>
.above-fold {
	height: 100vh;
	padding: 60px;
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
