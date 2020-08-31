module.exports = {
	plugins: [
		require('autoprefixer')({
			cascade: false,
			grid: 'no-autoplace'
		}),
		require('postcss-sort-media-queries')({
			sort: 'desktop-first'
		}),
	]
};
