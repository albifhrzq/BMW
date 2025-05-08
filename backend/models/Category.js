module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Category.associate = (models) => {
    Category.hasMany(models.Car, {
      foreignKey: 'categoryId',
      as: 'cars',
    });
  };

  return Category;
}; 