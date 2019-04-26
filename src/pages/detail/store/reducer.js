import { fromJS } from 'immutable';
import * as constants from './constants';

//  初始数据,标题和内容
const defaultState = fromJS({
	title: '',
    content: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
        case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state;
	}
}