import React from 'react'
import { connect } from 'react-redux'
import './styles.less'
import { Form, Icon, Input, Button, message } from 'antd';
import { toLogin } from '@/actions/login'

export default @connect(state => ({}), {
	login: toLogin.login, // login
	save_token: toLogin.saveToken,
})
@Form.create({ name: 'horizontal_login' })
class extends React.PureComponent {

	componentDidMount() {
		this.props.form.validateFields();
	}

	hasErrors = fieldsError => {
		return Object.keys(fieldsError).some(field => fieldsError[field]);
	}

	// 点击登录
	handleSubmit = e => {
		const { login, save_token } = this.props
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				login({
					userName: values.username,
					passWord: values.password
				})
					.then(res => {
						if (res.payload.data.code == 200) {
							save_token({
								token: res.payload.data.result
							})
							localStorage.setItem('token', res.payload.data.result)
							message.success('登陆成功')
							this.props.history.push('/')
						} else {
							message.error('登陆失败')
						}
					})
			}
		})
	}
	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
		const usernameError = isFieldTouched('username') && getFieldError('username')
		const passwordError = isFieldTouched('password') && getFieldError('password')
		return (
			<div className="page-login">
				<Form layout="horizontal" onSubmit={this.handleSubmit}>
					<h1>SIGN IN</h1>
					<Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>,
						)}
					</Form.Item>
					<Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						<h2>Already registered? <span> <a href="/user/register"> Sign In </a></span></h2>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
							Sign in
          				</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

