'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import debug from 'gulp-debug';

export default function images() {
	return gulp.src(paths.images.src)
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imageminPngquant({
				speed: 5,
				quality: [ 0.6, 0.8 ]
			}),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: false },
					{ removeUnusedNS: false },
					{ removeUselessStrokeAndFill: false },
					{ cleanupIDs: false },
					{ removeComments: true },
					{ removeEmptyAttrs: true },
					{ removeEmptyText: true },
					{ collapseGroups: true }
				]
			})
		]))
		.pipe(gulp.dest(paths.images.dist))
		.pipe(debug({
			'title': 'Images'
		}));
}
