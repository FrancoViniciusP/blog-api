const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define("PostCategory", {    
     postId: { 
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        foreignKey: true,
      }
    },
    { timestamps: false });

    PostCategoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, 
            { 
              as: 'categories',
              foreignKey: 'postId',
              through: PostCategoryTable, 
              otherKey: 'id',
            })
        models.Category.belongsToMany(models.BlogPost, 
            { 
              as: 'blogPosts',
              foreignKey: 'categoryId',
              through: PostCategoryTable, 
              otherKey: 'id',
            })
    }
    return PostCategoryTable;
  };
  
  module.exports = PostCategorySchema;