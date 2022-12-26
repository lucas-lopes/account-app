export function saveAccount(account) {
    localStorage.setItem("account", JSON.stringify(account));
}

export function getAccount() {
    const account = JSON.parse(localStorage.getItem("account"));
    return account ? account : { isLoggedIn: false, typeOfAccount: undefined, id: undefined };
}

export function removeAccount() {
    localStorage.removeItem("account");
}