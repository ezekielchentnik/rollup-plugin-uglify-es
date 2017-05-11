import { minify } from 'uglify-es'

export default function uglify (options = {}) {
	return {
		name: 'uglify',
		transformBundle (code) {
			const result = minify(
				code,
				Object.assign({ sourceMap: { url: 'out.js.map' } }, options ) // force sourcemap creation
			)
			if (result.map) {
				const commentPos = result.code.lastIndexOf('//#')
				result.code = result.code.slice(0, commentPos).trim()
			}
			return result
		}
	}
}
