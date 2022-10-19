const User = require('./user');
const Ad = require('./ad');

User.hasMany(Ad, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Ad.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Ad };
