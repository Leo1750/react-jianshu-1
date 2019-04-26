import styled from 'styled-components';

//  详情页面最外层的容器
export const DetailWrapper = styled.div`
	overflow: hidden;
	width: 620px;
	margin: 0 auto;
	padding-bottom: 100px;
`;
//  头部
export const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`;
//  内容区域,设置了默认的图片,p,b标签的默认显示方式
export const Content = styled.div`
	color: ##2f2f2f;
	img {
		width: 100%;
	}
	p {
		margin: 25px 0;
		font-size: 16px;
		line-height: 30px;
	}
	b {
		font-weight: bold;
	}
`;