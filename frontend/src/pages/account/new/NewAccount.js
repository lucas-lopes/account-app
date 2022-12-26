import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Col, Form, Input, Row, Button, Select } from 'antd';
import { useNavigate } from "react-router-dom";

import Header from "../../../components/header/Header.js";
import { getAccount } from '../../../utils/LocalStorage.js';
import { createAccount } from '../../../services/api.js';

import { LINK_TO_LOGIN, LINK_TO_BANK_ACCOUNT_LIST } from "../../../utils/Constants";

import "./NewAccount.css";

const NewAccount = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [ responseStatus, setResponseStatus ] = useState(0);

    const wrapValuesToNewAccount = newAccount => {
        return {
            profileName: newAccount.profileName,
            fullName: newAccount.fullName,
            status: newAccount.status,
            client: newAccount.client,
            emailAddress: newAccount.emailAddress,
            typeOfAccount: newAccount.typeOfAccount,
            password: newAccount.password,
            passwordConfirmation: newAccount.passwordConfirmation,
            bankAccount: {
                salary: newAccount.salary,
                dayOfPayment: newAccount.dayOfPayment,
                beneficiaryName: newAccount.beneficiaryName,
                state: newAccount.state,
                beneficiaryAddress: newAccount.beneficiaryAddress,
                city: newAccount.city,
                country: newAccount.country,
                postalCode: newAccount.postalCode,
                bankName: newAccount.bankName,
                bankAddress: newAccount.bankAddress,
                account: newAccount.account,
                accountType: newAccount.accountType,
                swift: newAccount.swift,
                iban: newAccount.iban,
                aba: newAccount.aba
            }
        }
    }

    const onCreateNewAccount = values => {
        const newAccount = wrapValuesToNewAccount(values);
        createAccount(newAccount, setResponseStatus);

        if (responseStatus === 201) {
            if (getAccount().typeOfAccount) {
                navigate(LINK_TO_BANK_ACCOUNT_LIST);
            } else {
                navigate(LINK_TO_LOGIN);
            }
        }
    };

    return (
        <>
            <Header titlePage="New Account" previousPath="/" isNewAccountIconEnabled={false} />
            <div className="test">
            <Form
                form={form}
                layout="vertical"
                onFinish={onCreateNewAccount}
            >
                <h1>Personal and Account Info</h1>
                <Input.Group>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label="Full Name" 
                                name="fullName"
                                rules={[{ required: true, message: 'Please input your full name!' }]}>
                                <Input size="large" placeholder="Full Name" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Profile Name" tooltip="The name that will be used for your account" name="profileName">
                                <Input size="large" placeholder="Profile Name" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item 
                                label="Email Address" 
                                name="emailAddress"
                                rules={[{ required: true, message: 'Please input your E-mail!' }]}>
                                <Input size="large" placeholder="Email Address" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Client Name" 
                                tooltip="The name of the client that you work or will work" name="client"
                                rules={[{ required: true, message: 'Please input the Client Name!' }]}>
                                <Input size="large" placeholder="Client Name" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Status"  
                                name="status"
                                tooltip="Your current status. It can be: Active or Inactive"
                                rules={[{ required: true, message: 'Please select the Employee Status!' }]}> 
                                <Select
                                    size="large"
                                    placeholder="Employee Status"
                                    options={[
                                        {
                                            value: "Active",
                                            label: "Active"
                                        },
                                        {
                                            value: "Inactive",
                                            label: "Inactive"
                                        }
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item 
                                label="Password" 
                                name="password"
                                rules={[{ required: true, message: 'Please input a Password!' }]}>
                                <Input.Password size="large" placeholder="Password" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Password Confirmation" 
                                tooltip="Repeat your password to confirm" 
                                name="passwordConfirmation"
                                rules={[{ required: true, message: 'Please confirm your Password!' }]}>
                                <Input.Password size="large" placeholder="Password Confirmation" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Type of Account" 
                                name="typeOfAccount"  
                                tooltip="The account can to be used by HR team, Special reason (as admin), or Employee that is the basic"
                                rules={[{ required: true, message: 'Please select the Type of Account!' }]}>
                                <Select
                                    size="large"
                                    placeholder="Type of Account"
                                    options={[
                                        {
                                            value: "HR",
                                            label: "HR"
                                        },
                                        {
                                            value: "Special",
                                            label: "Special"
                                        },
                                        {
                                            value: "Employee",
                                            label: "Employee"
                                        }
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>
                
                <h1>Bank Account Info</h1>
                <Input.Group>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item 
                                label="Beneficiary Name" 
                                tooltip="Normally is the name of your company that you provide services" 
                                name="beneficiaryName"
                                rules={[{ required: true, message: 'Please input the Beneficiary name!' }]}>
                                <Input size="large" placeholder="Beneficiary Name" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Beneficiary Address" 
                                tooltip="This is the address of your company" 
                                name="beneficiaryAddress"
                                rules={[{ required: true, message: 'Please input the Beneficiary address!' }]}>
                                <Input size="large" placeholder="Beneficiary Address" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="State" 
                                name="state"
                                tooltip="It is the same than province for some countries"
                                rules={[{ required: true, message: 'Please input your State!' }]}>
                                <Input size="large" placeholder="State" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item 
                                label="City" 
                                name="city"
                                rules={[{ required: true, message: 'Please input the City!' }]}>
                                <Input size="large" placeholder="City" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Country" 
                                name="country"
                                rules={[{ required: true, message: 'Please input the Country!' }]}>
                                <Input size="large" placeholder="Country" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="Postal Code" 
                                name="postalCode"
                                rules={[{ required: true, message: 'Please input the Postal Code!' }]}>
                                <Input size="large" placeholder="Postal Code" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label="Bank Name" 
                                name="bankName"
                                rules={[{ required: true, message: 'Please input the Bank Name!' }]}>
                                <Input size="large" placeholder="Bank Name" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item 
                                label="Bank Address" 
                                name="bankAddress"
                                rules={[{ required: true, message: 'Please input the Bank Address!' }]}>
                                <Input size="large" placeholder="Bank Address" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label="Account" 
                                name="account"
                                rules={[{ required: true, message: 'Please input the Account!' }]}>
                                <Input size="large" placeholder="Account" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item 
                                label="Account Type" 
                                name="accountType"
                                rules={[{ required: true, message: 'Please input the Account Type!' }]}>
                                <Input size="large" placeholder="Account Type" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item 
                                label="Swift" 
                                name="swift"
                                rules={[{ required: true, message: 'Please input the Swift!' }]}>
                                <Input size="large" placeholder="Swift" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="IBAN" 
                                name="iban"
                                rules={[{ required: true, message: 'Please input the IBAN!' }]}>
                                <Input size="large" placeholder="IBAN" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item 
                                label="ABA" 
                                name="aba"
                                rules={[{ required: true, message: 'Please input the ABA!' }]}>
                                <Input size="large" placeholder="ABA" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>

                <Input.Group>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label="Salary" 
                                name="salary">
                                <Input size="large" placeholder="Salary" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item 
                                label="Day Of Payment" 
                                name="dayOfPayment">
                                <Input size="large" placeholder="Day Of Payment" prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
            </div>
        </>
    )
}

export default NewAccount;