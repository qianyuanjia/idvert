import React from 'react';
import './styles.less'
import { connect } from 'react-redux';
import { message } from 'antd'
import { toLogin } from '@/actions/login'

export default @connect(state => ({
    userName: state.login.userName
}), {
    login: toLogin.login,
    save_token: toLogin.saveToken
}) 
class extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
        }
    }
    subLogin = () => {
        const { props: { login, save_token }, state: { userName, passWord } } = this
        if(userName != "" && passWord != "") {
            login({
                userName,
                passWord
            })
                .then(res => {
                    if(res.payload.data.code == 200) {
                        save_token({
                            token: res.payload.data.result
                        })
                        message.success('登陆成功')
                    } else {
                        message.error('登陆失败')
                    }
                })
        } else {
            message.warning('输入不能为空')
        }
    }
    onChange = ({ target: { id, value } }) => {
        switch (id) {
            case "userName":
                return this.setState({
                    userName: value
                })
            case "passWord":
                return this.setState({
                    passWord: value
                })
        }
    }
    reset = () => {
        this.setState({
            userName: '',
            passWord: '',
        })
    }
    render() {
        const { onChange, reset, subLogin, state: { userName, passWord } } = this
        return (
            <div className='login'>
                <div className="login-form">
                    <div className="logo">大图</div>
                    <div className="form-sub">
                        <div className="login-input input-userName">
                            <span>用户名: </span>
                            <input 
                                id="userName"
                                type="text" 
                                onChange={onChange}
                                value={userName}
                            />
                        </div>
                        <div className="login-input input-passWord">
                            <span>密码: </span>
                            <input
                                id="passWord" 
                                type="password"
                                onChange={onChange}
                                value={passWord}
                            />
                        </div>
                        <div className="login-input input-submit">
                            <button onClick={subLogin}>登录</button>
                            <button onClick={reset}>重置</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
