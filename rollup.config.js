import buble from 'rollup-plugin-buble';

var pkg = require('./package.json');

export default {
	entry: 'index.js',
	external: ['uglify-es'],
	plugins: [buble()],
	targets: [
		{
			format: 'cjs',
			dest: pkg['main']
		},
		{
			format: 'es',
			dest: pkg['jsnext:main']
		}
	]
};
