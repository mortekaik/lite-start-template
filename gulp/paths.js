export const roots = {
	root: './', // корень проекта
	src: './app/', // папка с исходниками
	build: './dist/' // папка c готовыми файлами
};

export const paths = {
	views: {
		src: [
			roots.src + '*.+(php|html)',
		],
		dist: roots.build,
		watch: [
			roots.src + '*.+(php|html)',
		]
	},
	styles: {
		src: roots.src + 'scss/main.scss',
		dist: roots.build + 'css/',
		app: roots.src + 'css/',
		watch: roots.src + 'scss/**/*.scss',
	},
	scripts: {
		common: roots.src + 'js/common.js',
		src: roots.src + 'js/',
		dist: roots.build + 'js/',
		watch: roots.src + 'js/**/*.js',
	},
	libs: {
		app: roots.src + 'libs/',
		watch: roots.src + 'libs/**/*.js',
	},
	images: {
		src: [
			roots.src + 'img/**/*.*',
		],
		dist: roots.build + 'img/',
		watch: roots.src + 'img/**/*.*'
	},
	fonts: {
		src: roots.src + 'fonts/**/*',
		dist: roots.build + 'fonts/',
		watch: roots.src + 'fonts/**/*',
	}
};
