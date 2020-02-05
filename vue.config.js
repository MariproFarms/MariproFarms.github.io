module.exports = {
	publicPath: "/maripro/",
	css: {
		extract: false,
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/index.scss";`
			}
		}
	}
}
