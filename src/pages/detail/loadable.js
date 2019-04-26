import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  //  异步获取当前组件
  loader: () => import('./'),
  loading() {
  	return <div>正在加载</div>
  }
});

//  导出一个无状态组件
export default () => <LoadableComponent/>
