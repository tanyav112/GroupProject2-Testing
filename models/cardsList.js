module.exports = function(sequelize, DataTypes) {

     // defines card list values within table

     var cardsList = sequelize.define("cardsList", {
          cardsListName: DataTypes.STRING,
          cardsListAddress: DataTypes.STRING,
          isSent: DataTypes.BOOLEAN,
     });

     // paris card list to username

     cardsList.associate = function(models) {
          cardsList.belongsTo(models.userName, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return cardsList;
}