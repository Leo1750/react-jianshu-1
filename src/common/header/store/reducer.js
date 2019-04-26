import * as constants from './constants.js'

//  from对象可以帮我们把一个JS对象改为一个immutable对象
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    //  搜索列表默认第几页和总页数
    page:1,
    pageTotal:1
});

//  此函数接收一个原始的state,并且返回一个新的state，不能对原始的state做修改
//  immutable.js库的意义: 确保我们一定不能修改state中的数据
//  immutable.js生成一个不可变对象即immutable对象,然后我们把state对象改为其及其
export default function(state=defaultState,action){
    if(action.type === constants.SEARCH_FOCUS){
        //  immutable对象的set方法,会结合之前的immutable对象的值和设置的值,根据比较,返回一个全新的对象
        return state.set('focused',true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false);
    }
    if(action.type === constants.CHANGE_LIST){
        return state.set('list',action.data).set('pageTotal',action.pageTotal);
    }
    if(action.type === constants.MOUSE_ENTER){
        return state.set('mouseIn',action.data).set('mouseIn',true);
    }
    if(action.type === constants.MOUSE_LEAVE){
        return state.set('mouseIn',action.data).set('mouseIn',false);
    }
    if(action.type === constants.CHANGE_PAGE){
        return state.set('page',action.page);
    }
    return state;
}