import React,{ PureComponent } from "react"
import { connect } from 'react-redux';
import { ListItem, ListInfo,LoadMore } from "../style.js"
//  加载更多需要派发action
import { actionCreators } from '../store/index.js';
// 做路由跳转
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.list.map((x,index) => {
                        return (
                            <Link key={ index } to = {'/detail/' + x.get('id')}>
                                <ListItem>
                                    <img src={ x.get('imgUrl') } alt="" className="pic" />
                                    <ListInfo>
                                        <h3 className="title">{ x.get("title") }</h3>
                                        <p className="desc">{ x.get("desc") }</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState,mapDispatch)(List);