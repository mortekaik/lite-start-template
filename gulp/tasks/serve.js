'use strict';

import { roots, paths } from '../paths';
import gulp from 'gulp';
import browserSync from 'browser-sync';

import views from './views';

export default function serve () {
	browserSync.init({
		server: {
			baseDir: roots.src
		},
		// proxy: 'project', // если свой локальный сервер (типа OpenServer) вместо свойства server, которое указано выше
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true,
		// tunnel: 'projectname', // Demonstration page: http://projectmane.localtunnel.me
	});

	gulp.watch(paths.views.watch, gulp.parallel(views));
}
