//  帮助我们创建action的文件
import * as constants from './constants.js'
//  发送ajax请求的模块
import axios from "axios"

import { fromJS } from 'immutable'
//  自己用的函数
const changeList = function(data){
    return {
        type: constants.CHANGE_LIST,
        //  把数据改变成immutable的类型
        data: fromJS(data),
        //  每页10条数据,算一下一共有多少页
        pageTotal: Math.ceil(data.length/10)
    }
}
//  导出的
export const searchFocus = function(){
    return {
        type: constants.SEARCH_FOCUS
    }
};
export const searchBlur = function(){
    return {
        type: constants.SEARCH_BLUR
    }
};
export const mouseEnter = function(){
    return {
        type: constants.MOUSE_ENTER
    }
};
export const mouseLeave = function(){
    return {
        type: constants.MOUSE_LEAVE
    }
};
export const changePage = function(page){
    return {
        type: constants.CHANGE_PAGE,
        //  将page参数传递给reducer
        page:page
    }
};
//  使用redux-thunk可以直接返回函数,必须使用redux-thunk
export const getList = function(){
    return function(dispatch){
        //  派发一个异步的请求
        axios.get('/react-jianshu-1/api/headerList.json').then((res)=>{
            const data = res.data;
            //  更改store里面的数据
            dispatch(changeList(data.data));
        })
    }
}