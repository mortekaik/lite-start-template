'use strict';

import { roots } from '../paths';
import browserSync from 'browser-sync';

export default function serve() {
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
}
