import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Checkbox,
    Button,
} from 'antd';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const auth = getAuth();
interface IRegister{
    email: string;
    password: string;
    name: string;
    displayName: string
}

const RegistrationForm = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    const onFinish = ({email, password, displayName}: IRegister) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			navigate('/')
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
    };

    return (
        <Form
            form={form}
            name="register"
            style={{width: '50%', margin: 'auto', height: '100vh', marginTop: '20vh'}}
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label="User Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;