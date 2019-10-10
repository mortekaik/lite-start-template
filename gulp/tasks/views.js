'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;

export default function views() {
	return gulp.src(paths.views.src)
		.pipe(gulpif(production, replace('.css', '.min.css')))
		.pipe(gulpif(production, replace('.js', '.min.js')))
		.pipe(gulpif(production, gulp.dest(paths.views.dist)))
		.pipe(browserSync.stream());
}
