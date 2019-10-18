'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import debug from 'gulp-debug';

export default function fonts() {
	return gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dist))
		.pipe(debug({
			'title': 'Fonts',
			'showFiles': false
		}));
}
