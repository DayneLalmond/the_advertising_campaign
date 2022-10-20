const User = require('./user');
const Ad = require('./ad');
const Contact = require('./contact');

User.hasMany(Ad, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Ad.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Ad.hasMany(Contact, {
    foreignKey: 'ad_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Ad, Contact };
