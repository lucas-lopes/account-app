import { Link } from "react-router-dom";
import { Table } from "antd";
import { EyeFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
import Column from "antd/es/table/Column";

import { deleteAccount } from "../../services/api";

import { 
    LINK_TO_ACCOUNT_DETAILS, 
    LINK_TO_BANK_ACCOUNT_DETAILS, 
    LINK_TO_BANK_ACCOUNT_EDIT 
} from "../../utils/Constants";

import "./TableData.css";

const TableData = ({ handleGetAllAccounts, data }) => {

    return (
        <Table className="table" dataSource={data}>
            <Column 
                title="ID" 
                dataIndex="id" 
                key="id" 
                render={(id) => <Link to={`${LINK_TO_ACCOUNT_DETAILS}/${id}`}>{id}</Link>}
            />
            <Column title="Name" dataIndex="fullName" key="fullName" />
            <Column title="E-mail" dataIndex="emailAddress" key="emailAddress" />
            <Column title="Status" dataIndex="status" key="status" />
            <Column title="Type of Account" dataIndex="typeOfAccount" key="typeOfAccount" />
            <Column title="Client" dataIndex="client" key="client" />
            <Column 
                title="Bank Account"
                render={({ id }) => <Link to={`${LINK_TO_BANK_ACCOUNT_DETAILS}/${id}`}><EyeFilled style={{ fontSize: 20 }} /></Link>}
            />
            <Column 
                className="actions"
                title="Actions"
                render={({ id }) => (
                    <>
                        <Link to={`${LINK_TO_BANK_ACCOUNT_EDIT}/${id}`}>
                            <EditFilled style={{ fontSize: 20, color: "blue" }} />
                        </Link>
                        
                        <DeleteFilled onClick={() => deleteAccount(id, handleGetAllAccounts)} style={{ fontSize: 20, color: "red" }} />
                    </>
                )}
            />
        </Table>
    )
}

export default TableData;