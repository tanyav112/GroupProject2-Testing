module.exports = function(sequelize, DataTypes) {

     // defines wish list values within table

     var wishList = sequelize.define("wishList", {
          itemName: DataTypes.STRING,
          itemLocation: DataTypes.STRING,
          itemPrice: DataTypes.STRING,
          itemOptions: DataTypes.STRING,
          isPurchased: DataTypes.BOOLEAN,
     });

     // pairs wish list to username

     wishList.associate = function(models) {
          wishList.belongsTo(models.userName, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return wishList;     
}