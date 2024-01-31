import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = async (values) => {
    try {
        const response = await fetch('https://strapi-store-server.onrender.com/api/auth/local/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password,
                email: values.email,
            }),
        });

        if (response.ok) {
            console.log('Registration successful');
        } else {
            const data = await response.json();
            console.error('Registration failed:', data.message);
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Register = () => (
    <div className='register-form'>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button className='bg-blue-400' type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
);

export default Register;
