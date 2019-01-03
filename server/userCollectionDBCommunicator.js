const MongoClient = require('mongodb').MongoClient;
const config = require('../config/development');

module.exports = class UsersDB {
  constructor () {
    MongoClient.connect(config.dbUrl, {
      useNewUrlParser: true
    }, (e, client) => {
      if (e) {
        console.log(e);
      } else {
        this.db = client.db();
        this.accounts = this.db.collection('users');
        this.accounts.createIndex({
          user: 1,
          email: 1
        });
      }
    });
  }

  async create (userParam) {
    const { name } = userParam;

    if (await this.accounts.findOne({ name })) {
      throw new Error(`Username ${name} is already taken`);
    }

    await this.accounts.insertOne(userParam);
  }

  async getUserId (userParam) {
    const {
      name,
      password
    } = userParam;
    const user = await this.accounts.findOne({ name });

    if (!user) {
      throw new Error(`Username ${name} does not exist.`);
    } else if (user.password !== password) {
      throw new Error('The password is wrong');
    }

    return user.id;
  }
};
