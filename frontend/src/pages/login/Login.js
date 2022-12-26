import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { saveAccount } from '../../utils/LocalStorage';
import { login } from '../../services/api';

import { 
    EMPLOYEE_TYPE_OF_ACCOUNT, 
    HR_TYPE_OF_ACCOUNT, 
    LINK_TO_ACCOUNT_DETAILS, 
    LINK_TO_BANK_ACCOUNT_LIST, 
    LINK_TO_LOGIN, 
    LINK_TO_NEW_ACCOUNT, 
    SPECIAL_TYPE_OF_ACCOUNT 
} from '../../utils/Constants';

import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [ response, setResponse ] = useState({});

    useEffect(() => {
        authenticate();
    }, [response]);

    const authenticate = () => {
        if (response.status === 200) {
            const loginData = response.data;
            saveAccount(loginData);
            if (loginData.typeOfAccount === HR_TYPE_OF_ACCOUNT || loginData.typeOfAccount === SPECIAL_TYPE_OF_ACCOUNT) {
                navigate(LINK_TO_BANK_ACCOUNT_LIST);
            } else if (loginData.typeOfAccount === EMPLOYEE_TYPE_OF_ACCOUNT) {
                navigate(`${LINK_TO_ACCOUNT_DETAILS}/${loginData.id}`);
            }
        }
    }

    const onFinish = values => {
        login(values, setResponse);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <Form
                className="login-form"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Input.Group>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input placeholder="Your E-mail here" />
                    </Form.Item>
                </Input.Group>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password"  />
                </Form.Item>

                <Form.Item className="login-buttons">
                    <Button type="primary" htmlType="submit" className="button-style">Submit</Button>
                    <Link to={LINK_TO_NEW_ACCOUNT} className="button-style">Create Account</Link>
                    <Link to={LINK_TO_LOGIN} className="button-style">Forgot Password</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;