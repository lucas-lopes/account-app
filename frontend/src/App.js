import { Route, Routes } from "react-router-dom";

import "./App.css";
import { NotFound } from "./pages/NotFound";
import BankAccountDetail  from "./pages/bankAccount/details/BankAccountDetail";
import EditBankAccount  from "./pages/bankAccount/edit/EditBankAccount";
import NewAccount  from "./pages/account/new/NewAccount";
import AccountDetail  from "./pages/account/details/AccountDetail";
import BankAccountList  from "./pages/bankAccount/list/BankAccountList";
import Login from "./pages/login/Login";
import { 
  LINK_TO_ACCOUNT_DETAILS, 
  LINK_TO_BANK_ACCOUNT_DETAILS, 
  LINK_TO_BANK_ACCOUNT_EDIT, 
  LINK_TO_BANK_ACCOUNT_LIST, 
  LINK_TO_NEW_ACCOUNT,
  LINK_TO_LOGIN
} from "./utils/Constants";

const App = () => {
    return (
      <main>
        <Routes className="content">
          <Route  
            path={LINK_TO_LOGIN} 
            element={<Login />} />
          <Route 
            path={LINK_TO_BANK_ACCOUNT_LIST}>
            <Route
              index 
              element={<BankAccountList />} />
            <Route 
              path={`${LINK_TO_BANK_ACCOUNT_DETAILS}/:id`} 
              element={<BankAccountDetail />} />
            <Route 
              path={`${LINK_TO_BANK_ACCOUNT_EDIT}/:id`} 
              element={<EditBankAccount />} />
          </Route>
          <Route 
            path="/accounts">
            <Route 
              path={LINK_TO_NEW_ACCOUNT} 
              element={<NewAccount />} />
            <Route 
              path={`${LINK_TO_ACCOUNT_DETAILS}/:id`} 
              element={<AccountDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    )
}

export default App;
