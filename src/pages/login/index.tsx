import "./login.scss"
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


type FieldType = {
    username?: string;
    password?: string;
};


export default () => {
    const navigate = useNavigate();

    const onFinish = (values: FieldType) => {
        console.log('Success:', values);
        navigate("/layout/home");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-container">
            <div className="login-wrap">
                <div style={{
                    textAlign: "center",
                    padding: '20px 0',
                    fontSize: '24px',
                    color: "#000",
                    letterSpacing: '2px'
                }}>Vite+React+TS</div>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="username"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                            ({ getFieldValue }) => ({
                                validator: (_, value) => {
                                    console.log(getFieldValue("username"), '----', value);
                                    if (value && value.length > 10) {
                                        return Promise.reject(new Error('The username must be less than 10 characters'))
                                    }
                                }
                            })
                        ]}
                    >
                        <Input prefix={<UserOutlined className="form-prefix-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { min: 6, message: 'The password length cannot be less than 6 bits' }
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="form-prefix-icon" />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
