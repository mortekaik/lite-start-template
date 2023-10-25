'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import debug from 'gulp-debug';
import browserSync from 'browser-sync';
import yargs from 'yargs';

const postcssConfig = require('../../postcss.config');
const argv = yargs.argv;
const production = !!argv.production;

const sass = gulpSass(dartSass);
const sassOpts = {
	outputStyle: 'expanded',
	indentType: 'tab',
	indentWidth: 1,
	linefeed: 'crlf',
};

export default function styles() {
	return gulp.src(paths.styles.src)
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err.message);
				this.emit('end');
			}
		}))
		.pipe(sass(sassOpts))
		.pipe(gulpif(production, postcss(postcssConfig)))
		.pipe(gulpif(production, cleanCSS({
			compatibility: 'ie8',
			level: {
				1: {
					specialComments: 0,
					removeEmpty: true,
					removeWhitespace: true
				},
				2: {
					mergeMedia: true,
					removeEmpty: true,
					removeDuplicateFontRules: true,
					removeDuplicateMediaBlocks: true,
					removeDuplicateRules: true,
					removeUnusedAtRules: false
				}
			}
		})))
		.pipe(gulpif(production, rename({
			suffix: '.min'
		})))
		.pipe(plumber.stop())
		.pipe(gulpif(!production, sourcemaps.write('.')))
		.pipe(gulpif(!production, gulp.dest(paths.styles.app), gulp.dest(paths.styles.dist)))
		.pipe(debug({
			'title': 'CSS files'
		}))
		.pipe(browserSync.stream());
}
