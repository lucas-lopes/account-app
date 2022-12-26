import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Input, Row, Form } from 'antd';

import { getAccountDetail, getBankAccountDetail } from "../../../services/api.js";
import Header from "../../../components/header/Header.js";
import ColumnItem from "../../../components/form/column/ColumnItem.js";

import { LINK_TO_BANK_ACCOUNT_LIST } from "../../../utils/Constants.js";

import "./BankAccountDetail.css";

const BankAccountDetail = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    
    const [ account, setAccountDetail ] = useState({});
    const [ bankAccountDetail, setBankAccountDetail ] = useState({});

    useEffect(() => {
        getAccountDetail(id, setAccountDetail);
        getBankAccountDetail(id, setBankAccountDetail);
    }, [id, account]);

    return (
        <>
            <Header titlePage="Bank Account Detail" previousPath={LINK_TO_BANK_ACCOUNT_LIST} isNewAccountIconEnabled={true} />
            <div className="test">
                <Form
                    form={form}
                    layout="vertical"
                    disabled={true}
                >   
                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={12} 
                                label="Full Name" 
                                placeholder="Full Name" 
                                value={account.fullName} 
                            />
                            <ColumnItem 
                                span={12} 
                                label="Beneficiary Name" 
                                placeholder="Beneficiary Name" 
                                value={bankAccountDetail.beneficiaryName}
                            />
                        </Row>
                    </Input.Group>
                
                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={8} 
                                label="Email Address" 
                                placeholder="ID" 
                                value={account.emailAddress} 
                            />
                            <ColumnItem 
                                span={8} 
                                label="Beneficiary Address" 
                                placeholder="Beneficiary Address" 
                                value={bankAccountDetail.beneficiaryAddress}
                            />
                            <ColumnItem 
                                span={8} 
                                label="State" 
                                placeholder="State" 
                                value={bankAccountDetail.state}
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={8} 
                                label="City" 
                                placeholder="City" 
                                value={bankAccountDetail.city}
                            />
                            <ColumnItem 
                                span={8} 
                                label="Country" 
                                placeholder="Country" 
                                value={bankAccountDetail.country}
                            />
                            <ColumnItem 
                                span={8} 
                                label="Postal Code" 
                                placeholder="Postal Code" 
                                value={bankAccountDetail.postalCode}
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={12} 
                                label="Bank Name" 
                                placeholder="Bank Name" 
                                value={bankAccountDetail.bankName}
                            />
                            <ColumnItem 
                                span={12} 
                                label="Bank Address" 
                                placeholder="Bank Address" 
                                value={bankAccountDetail.bankAddress}
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={12} 
                                label="Account" 
                                placeholder="Account" 
                                value={bankAccountDetail.account}
                            />
                            <ColumnItem 
                                span={12} 
                                label="Account Type" 
                                placeholder="Account Type" 
                                value={bankAccountDetail.accountType}
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={8} 
                                label="Swift" 
                                placeholder="Swift" 
                                value={bankAccountDetail.swift}
                            />
                            <ColumnItem 
                                span={8} 
                                label="IBAN" 
                                placeholder="IBAN" 
                                value={bankAccountDetail.iban}
                            />
                            <ColumnItem 
                                span={8} 
                                label="ABA" 
                                placeholder="ABA" 
                                value={bankAccountDetail.aba}
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={12} 
                                label="Salary" 
                                placeholder="Salary" 
                                value={bankAccountDetail.salary}
                            />
                            <ColumnItem 
                                span={12} 
                                label="Day Of Payment" 
                                placeholder="Day Of Payment" 
                                value={bankAccountDetail.dayOfPayment}
                            />
                        </Row>
                    </Input.Group>
                </Form>
            </div>
        </>
    )
}

export default BankAccountDetail;