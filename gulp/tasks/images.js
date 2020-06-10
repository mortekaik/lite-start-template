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
			imageminPngquant({
				speed: 5,
				quality: [ 0.7, 0.8 ],
				strip: true
			}),
			imagemin.mozjpeg({
				progressive: true,
				quality: 80
			}),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: false },
					{ removeDimensions: false },
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
			'title': 'Images',
			'showFiles': false
		}));
}
