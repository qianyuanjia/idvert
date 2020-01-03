import React from 'react'
import Loadable from 'react-loadable';
 
const Loading = () => <div> 加载中... </div>  // 加载中...
export default (loader, loading = Loading) => {	
    return Loadable({
        loader: loader,
        loading,
      });
}