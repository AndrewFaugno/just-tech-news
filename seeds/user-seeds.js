const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'andrew',
    email: 'email@email.com',
    password: 'password'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
