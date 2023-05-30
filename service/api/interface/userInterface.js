import fn from '../../index.js'

// 用户登录
export const userLogin = data => fn({
	name: 'userLogin',
	data
})

// 获取手机验证码
export const getPhoneCode = data => fn({
	name: "getPhoneCode",
	data
})

/* 关注作者 */
export const updateFollowAuthor = data => fn({
	name: 'updateFollowAuthor',
	data
})

/* 对当前文章进行点赞 */
export const updateCompliments = data => fn({
	name: 'updateCompliments',
	data
})

/* 获取关注的文章 */
export const getFavoriteArticle = data => fn({
	name: 'getFavoriteArticle',
	data
})

/* 获取关注作者列表 */
export const getFavoriteAuthor = data => fn({
	name: 'getFavoriteAuthor',
	data
})

/* 获取作者自己的文章 */
export const getMyArticle = data => fn({
	name: 'getMyArticle',
	data
})