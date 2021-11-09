const fs = require('fs');
const chalk = require('chalk');

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON);
}

const createUser = (name, email) => {
    const users = loadUsers();
    const duplicateUser = users.find(user => user.email === email);
    console.log(duplicateUser);
    if (!duplicateUser) {
        console.log(chalk.green.inverse('User created!'));
        users.push({
            id: users[users.length - 1].id + 1,
            name: name,
            email: email
        })
        saveUsers(users);
    } else {
        console.log(chalk.red.inverse('Email already exist!'));
    }
}

const readUser = (id) => {
    const users = loadUsers();
    const readUser = users.filter(user => user.id == id)
    if (readUser.length > 0) {
        console.log(chalk.green.inverse('User Found:'));
        console.log(readUser[0]);
    } else
        console.log(chalk.red.inverse('User not found!'));
}

const updateUser = (id, name) => {
    let users = loadUsers();
    const updateUser = users.find(user => user.id == id);
    if (updateUser) {
        console.log(chalk.green.inverse('User updated'));
        updateUser.name = name;
        users = users.map(user => {
            return user.id == id ? updateUser : user;
        });
        console.log('users', users);
    } else {
        console.log(chalk.red.inverse('User not found!'));
    }
}

const deleteUser = (id) => {
    const users = loadUsers();
    const deleteUser = users.filter(user => user.id != id);
    if (users.length > deleteUser.length) {
        console.log(chalk.green.inverse('User deleted!'));
        saveUsers(deleteUser);
    } else {
        console.log(chalk.red.inverse('User noy found!'));
    }
}

module.exports = {
    createUser: createUser,
    readUser: readUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
}