/* 批量导出api */

const directives = import.meta.globEager('./interface/*.js')
let module = {};

Object.keys(directives).forEach((fileName, index) => {
	Object.keys(directives[fileName]).forEach(key => {
		module[key] = directives[fileName][key]
	})

})

export default module