module.exports = {
	plugins: [
		require('autoprefixer')({
			cascade: false,
			grid: true
		}),
		require('postcss-sort-media-queries')({
			sort: 'desktop-first'
		})
	]
};
