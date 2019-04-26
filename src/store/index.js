import { createStore,compose,applyMiddleware } from 'redux';
import reducer from './reducer.js'
import thunk from "redux-thunk"
//  redux-devtools要用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer,composeEnhancers(
    //  正确的使用redux-thunk中间件
    applyMiddleware(thunk)
));

export default store;