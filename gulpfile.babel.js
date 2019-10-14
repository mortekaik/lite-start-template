'use strict';

import gulp from 'gulp';

// импорт тасков
import { clean, cleanApp } from './gulp/tasks/clean';
import fonts from './gulp/tasks/fonts';
import images from './gulp/tasks/images';
import serve from './gulp/tasks/serve';
import scripts from './gulp/tasks/scripts';
import styles from './gulp/tasks/styles';
import views from './gulp/tasks/views';
import watch from './gulp/tasks/watch';


export const development = gulp.series(
	gulp.parallel(views, scripts, styles),
	gulp.parallel(serve, watch)
);

export const prod = gulp.series(clean,
	gulp.series([views, scripts, styles, fonts, images])
);

export { clean, cleanApp, fonts, images, views, styles, scripts };

export default development;
