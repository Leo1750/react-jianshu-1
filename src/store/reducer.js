// 用combineReducers整个各个小的reducer
import { combineReducers } from 'redux-immutable'
import headerReducer from '../common/header/store/reducer.js'
//  使用首页,详情页的reducer    中转站
import { reducer as homeReducer} from '../pages/home/store/index.js'
import { reducer as detailReducer } from '../pages/detail/store/index.js';
import { reducer as loginReducer } from '../pages/login/store/index.js';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})