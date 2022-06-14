const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define("PostCategory", {
      postId: { 
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true,
      }
    },
    { timestamps: false });

    PostCategoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, 
            { 
              as: 'categories',
              foreignKey: 'id',
              through: PostCategoryTable, 
              otherKey: 'categoryId',
            })
        models.Category.belongsToMany(models.BlogPost, 
            { 
              as: 'blogPosts',
              foreignKey: 'id',
              through: PostCategoryTable, 
              otherKey: 'postId',
            })
    }
    return PostCategoryTable;
  };
  
  module.exports = PostCategorySchema;

  