const User = require('./user');
const Ad = require('./ad');

User.hasMany(Ad, {
    foreignKey: 'user_id',
});
  
Ad.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Ad };
