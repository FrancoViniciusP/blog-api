const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: { 
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.STRING,
    },
    image: {
      type: sequelize.STRING,
    }
  });

  return UserTable;
};

module.exports = UserSchema;