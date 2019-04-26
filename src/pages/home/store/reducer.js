//  负责home页面的数据管理
import { fromJS } from 'immutable';

import * as constants from './constants.js';

//  让这些数据在首页通过ajax获取再来填充
const defaultState = fromJS({
	topicList: [],
    articleList: [],
    recommendList: [],
    //  点击加载更多默认先加载第1页的数据
    articlePage: 1,
    //  默认不显示滚动按钮
    showScroll: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
        //  填充首页的数据
        case constants.CHANGE_HOME_DATA:
			return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
	        });
        //  点击加载更多按钮
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            });
        //  控制回到顶部按钮显示与否
        case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		default:
			return state;
	}
}