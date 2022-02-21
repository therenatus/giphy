import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { config } from '../../config/fireBaseConfig';

initializeApp(config.firebaseConfig)
interface IRegister{
    email: string;
    password: string;
}
const auth = getAuth();
const LoginForm = () => {
	const navigate = useNavigate()
	const onFinish = ({email, password}: IRegister) => {
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			navigate('/')
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage)
		});
	};

	return (
		<Form
			name="normal_login"
			className="login-form"
            style={{width: '50%', margin: 'auto', height: '100vh', marginTop: '20vh'}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				name="email"
				rules={[
					{
						required: true,
						message: 'Please input your Email!',
					},
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				{/* <a className="login-form-forgot" href="">
					Forgot password
				</a> */}
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					{/* <Link to='/'>Register</Link> */}
					Log In
				</Button>
				<Link to='/register'>Register</Link>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;