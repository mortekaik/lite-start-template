'use strict';

import { paths } from '../paths';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gcmq from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import browserSync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;

export default function styles() {
	return gulp.src(paths.styles.src)
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(plumber())
		.pipe(sass({
			indentType: 'tab',
			indentWidth: 1,
			linefeed: 'crlf',
			outputStyle: 'expanded'
		}))
		.pipe(gcmq())
		.pipe(gulpif(production, autoprefixer({
			cascade: false,
			grid: true
		})))
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
