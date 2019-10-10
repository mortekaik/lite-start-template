'use strict';

import { roots } from '../paths';
import del from 'del';

export default function clean() {
	return del([roots.build]);
}
