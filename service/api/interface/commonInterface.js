import fn from '../../index.js'

// 获取当前安卓端版本
export const getCurrentVersion = data => fn({
	name: 'getCurrentVersion',
	data
})