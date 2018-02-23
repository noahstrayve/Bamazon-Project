var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  greetingMessage()
  runSearch();
});

function greetingMessage() {
  console.log("-----------------------------------------------------------------------------")
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WELCOME TO BAMAZON!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log("-----------------------------------------------------------------------------")
};

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View a list of items in stock",
        "Place an order",
        "Nothing, I'm just here to look and not buy anything..."

      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View a list of items in stock":
          displayInventory();
          break;

        case "Place an order":
          selectInventory();
          break;

        case "Nothing, I'm just here to look and not buy anything...":
          getOut();
          break;
      }
    });
}
function displayInventory() {
  connection.query("SELECT * FROM inventory", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++) {
          console.log("Product ID: " + res[i].id +
            " || Item: " +
            res[i].productName +
            " || Price ($): " +
            res[i].price +
            " || In Stock: " +
            res[i].inStock
          );
          console.log("")
        }
    runSearch();
  });
}

function selectInventory() {
  inquirer
    .prompt({
      name: "item",
      type: "input",
      message: "What song would you like to look for?"
    })
    .then(function(answer) {
      console.log(answer.item);
      connection.query("SELECT * FROM inventory WHERE ?", { id: answer.item }, function(err, res) {
        console.log(
          "You have selected: " +
            res[0].productName +
            " || Price ($): " +
            res[0].price +
            " || In Stock: " +
            res[0].inStock
        );

        confirmer();
      });
    });
}

function confirmer() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Is this correct?",
      name: "confirmOrder",
      default: true
    })
    .then(function(answer) {
      if (answer.confirmOrder === true) {
        selectQuantity();
      } else if (answer.confirmOrder === false) {
        runSearch();
      }
  });
}

function selectQuantity() {
  console.log("ayyy you made it this far")
}






function thankYou() {
  console.log("Thank you for shopping with Bamazon")
  connection.end();
}

function getOut() {
  console.log("WELL THEN, BEAT IT BOZO!!!!")
  connection.end();
}