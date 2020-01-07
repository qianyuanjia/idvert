import React from 'react'
import { withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

/**
 * 统一路由监听
 * 登录后不做任何处理 未登录跳转到登录页
 */
export default @withRouter
class extends React.PureComponent {
  constructor (props) {
    super(props)
    // this.redirect(props)
  }
  
  // nextProps
  componentWillReceiveProps (np) {
    // this.redirect(np)
  }

  // 重定向
  redirect = np => {
    const { history } = np

    // 判断是否登录了
    if (!localStorage.getItem('token')) {
      const pathname = history.location.pathname
      // 如果是登录页 不跳转 否则会死循环
      if (!pathname.includes('/user/login') && !pathname.includes('/user/register')) {
       	history.push('/user/login')
      }
    }
  }

  render () {
    const { route } = this.props
     return renderRoutes(route)
  }
}

