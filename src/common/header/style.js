import styled from "styled-components"
// webpack找不到图标路径,必须先在这里引入
import logoPic from "../../statics/logo.png"

// 这是一个带样式的div,并且导出成一个组件,简称样式组件
//  公用头部组件
export const HeaderWrapper = styled.div`
    z-index: 1;
    height:56px;
    position:relative;
    border-bottom: 1px solid #f0f0f0;
`;
//  logo
export const Logo = styled.div`
    top: 0;
	left: 0;
	display: inline-block;
	width: 100px;
	height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
// 导航容器
export const Nav = styled.div`
    width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
    display: inline-block;
`;
// 具体导航按钮
export const NavItem = styled.div`
    float:left;
    line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
    &.left{SearchInfoSearchInfo
        float:left;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;
// 搜索input框
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    float:left;
    width: 160px;
	height: 38px;
	padding: 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
    display:inline-block;
	color: #666;
	&::placeholder {
		color: #999;
	}
    // 点击效果
    &.focused {
		width: 240px;
	}
    //  点开动画效果
    &.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
    //  收起动画效果
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;
//  搜索提示框
export const SearchInfo = styled.div`
	position: absolute;
	left: 270px;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;
//  标题
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;
//  标题右侧换一换
export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;
//  搜索提示div具体每个小按钮的包裹容器
export const SearchInfoList = styled.div`
	overflow: hidden;
`;
//  搜索提示div具体每个小按钮
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
// 包裹注册和写文章按钮的容器
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;
// 注册和写文章按钮
export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`