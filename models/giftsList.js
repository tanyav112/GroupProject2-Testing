module.exports = function(sequelize, DataTypes) {

     // defines gift list values within table

     var giftsList = sequelize.define("giftsList", {
          giftName: DataTypes.STRING,
          giftBudget: DataTypes.STRING,
          isPurchased: DataTypes.BOOLEAN,
     });

     // pairs gift list to username

     giftsList.associate = function(models) {
          giftsList.belongsTo(models.userName, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return giftsList;

}