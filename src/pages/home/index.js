import React,{ PureComponent } from "react"
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js'
//  引入这个页面的所有组件
import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';

//  请求数据并且连接store
// import axios from "axios"
import { actionCreators } from './store/index.js';
import { connect } from 'react-redux';

class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    // 借助生命周期函数,发送ajax请求
    //  ui组件尽量不要写逻辑
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    //  组件销毁时把window的事件解绑,这样这个组件销毁以后就不会影响其他组件了
    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

//  拿到是否显示滚动按钮的数据
const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

//  切记这里写在组件的外面
const mapDispatch = (dispatch) => ({
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollTopShow(e){
            //  滚动了400px以后才显示此按钮
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    });

export default connect(mapState, mapDispatch)(Home);