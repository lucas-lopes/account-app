const data = require('./data')

const login = (request, response) => {
    const { username, password } = request.body;
    
    const login = data.tableData
        .filter(account => account.emailAddress === username && account.password === password)[0];
    
    if (!login) {
        response.status(403).send({ "errorDetail": "Username or password incorrect" });
        return;
    } else if (login.status === "Inactive") {
        response.status(403).send({ "errorDetail": "User status is inactive. Please, contact the support team." });
        return;
    }

    response.status(200).send(login);
}

const createAccount = (request, response) => {
    const newAccount = request.body;
    const password = newAccount.password;
    const passwordConfirmation = newAccount.passwordConfirmation;

    if (!isEmailValid(request, response) || !arePasswordEqualsToPasswordConfirmation(password, passwordConfirmation, response)) {
        return;
    }

    generateId(newAccount);
    data.tableData.push(newAccount);
    response.status(201).send(newAccount);
}

const getAllAccounts = (request, response) => {
    response.status(200).send(data.tableData)
}

const getAccountById = (request, response) => {
    const account = getAccountFromDataSourceById(request);
    response.status(200).send(account);
    
}

const deleteAccount = (request, response) => {
    const id = request.params.id;
    data.tableData = data.tableData.filter(dataSource => dataSource.id != id);
    response.status(204).send(id);
}

const getBankAccountById = (request, response) => {
    const account = getAccountFromDataSourceById(request)
    response.json(account.bankAccount)
}

const updateBankAccount = (request, response) => {
    const id = parseInt(request.params.id);
    const bankAccountRequest = request.body;
    const idFromRequestBody = parseInt(bankAccountRequest.id);

    data.tableData
        .filter(account => account.id === id && id === idFromRequestBody)
        .map(account => {
            account.bankAccount.salary = bankAccountRequest.salary;
            account.bankAccount.dayOfPayment = bankAccountRequest.dayOfPayment;
            account.bankAccount.beneficiaryName = bankAccountRequest.beneficiaryName;
            account.bankAccount.beneficiaryAddress = bankAccountRequest.beneficiaryAddress;
            account.bankAccount.city = bankAccountRequest.city;
            account.bankAccount.country = bankAccountRequest.country;
            account.bankAccount.postalCode = bankAccountRequest.postalCode;
            account.bankAccount.bankAddress = bankAccountRequest.bankAddress;
            account.bankAccount.state = bankAccountRequest.state;
            account.bankAccount.bankName = bankAccountRequest.bankName;
            account.bankAccount.account = bankAccountRequest.account;
            account.bankAccount.accountType = bankAccountRequest.accountType;
            account.bankAccount.swift = bankAccountRequest.swift;
            account.bankAccount.iban = bankAccountRequest.iban;
            account.bankAccount.aba = bankAccountRequest.aba;
        });

    response.status(204).send(bankAccountRequest);
}

const isEmailFormatValid = (email, response) => {
    const isValidFormat = String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    
    if (!isValidFormat) {
        response.status(400).send({ "errorDetail": "E-mail is in a invalid format" });
        return false;
    }
    return true;
}

const checkIfEmailExists = (email, response) => {
    const emails = getAccountFromDataSourceByEmail(email);

    if (emails.length > 0) {
        response.status(400).send({ "errorDetail": "E-mail already taken" });
        return true;
    }
    return false;
}

const getAccountFromDataSourceById = request => {
    const id = parseInt(request.params.id);
    return data.tableData.filter(dataSource => dataSource.id === id)[0];
}

const getAccountFromDataSourceByEmail = email => data.tableData.filter(dataSource => dataSource.emailAddress === email);

const generateId = newAccount => {
    const lastIndex = data.tableData.length;
    const nextIndex = lastIndex + 1;
    newAccount.id = nextIndex;
    newAccount.key = nextIndex;
}

const isEmailValid = (request, response) => {
    const email = request.body.emailAddress;
    const hasValidFormat = isEmailFormatValid(email, response);
    const isEmailBeingUsed = checkIfEmailExists(email, response);
    return !hasValidFormat || isEmailBeingUsed ? false : true;
}

const arePasswordEqualsToPasswordConfirmation = (password, passwordConfirmation, response) => {
    if (password !== passwordConfirmation) {
        response.status(400).send({ "errorDetail": "Password and Confirmation are not equals. It must be equal." });
        return false;
    }
    return true;
}

module.exports = {
    login,
    createAccount,
    getAllAccounts,
    getAccountById,
    deleteAccount,
    getBankAccountById,
    updateBankAccount
}