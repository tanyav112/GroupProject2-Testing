module.exports = function(sequelize, DataTypes) {

     var eventList = sequelize.define("eventList", {
          eventName: DataTypes.STRING,
          eventDate: DataTypes.DATE,
          eventTime: DataTypes.TIME,
          eventLocation: DataTypes.STRING
     });

     eventList.associate = function(models) {
          eventList.belongsTo(models.userName, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return eventList;
}