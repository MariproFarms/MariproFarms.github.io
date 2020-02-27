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
	<div>
		<progressive-background
			:src="backgroundImg"
			:placeholder="backgroundPlaceholder"
			:blur="20"
			custom-class="background-img"
		>
			<div class="above-fold" slot="content">
				<h1 class="header-text">Fresh. Sustainable. Local.</h1>
			</div>
		</progressive-background>
		<blockquote
			class="quote"
			cite="http://www.tutufoundationusa.org/2015/10/07/10-pieces-of-wisdom-from-desmond-tutu-on-his-birthday/"
		>
			"Do your little bit of good where you are; it’s those little bits of
			good put together that overwhelm the world."
			<span class="quote__byline">– Archbishop Desmond Tutu</span>
		</blockquote>
	</div>
</template>

<style lang="scss" scoped>
.above-fold {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(45, 111, 193);
	background: linear-gradient(
		4deg,
		rgba(45, 111, 193, 0.45) 0%,
		rgba(45, 111, 193, 0.45) 55%,
		rgba(45, 111, 193, 0.45) 100%
	);
}

.background-img {
	height: 100vh;
}

.header-text {
	color: $white;
	font-family: "Montserrat", sans-serif;
	font-size: 3rem;
}

.quote {
	font-size: 1.5rem;
	line-height: 2rem;
	font-style: oblique;
	text-align: left;
	width: 60vw;
	margin: $spacer * 2 auto;

	&__byline {
		display: block;
		text-align: right;
		font-size: 1rem;
	}
}
</style>
