'use strict';

// import tasks from './gulp/tasks';
import gulp from 'gulp';

// импорт тасков
import clean from './gulp/tasks/clean';
import fonts from './gulp/tasks/fonts';
import serve from './gulp/tasks/serve';
import styles from './gulp/tasks/styles';
import views from './gulp/tasks/views';
import watch from './gulp/tasks/watch';

// const requireDir = require('require-dir');
// const tasks = requireDir('./gulp/tasks/');


export const development = gulp.parallel(watch, views, styles, serve);

export const prod = gulp.series(clean,
	gulp.series([views, styles, fonts])
);

export { clean, fonts, views, styles };

export default development;
