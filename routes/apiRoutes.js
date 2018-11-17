//this file offers a set of routes for displaying and saving data to the db
//require dependencies
// =============================================================
var path = require("path");

//require model
// =============================================================
var db = require("../models");


//Routes
// =============================================================
module.exports = function (app) {

     //Card Routes  
     //GET route for getting all of the cards data
     app.get("/api/cards/", function (req, res) {
          db.Card.findAll({})
               .then(function (dbCard) {
                    res.json(dbCard);
               });
     });

     // POST route for saving a new card 
     app.post("/api/cards", function (req, res) {
          console.log(req.body);
          db.Card.create({
               isSent: req.body.sent,
               name: req.body.name,
               street: req.body.street,
               city: req.body.city,
               state: req.body.state,
               zipCode: req.body.zipCode
          })
               .then(function (dbCard) {
                    res.json(dbCard);
               });
     });

     // DELETE route for deleting cards
     app.delete("/api/cards/:id", function (req, res) {
          db.Card.destroy({
               where: {
                    id: req.params.id
               }
          })
               .then(function (dbCard) {
                    res.json(dbCard);
               });
     });

     // PUT route for updating cards
     app.put("/api/cards", function (req, res) {
          db.Card.update(req.body,
               {
                    where: {
                         id: req.body.id
                    }
               })
               .then(function (dbCard) {
                    res.json(dbCard);
               });
     });

     //Event Routes 
     // GET route for getting all of the events data
     app.get("/api/events/", function (req, res) {
          db.Event.findAll({})
               .then(function (dbEvent) {
                    res.json(dbEvent);
               });
     });

     // POST route for saving a new event 
     app.post("/api/events", function (req, res) {
          console.log(req.body);
          db.Event.create({
               date: req.body.date,
               time: req.body.time,
               activity: req.body.activity,
               location: req.body.location,
               instructions: req.body.instructions
          })
               .then(function (dbEvent) {
                    res.json(dbEvent);
               });
     });

     // DELETE route for deleting events
     app.delete("/api/events/:id", function (req, res) {
          db.Event.destroy({
               where: {
                    id: req.params.id
               }
          })
               .then(function (dbEvent) {
                    res.json(dbEvent);
               });
     });

     // PUT route for updating events
     app.put("/api/events", function (req, res) {
          db.Event.update(req.body,
               {
                    where: {
                         id: req.body.id
                    }
               })
               .then(function (dbEvent) {
                    res.json(dbEvent);
               });
     });

     //Gift Routes 
     // GET route for getting all of the gifts data
     app.get("/giftsList/", function (req, res) {
          db.giftsList.findAll({})
               .then(function (dbGift) {
                    console.log("?")
                    res.json(dbGift);
               });
     });

     // POST route for saving a new gift 
     app.post("/giftsList", function (req, res) {
          console.log(req.body);
          db.giftsList.create({
               isBought: req.body.isBought,
               name: req.body.name,
               budget: req.body.budget
          })
               .then(function (dbGift) {
                    res.json(dbGift);
               });
     });

     // DELETE route for deleting gifts
     app.delete("/giftsList/:id", function (req, res) {
          db.giftsList.destroy({
               where: {
                    id: req.params.id
               }
          })
               .then(function (dbGift) {
                    res.json(dbGift);
               });
     });

     // PUT route for updating gifts
     app.put("/giftsList", function (req, res) {
          db.giftsList.update(req.body,
               {
                    where: {
                         id: req.body.id
                    }
               })
               .then(function (dbGift) {
                    res.json(dbGift);
               });
     });

     //Recipe Routes 
     // GET route for getting all of the recipes data
     app.get("/api/recipes/", function (req, res) {
          db.Recipe.findAll({})
               .then(function (dbRecipe) {
                    res.json(dbRecipe);
               });
     });

     // POST route for saving a new recipes 
     app.post("/api/recipes", function (req, res) {
          console.log(req.body);
          db.Recipe.create({
               isMade: req.body.isMade,
               type: req.body.type,
               link: req.body.link,
               makes: req.body.makes
          })
               .then(function (dbRecipe) {
                    res.json(dbRecipe);
               });
     });

     // DELETE route for deleting recipes
     app.delete("/api/recipes/:id", function (req, res) {
          db.Recipe.destroy({
               where: {
                    id: req.params.id
               }
          })
               .then(function (dbRecipe) {
                    res.json(dbRecipe);
               });
     });

     // PUT route for updating recipes
     app.put("/api/recipes", function (req, res) {
          db.Recipe.update(req.body,
               {
                    where: {
                         id: req.body.id
                    }
               })
               .then(function (dbRecipe) {
                    res.json(dbRecipe);
               });
     });

     //Grocery Routes
     // GET route for getting all of the groceries data
     app.get("/api/groceries/", function (req, res) {
          db.Groceries.findAll({})
               .then(function (dbGroceries) {
                    res.json(dbGroceries);
               });
     });

     // POST route for saving a new groceries 
     app.post("/api/groceries", function (req, res) {
          console.log(req.body);
          db.Groceries.create({
               isBought: req.body.isBought,
               quantity: req.body.quantity,
               item: req.body.item
          })
               .then(function (dbGroceries) {
                    res.json(dbGroceries);
               });
     });

     // DELETE route for deleting groceries
     app.delete("/api/groceries/:id", function (req, res) {
          db.Groceries.destroy({
               where: {
                    id: req.params.id
               }
          })
               .then(function (dGroceries) {
                    res.json(dbGroceries);
               });
     });

     // PUT route for updating groceries
     app.put("/api/groceries", function (req, res) {
          db.Groceries.update(req.body,
               {
                    where: {
                         id: req.body.id
                    }
               })
               .then(function (dbGroceries) {
                    res.json(dbGroceries);
               });
     });


     //Wish Routes
     // GET route for getting all of the wishes data
     app.get("/api/wishes/", function (req, res) {
          db.Wish.findAll({})
               .then(function (dbWish) {
                    res.json(dbWish);
               });
     });

     // POST route for saving a new wishes 
     app.post("/api/wishes", function (req, res) {
          console.log(req.body);
          db.Wish.create({
               iBbought: req.body.isBought,
               price: req.body.amount,
               store: req.body.store,
               option: req.body.option,
               item: req.body.item
          })
               .then(function (dbWish) {
                    res.json(dbWish);
               });
     });

     // DELETE route for deleting wishes
     app.delete("/api/wishes/:id", function (req, res) {
          db.Wish.destroy({
               where: {
                    id: req.params.id
               }
          })
               .then(function (dWish) {
                    res.json(dbWish);
               });
     });

     // PUT route for updating wishes
     app.put("/api/wishes", function (req, res) {
          db.Wish.update(req.body,
               {
                    where: {
                         id: req.body.id
                    }
               })
               .then(function (dbWish) {
                    res.json(dbWish);
               });
     });
};