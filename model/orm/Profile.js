var sequelize = require('./../../dbconnection/mysql/connection');
var Sequelize = require('sequelize');

var Account = require('./Account'); // load to make FK

var Profile = sequelize.define('Profile', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: Sequelize.STRING,
    gender: Sequelize.INTEGER,
    // It is possible to create foreign keys:
    account_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: Account,
        // This is the column name of the referenced model
        key: 'id',
      }
    }
});

// force: true will drop the table if it already exists
Profile.sync({force: false}).then(() => {
  // Table created
  // return Profile.create({
  //   full_name: 'admin',
  //   gender: 0,
  // });
});

module.exports = Profile;
