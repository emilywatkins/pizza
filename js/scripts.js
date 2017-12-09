function Pizza(size, meat, veg) {
  this.size = size;
  this.meat = meat;
  this.veg = veg;
};

Pizza.prototype.sizePrice = function(pizzaPrice) {
  if (this.size === "small") {
    pizzaPrice += 1;
  } else if (this.size === "medium") {
    pizzaPrice += 2;
  } else if (this.size === "large") {
    pizzaPrice += 3;
  }
  return pizzaPrice;
};

Pizza.prototype.toppingsPrice = function(countMeat, countVeg) {
  return (countMeat * 2) + countVeg;
};

Pizza.prototype.addMeat = function(inputMeat) {
  this.meat.push(inputMeat);
}

Pizza.prototype.addVeg = function(inputVeg) {
  this.veg.push(inputVeg);
}

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    $(".result").empty();

    var pizzaPrice = 5;

    var inputSize = $("#size").val();
    var countMeat = $(".meat:checked").length;
    var countVeg = $(".veg:checked").length;
    var inputMeat = $(".meat:checked").val();
    var inputVeg = $(".veg:checked").val();

    var pizza = new Pizza(inputSize, [], [])


    var totalPrice = pizza.toppingsPrice(countMeat, countVeg) + pizza.sizePrice(pizzaPrice);

    console.log(totalPrice);

    $(".result").append("<div id='resultDetails'>" + "<h2><u>Order summary</u></h2>" +
                        "<h4>" + inputSize + " pizza </h4>" +
                        "<h4>Total price: $" + totalPrice + "</h4>" +
                        "<h4>Toppings:</h4>" + "</div>");

    $(".meat:checked").each(function() {
      var inputMeat = $(this).val();
      pizza.addMeat(inputMeat);
      $(".result").append(inputMeat + "<br>");
    });

    $(".veg:checked").each(function() {
      var inputVeg = $(this).val();
      pizza.addVeg(inputVeg);
      $(".result").append(inputVeg + "<br>");
    });
  })
})
