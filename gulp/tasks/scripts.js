'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify-es';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import debug from 'gulp-debug';
import browserSync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;


export default function scripts() {
	return gulp.src([
		paths.libs.app + 'jquery/dist/jquery.min.js',
		paths.scripts.common // Всегда в конце
	],
	{
		allowEmpty: true
	})
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(babel({
			ignore: [paths.libs.app]
		}))
		.pipe(concat('main.js'))
		.pipe(gulpif(production, uglify())) // Минимизировать весь js (на выбор)
		.pipe(gulpif(production, rename({ suffix: '.min' })))
		.pipe(gulpif(!production, sourcemaps.write('.')))
		.pipe(gulpif(!production, gulp.dest(paths.scripts.src), gulp.dest(paths.scripts.dist)))
		.pipe(debug({
			'title': 'JS files'
		}))
		.on('end', browserSync.reload);
}
