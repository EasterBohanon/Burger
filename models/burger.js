var orm = require("../config/orm.js");

var burger = {
    all: function(dale){
        orm.all("burgers", function(res){
            dale(res);
        })
    },
    create: function(name, dale){
        orm.create("burgers"["burger_name", "devoured"],
        [
            name, false
        ], dale);

    },
    update: function(id, dale){
        var condition = "id" + id;
        orm.update("burgers", {
            devoured: true

        }, condition, dale);
    }

}

module.exports = burger;
