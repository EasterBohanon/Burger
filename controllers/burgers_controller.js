var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data){
        var obj = {
            burger: data
        };
        console.log(obj);
        res.render("index", obj);
    })
  });


  router.post("/api/burger", function(req, res) {
    burger.create([
        "burger_name"
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res){
      var id = parseInt(req.params.id);
      burger.update(id, function(data){
          console.log("up to date!");
          return res.json(data);
      });
  });

//   router.delete("api/burger/:id", function(req,res){
//     var id = parseInt(req.params.id);
//     burger.delete(id, function(data){
//         console.log("deleted");
//         return res.json(data);
//     });
//   });
  module.exports = router;