module.exports = function (sequelize, DataTypes) {
     
     // defines recipe list values within table

     var recipesList = sequelize.define("recepiesList", {
          recipeName: DataTypes.STRING,
          recipeLink: DataTypes.STRING,
          recipeMakes: DataTypes.STRING
     });

     // pairs recipe list to username

     recipesList.associate = function(models) {
          recipesList.belongsTo(models.userName, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return recipesList;
};