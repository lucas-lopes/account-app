import { useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import TableData  from "../../../components/table/TableData";

import { getAllAccounts } from "../../../services/api";

const BankAccountList = () => {
    const [ accounts, setAccounts ] = useState([]);

    useEffect(() => {
        getAllAccounts(setAccounts);
    }, []);

    return (
        <>
            <Header titlePage="Bank Account List" isNewAccountIconEnabled={true} />
            <TableData data={accounts} handleGetAllAccounts={setAccounts} />
        </>
    )
}

export default BankAccountList;