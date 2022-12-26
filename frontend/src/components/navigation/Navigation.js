import { Link, useParams } from "react-router-dom";
import { getAccount, removeAccount } from "../../utils/LocalStorage";

import { 
    HR_TYPE_OF_ACCOUNT,
    SPECIAL_TYPE_OF_ACCOUNT,
    LINK_TO_NEW_ACCOUNT,
    LINK_TO_BANK_ACCOUNT_LIST,
    LINK_TO_ACCOUNT_DETAILS,
    LINK_TO_BANK_ACCOUNT_DETAILS,
    LINK_TO_BANK_ACCOUNT_EDIT,
    LINK_TO_LOGIN
} from "../../utils/Constants";

import "./Navigation.css";

const Navigation = () => {
    const { id } = useParams();
    const { typeOfAccount, id: accountId } = getAccount();

    const navigationByTypeOfAccount = typeOfAccount => {
        if (typeOfAccount === HR_TYPE_OF_ACCOUNT || typeOfAccount === SPECIAL_TYPE_OF_ACCOUNT) {
            return (
                <>
                    <li>
                        <Link to={LINK_TO_BANK_ACCOUNT_LIST}>Bank Account List</Link>
                    </li>
                    <li>
                        <Link to={LINK_TO_NEW_ACCOUNT}>New Account</Link>
                    </li>
                    {id ? 
                        <>
                            <li>
                                <Link to={`${LINK_TO_ACCOUNT_DETAILS}/${id}`}>Account Detail</Link>
                            </li>
                            <li>
                                <Link to={`${LINK_TO_BANK_ACCOUNT_DETAILS}/${id}`}>Bank Account Detail</Link>
                            </li>
                            <li>
                                <Link to={`${LINK_TO_BANK_ACCOUNT_EDIT}/${id}`}>Edit Bank Account</Link>
                            </li>
                        </>
                    : ""}
                </>
            )
        } else {
            return (
                <>
                    <li>
                        <Link to={`${LINK_TO_ACCOUNT_DETAILS}/${accountId}`}>Account Detail</Link>
                    </li>
                    <li>
                        <Link to={`${LINK_TO_BANK_ACCOUNT_DETAILS}/${accountId}`}>Bank Account Detail</Link>
                    </li>
                    <li>
                        <Link to={`${LINK_TO_BANK_ACCOUNT_EDIT}/${accountId}`}>Edit Bank Account</Link>
                    </li>
                </>
            )
        }
    }

    return (
        <nav>
            <ul>
                {typeOfAccount ? 
                    <>
                        {navigationByTypeOfAccount(typeOfAccount)}
                        <li>
                            <Link to={LINK_TO_LOGIN} onClick={() => removeAccount()}>Logout</Link>
                        </li>
                    </>  
                    : <li>
                        <Link to={LINK_TO_LOGIN}>Back to Login Page</Link>
                    </li>}
            </ul>
        </nav>
    )
}

export default Navigation;