import { PlusCircleOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import Navigation  from "../navigation/Navigation";
import { getAccount } from "../../utils/LocalStorage";
import { 
    HR_TYPE_OF_ACCOUNT,
    SPECIAL_TYPE_OF_ACCOUNT,
    EMPLOYEE_TYPE_OF_ACCOUNT,
    LINK_TO_NEW_ACCOUNT
 } from "../../utils/Constants";

import "./Header.css";

const Header = ({titlePage, previousPath, isNewAccountIconEnabled}) => {
    
    const showIconToCreateNewAccountByTypeOfAccount = () => {
        const { typeOfAccount } = getAccount();
        if (isNewAccountIconEnabled && typeOfAccount === HR_TYPE_OF_ACCOUNT || typeOfAccount === SPECIAL_TYPE_OF_ACCOUNT) {
            return <Link to={LINK_TO_NEW_ACCOUNT} className="newAccount"><PlusCircleOutlined /></Link>
        }
    }

    const showOptionToBackToBankAccountList = () => {
        const { typeOfAccount } = getAccount();
        if (previousPath && typeOfAccount != null && typeOfAccount !== EMPLOYEE_TYPE_OF_ACCOUNT) {
            return (
                <Link to={previousPath} className="previousPath">
                    <LeftOutlined /> Bank Account List /
                </Link>
            )
        }
    }

    return (
        <header>
            <Navigation />
            <div className="titlePage">
                {showOptionToBackToBankAccountList()}
                <h1>{titlePage}</h1>
                {showIconToCreateNewAccountByTypeOfAccount()}
            </div>
        </header>
    );
}

export default Header;