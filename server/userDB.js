const MongoClient 	= require('mongodb').MongoClient;


module.exports = class UsersDB {
  constructor() {
    this.url = 'mongodb://admin:33_Korovi@ds027483.mlab.com:27483/liabilities';
    MongoClient.connect(this.url, {
      useNewUrlParser: true
    }, (e, client) => {
      if (e){
        console.log(e);
      }	else{
        this.db = client.db();
        this.accounts = this.db.collection('users');
        // index fields 'user' & 'email' for faster new account validation //
        this.accounts.createIndex({user: 1, email: 1});
        console.log('mongo :: connected to database');
      }
    })
  }

  async create(userParam) {
    const { name } = userParam;
    if (await this.accounts.findOne({ name })) {
      throw `Username ${name} is already taken`;
    }

    await this.accounts.insertOne(userParam);
  }

  async getUserId(userParam) {
    const {
      name,
      password
    } = userParam;
    const user = await this.accounts.findOne({ name });

    if (!user.name) {
      throw `Username ${name} does not exist.`;
    } else if (user.password !== password) {
      throw 'The password is wrong';
    }

    return user.id;
  }
};