const chalk = require('chalk');
const yargs = require('yargs');
const users = require('./CRUD_with_JSON');

yargs.version('1.1.0');

yargs.command({
    command: 'create',
    describe: 'Create new user',
    builder: {
        name: {
            describe: 'user full name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'user email',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        users.createUser(argv.name, argv.email);
    }
})

//Read user
yargs.command({
    command: 'read',
    describe: 'Read user by id',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        users.readUser(argv.id)
    }
})


yargs.command({
    command: 'update',
    describe: 'Update user name',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: 'string',
        },
        name: {
            describe: 'name',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        users.updateUser(argv.id, argv.name);
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete user',
    builder: {
        id: {
            describe: 'delete',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        users.deleteUser(argv.id)
    }
})

console.log(yargs.argv);