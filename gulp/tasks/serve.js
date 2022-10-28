'use strict';

import { roots } from '../paths';
import browserSync from 'browser-sync';
import ip from 'local-ipv4-address';

export default function serve() {

	let localIp = ip().then(function(IpAddress) {
		console.log(IpAddress);
		return IpAddress;
	});

	browserSync.init({
		server: {
			baseDir: roots.src
		},
		// proxy: 'project', // если свой локальный сервер (типа OpenServer) вместо свойства server, которое указано выше
		notify: false,
		host: localIp,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true,
		// tunnel: 'projectname', // Demonstration page: http://projectmane.localtunnel.me
	});
}
