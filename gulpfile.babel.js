'use strict';

import tasks from './gulp/tasks';
import gulp from 'gulp';

// const requireDir = require('require-dir');
// const tasks = requireDir('./gulp/tasks/');

console.log(tasks);

export const development = gulp.series(tasks.views,
	gulp.parallel(tasks.serve)
);

export default development;
