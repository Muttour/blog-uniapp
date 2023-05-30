import fn from '../../index.js'

// 获取文章列表
export const getArticleList = data => fn({
	name: 'getArticleList',
	data
})

/* 获取分类 */
export const getTabList = data => fn({
	name: "getTabList",
	data
})

/* 修改收藏状态 */
export const updateSaveLike = data => fn({
	name: 'updateSaveLike',
	data
})


/* 获取文章详情 */
export const getArticleDetail = data => fn({
	name: 'getArticleDetail',
	data
})

/* 修改文章的评论内容 */
export const updateComment = data => fn({
	name: 'updateComment',
	data
})

/* 获取评论列表 */
export const getCommentList = data => fn({
	name: 'getCommentList',
	data
})