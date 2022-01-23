const faker = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;

class User {
    constructor () {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor () {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {street: faker.address.streetName(), city: faker.address.city(), state: faker.address.state(), zipCode: faker.address.zipCode(), country: faker.address.country};
    }
    
}

app.get('/api/users/new', (req, res) => {
    let newUser = new User();
    res.json({result: newUser});
});

app.get('/api/companies/new', (req,res) => {
    let newCompany = new Company();
    res.json({result: newCompany});
});

app.get('/api/user/company', (req,res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({UserResult: newUser, CompanyResult: newCompany});
});

const server = app.listen(port, () =>
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);