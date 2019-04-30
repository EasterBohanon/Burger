// reqire the connection
var connection = require('./connection.js');

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

function showQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}
var orm = {
    all: function (tableInput, dale) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            dale(result);
        });
    },
    insert: function (table, columns, values, dale) {
        var queryString = "INSERT INTO " + table + ";";

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += showQuestionMarks(values.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            dale(result);
        });
    },

    update: function (table, objColVals, condition, dale) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            dale(result);
        })


    }

}
module.exports = orm;



