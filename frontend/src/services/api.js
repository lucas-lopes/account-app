import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api"
});

export const deleteAccount = (id, setAccounts) => {
    api.delete(`/accounts/${id}`)
        .then(() => getAllAccounts(setAccounts))
        .catch(err => console.error(err));
}

export const getAllAccounts = setAccounts => {
    api.get("/accounts")
        .then(response => setAccounts(response.data))
        .catch(err => console.error(err));
}

export const getAccountDetail = (id, setAccountDetail) => {
    api.get(`/accounts/${id}`)
        .then(response => setAccountDetail(response.data))
        .catch(err => console.error(err));
}

export const getBankAccountDetail = (id, setBankAccountDetail) => {
    api.get(`/accounts/bank-accounts/${id}`)
        .then(response => setBankAccountDetail(response.data))
        .catch(err => console.error(err));
}

export const editBankAccount = (id, account, setBankAccountDetail) => {
    api.put(`/accounts/bank-accounts/${id}`, account)
        .then(response => setBankAccountDetail(response.data))
        .catch(err => console.error(err));
}

export const createAccount = (newAccount, setResponseStatus) => {
    api.post("/accounts", newAccount)
        .then(response => setResponseStatus(response.status))
        .catch(err => console.error(err.response.data.errorDetail));
}

export const login = (credentials, setResponse) => {
    api.post("/login", credentials)
        .then(response => setResponse(response))
        .catch(err => console.error(err))
}