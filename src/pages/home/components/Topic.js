import React,{ PureComponent } from "react"
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.list.map((x)=>(
                        <TopicItem key = { x.get('id') }>
                            <img src={ x.get('imgUrl') } className='topic-pic' alt=''/>
                            { x.get('title') }
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

//  连接,让首页能使用reducer的数据
const mapState = (state) => ({
	list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);