module.exports = function (sequelize, DataTypes) {
     
     // defines grocery list values within table
     
     var groceryList = sequelize.define("groceryList", {
          groceryName: DataTypes.STRING,
          groceryQuantity: DataTypes.STRING,
          isBought: DataTypes.BOOLEAN,
     });

     // pairs grocery list to username

     groceryList.associate = function(models) {
          groceryList.belongsTo(models.userName, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return groceryList;
};