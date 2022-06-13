const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  });

  return UserTable;
};

module.exports = UserSchema;