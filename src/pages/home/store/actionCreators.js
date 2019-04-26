import axios from 'axios';
import * as constants from './constants.js';
import { fromJS } from 'immutable';

//  首页第一次请求被拆分
const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});
//  首页加载更多按钮点击拆分函数
const addHomeList = (list,nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
    //  再把下一页传递给reducer
    nextPage:nextPage
})
//  首页ajax请求json数据
export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get("/react-jianshu-1/api/home.json").then((res) => {
            const result = res.data.data
            // 构建action,并且派发给store
            dispatch(changHomeData(result));
        })
	}
}
//  点击加载更多发送ajax请求
//  然后往article里面加内容
export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/react-jianshu-1/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}
//  控制回到顶部的按钮显示与否
export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show:show
})