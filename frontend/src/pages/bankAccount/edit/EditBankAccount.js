import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { UserOutlined } from '@ant-design/icons';
import { Col, Form, Input, Row, Button } from 'antd';

import Header from "../../../components/header/Header.js";
import { editBankAccount, getAccountDetail, getBankAccountDetail } from "../../../services/api.js";

import { LINK_TO_BANK_ACCOUNT_LIST } from "../../../utils/Constants.js";

import "./EditBankAccount.css";

const EditBankAccount = () => {
    const { id } = useParams();
    const [form ] = Form.useForm();

    const [ account, setAccountDetail ] = useState({});
    const [ bankAccountDetail, setBankAccountDetail ] = useState({});
    
    useEffect(() => {
        getAccountDetail(id, setAccountDetail);
        getBankAccountDetail(id, setBankAccountDetail);
    }, []);

    const onSaveEditedData = values => {
        values.id = id;
        editBankAccount(id, values, setBankAccountDetail);
    }

    useEffect(() => {
        form.setFieldsValue({
            fullName: account.fullName,
            emailAddress: account.emailAddress,
            beneficiaryName: bankAccountDetail.beneficiaryName,
            beneficiaryAddress: bankAccountDetail.beneficiaryAddress,
            city: bankAccountDetail.city,
            country: bankAccountDetail.country,
            postalCode: bankAccountDetail.postalCode,
            bankName: bankAccountDetail.bankName,
            bankAddress: bankAccountDetail.bankAddress,
            state: bankAccountDetail.state,
            account: bankAccountDetail.account,
            accountType: bankAccountDetail.accountType,
            swift: bankAccountDetail.swift,
            iban: bankAccountDetail.iban,
            aba: bankAccountDetail.aba,
            salary: bankAccountDetail.salary,
            dayOfPayment: bankAccountDetail.dayOfPayment,
        })
    }, [account])

    return (
        <>
            <Header titlePage="Edit Bank Account" previousPath={LINK_TO_BANK_ACCOUNT_LIST} isNewAccountIconEnabled={true} />
            <div className="test">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onSaveEditedData}
                >   
                    <Input.Group>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item 
                                    label="Full Name" 
                                    name="fullName" 
                                    rules={[{ required: true, message: 'Please input your Full!' }]}>
                                    <Input size="large" placeholder="Full Name" prefix={<UserOutlined />} disabled />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    label="Beneficiary Name" 
                                    name="beneficiaryName"
                                    rules={[{ required: true, message: 'Please input your Beneficiary!' }]}>
                                    <Input size="large" placeholder="Beneficiary Name" prefix={<UserOutlined />} />
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
                                    rules={[{ required: true, message: 'Please input your Email!' }]}>
                                    <Input size="large" placeholder="Email Address" prefix={<UserOutlined />} disabled />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item 
                                    label="Beneficiary Address" 
                                    name="beneficiaryAddress"
                                    rules={[{ required: true, message: 'Please input your Beneficiary!' }]}>
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
                                    rules={[{ required: true, message: 'Please input your City!' }]}>
                                    <Input size="large" placeholder="City" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item 
                                    label="Country" 
                                    name="country"
                                    rules={[{ required: true, message: 'Please input your Country!' }]}>
                                    <Input size="large" placeholder="Country" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item 
                                    label="Postal Code" 
                                    name="postalCode"
                                    rules={[{ required: true, message: 'Please input your Postal!' }]}>
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
                                    rules={[{ required: true, message: 'Please input your Bank!' }]}>
                                    <Input size="large" placeholder="Bank Name" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    label="Bank Address" 
                                    name="bankAddress"
                                    rules={[{ required: true, message: 'Please input your Bank!' }]}>
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
                                    rules={[{ required: true, message: 'Please input your Account!' }]}>
                                    <Input size="large" placeholder="Account" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    label="Account Type" 
                                    name="accountType"
                                    rules={[{ required: true, message: 'Please input your Account!' }]}>
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
                                    rules={[{ required: true, message: 'Please input your Swift!' }]}>
                                    <Input size="large" placeholder="Swift" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item 
                                    label="IBAN" 
                                    name="iban"
                                    rules={[{ required: true, message: 'Please input your IBAN!' }]}>
                                    <Input size="large" placeholder="IBAN" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item 
                                    label="ABA" 
                                    name="aba"
                                    rules={[{ required: true, message: 'Please input your ABA!' }]}>
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

                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default EditBankAccount;