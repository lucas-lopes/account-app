import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Row, Form } from 'antd';

import Header from "../../../components/header/Header.js";
import ColumnItem from "../../../components/form/column/ColumnItem.js";
import { getAccountDetail } from "../../../services/api.js";

import { LINK_TO_BANK_ACCOUNT_LIST } from "../../../utils/Constants.js";

import "./AccountDetail.css";

const AccountDetail = () => {
    const { id } = useParams();
    const [form] = Form.useForm();

    const [ account, setAccountDetail ] = useState({});
    
    useEffect(() => {
        getAccountDetail(id, setAccountDetail);
    }, [id, account])

    return (
        <>
            <Header titlePage="Account Detail" previousPath={LINK_TO_BANK_ACCOUNT_LIST} isNewAccountIconEnabled={true} />
            <div className="test">
                <Form
                    form={form}
                    layout="vertical"
                    disabled={true}
                >   
                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={4} 
                                label="ID" 
                                placeholder="ID" 
                                value={account.id} 
                            />
                            <ColumnItem 
                                span={10} 
                                label="Full Name" 
                                placeholder="Full Name" 
                                value={account.fullName} 
                            />
                            <ColumnItem 
                                span={10} 
                                label="Profile Name" 
                                placeholder="Profile Name" 
                                value={account.profileName} 
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={12} 
                                label="Email Address" 
                                placeholder="ID" 
                                value={account.emailAddress} 
                            />
                            <ColumnItem 
                                span={12} 
                                label="Client Name" 
                                placeholder="ID" 
                                value={account.client} 
                            />
                        </Row>
                    </Input.Group>

                    <Input.Group>
                        <Row gutter={16}>
                            <ColumnItem 
                                span={12} 
                                label="Status" 
                                placeholder="ID" 
                                value={account.status}
                                tooltip="Your current status. It can be: Active or Inactive"
                            />
                            <ColumnItem 
                                span={12} 
                                label="Type of Account" 
                                placeholder="ID" 
                                value={account.typeOfAccount} 
                                tooltip="The account can to be used by HR team, Special reason (as admin), or Employee that is the basic"
                            />
                        </Row>
                    </Input.Group>
                </Form>
            </div>
        </>
    )
}

export default AccountDetail;