const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001

const corsOptions = {
    origin:'http://localhost:3000'
}
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.post('/api/login', db.login)
app.post('/api/accounts', db.createAccount)
app.get('/api/accounts', db.getAllAccounts)
app.get('/api/accounts/:id', db.getAccountById)
app.delete('/api/accounts/:id', db.deleteAccount)
app.get('/api/accounts/bank-accounts/:id', db.getBankAccountById)
app.put('/api/accounts/bank-accounts/:id', db.updateBankAccount)

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})