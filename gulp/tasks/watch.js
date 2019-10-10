'use strict';

import { paths } from '../paths';
import gulp from 'gulp';

// импорт тасков
import views from './views';
import styles from './styles';


export default function watch() {
	gulp.watch(paths.views.watch, gulp.parallel(views));
	gulp.watch(paths.styles.watch, gulp.parallel(styles));
}
