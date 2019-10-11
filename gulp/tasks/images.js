'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import debug from 'gulp-debug';

export default function images() {
	return gulp.src(paths.images.src)
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.jpegtran({progressive: true}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: false},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest(paths.images.dist))
		.pipe(debug({
			'title': 'Images'
		}));
}
