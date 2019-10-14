'use strict';

import { roots, paths } from '../paths';
import del from 'del';

function clean() {
	return del([roots.build]);
}

function cleanApp() {
	return del([
		paths.styles.app,
		paths.scripts.src + '*.{js,map}',
		'!' + paths.scripts.common
	]);
}

export { clean, cleanApp };
