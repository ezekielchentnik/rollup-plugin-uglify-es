import { minify } from 'uglify-es'

export default function uglify (options = {}) {
	return {
		name: 'uglify',
		transformBundle (code) {
			const result = minify(code, options)
			if (result.map) {
				const commentPos = result.code.lastIndexOf('//#')
				result.code = result.code.slice(0, commentPos).trim()
			}
			return result
		}
	}
}
