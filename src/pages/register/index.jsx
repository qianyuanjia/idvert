import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import { reg } from '@/services'
import './styles.less'

export default 
@Form.create({ name: 'horizontal_login' })
class extends React.PureComponent {
	componentDidMount() {
		this.props.form.validateFields();
	}

	hasErrors = fieldsError => {
		return Object.keys(fieldsError).some(field => fieldsError[field]);
	}

	// 点注册
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				reg({  
					userName: values.username,
					passWord: values.password,
					rePassWord: values.password,
				})
					.then(res => {
						if(res.data.msg === 'succeed') {
							message.success('注册成功')
							this.props.history.push('/user/login')
						} else {
							message.warning('注册失败')
						}
					})

			}
		});
	};
	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

		const usernameError = isFieldTouched('username') && getFieldError('username');
		const passwordError = isFieldTouched('password') && getFieldError('password');
		return (
			<div className="page-login">
				
				<Form layout="horizontal" onSubmit={this.handleSubmit}>
					
				<h1>SIGN UP</h1>
				<div className='register_save'>
							Your info has bees saved.
					</div>
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
						<h2>Not registered? <span> <a href="/user/login"> Sign Up </a></span></h2>
					</Form.Item>
					<Form.Item>
						<Button type="danger" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
							Sign Up
          				</Button>
					</Form.Item>
				</Form>


			</div>
		);
	}
}

