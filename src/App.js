import React from 'react';
// 引入头部组件
import Header from './common/header/index.js';
//  页面所有的公共数据/store都放在这里
import store from './store/index.js';
//  传递store数据的主要模块
import { Provider } from 'react-redux';

//  引入路由
import { BrowserRouter,Route } from "react-router-dom"
//  引入路由渲染需要的组件
import Home from "./pages/home/index.js"
import Detail from "./pages/detail/loadable.js"
import Login from "./pages/login/index.js"
import Write from './pages/write';


class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component = { Home }></Route>
                    <Route path='/login' exact component = { Login }></Route>
                    <Route path='/detail/:id' exact component = { Detail }></Route>
                    <Route path='/write' exact component={Write}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
