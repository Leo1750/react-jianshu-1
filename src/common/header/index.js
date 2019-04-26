import React from 'react';
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList } from './style.js';
//  接收store数据的主要模块
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
//  引入action
import * as actionCreators from './store/actionCreator.js'
import { actionCreators as loginActionCreators } from '../../pages/login/store/index.js'

import { Link } from 'react-router-dom';

class Header extends React.Component {
    //  根据聚焦与否显示搜索提示框
    getListArea (){
        const newList = this.props.list.toJS();
        const pageList = [];
        //  i=0,显示0-9条数据;i=1,显示10-19条数据......
        //  根据点击切换i,切换显示的数据
        if(newList.length){
            for (let i = ( this.props.page - 1 ) * 10;i < this.props.page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
                )  
            }
        }
        //  鼠标点击和鼠标移入时显示热门搜索
        if(this.props.focused || this.props.mouseIn){
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => this.props.handleChangePage(this.props.page,this.props.pageTotal) }>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
						this.props.login ? <NavItem className='right' onClick={this.props.logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
                    <NavItem className='right'>Aa</NavItem>
                    {/* 如果搜索框已聚焦,则给它增加一个类名focused,并且包裹它,给它一个动画效果 */}
                    <CSSTransition in={this.props.focused} timeout={200} classNames="slide"> 
                        <NavSearch className={this.props.focused ? 'focused': ''} onFocus={ () => this.props.handleInputFocus(this.props.list) } onBlur={this.props.handleInputBlur}></NavSearch>
                    </CSSTransition>
                    { this.getListArea() }
                </Nav>
                {/* 最右边按钮区域 */} 
                <Addition>
                    <Link to="/write">
                        <Button className="writting">写文章</Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

//  将数据映射到本组件的props里,然后调用
const mapStateToProps = function(state){
    return {
        //  使用redux-immutable让总state也变成immutable对象,并且可以通过get获取
        //  immutable对象的数据必须使用get方法调用
        //  focused: state.get('header').get('focused')
        focused: state.getIn(["header","focused"]),
        mouseIn: state.getIn(["header","mouseIn"]),
        list: state.getIn(["header","list"]),
        // 当前的页码
        page: state.getIn(["header","page"]),
        pageTotal: state.getIn(["header","pageTotal"]),
        login: state.getIn(["login","login"])
    }
}
//  
const mapDispatchToProps = function(dispatch){
    return {
        //  传递list参数,阻止点击搜索框重复发送ajax请求
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            //  redux-thunk是redux的一个中间件,它使得我们可以在action中写函数
            //  异步获取ajax数据
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,pageTotal){
            //  传递要显示第几页的参数
            if(page < pageTotal){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
			dispatch(loginActionCreators.logout())
		}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);