const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define("BlogPost", {
        id: { 
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING
        },
        content: {
          type: DataTypes.STRING
        },
        userId: {
          type: DataTypes.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
          foreignKey: true,
        },
        published: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        }
      }, {
      timestamps: false,
    });

    BlogPostTable.associate = (models) => {
        BlogPostTable.belongsTo(models.User, 
            { foreignKey: 'userId', as: 'users' });
    };

    return BlogPostTable;
  };
  
  module.exports = BlogPostSchema;